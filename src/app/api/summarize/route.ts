import { OpenAI } from 'openai';
import pdfParse from 'pdf-parse';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const form = new formidable.IncomingForm({
    maxFileSize: 10 * 1024 * 1024, // Set max file size to 10MB
  });

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        if (err.message.includes('maxFileSize exceeded')) {
          return resolve(new Response(JSON.stringify({ error: 'File size exceeds the 10MB limit.' }), { status: 413 }));
        }
        return resolve(new Response(JSON.stringify({ error: 'Error parsing the file' }), { status: 500 }));
      }

      const { prompt } = fields;
      const pdfFile = files.pdfFile;

      if (!pdfFile || !prompt) {
        return resolve(new Response(JSON.stringify({ error: 'PDF file and prompt are required' }), { status: 400 }));
      }

      try {
        const pdfBuffer = fs.readFileSync(pdfFile.filepath);
        const pdfText = await pdfParse(pdfBuffer);

        const completion = await openai.chat.completions.create({
          model: 'gpt-4',
          messages: [{ role: 'user', content: `${prompt}\n\n${pdfText.text}` }],
        });

        const summary = completion.choices[0].message.content;
        return resolve(new Response(JSON.stringify({ summary }), { status: 200 }));
      } catch (error) {
        console.error('Error processing PDF or sending to OpenAI:', error);
        return resolve(new Response(JSON.stringify({ error: 'Failed to process PDF or generate summary.' }), { status: 500 }));
      }
    });
  });
}
