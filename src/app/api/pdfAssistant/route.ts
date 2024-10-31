// src/app/api/pdfAssistant/route.ts
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';

// Configure OpenAI
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Set your OpenAI API key
});
const openai = new OpenAIApi(configuration);

// Disable the default body parser
export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parsing
    },
};

export async function POST(request: Request) {
    const form = new formidable.IncomingForm();

    return new Promise((resolve, reject) => {
        form.parse(request, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing the file:', err);
                return reject(new NextResponse('Error parsing the file', { status: 400 }));
            }

            const { prompt } = fields; // Get the prompt from the form fields
            const pdfFile = files.pdfFile[0]; // Get the uploaded PDF file

            // Read the uploaded PDF file
            const filePath = pdfFile.filepath;

            // Here you would typically extract text from the PDF using a library
            // For the sake of example, let's assume we have a function that extracts text:
            const pdfText = await extractTextFromPdf(filePath); // Implement this function accordingly

            // Use the OpenAI API to get a summary based on the prompt and extracted text
            try {
                const response = await openai.createChatCompletion({
                    model: 'gpt-4', // Replace with your preferred model
                    messages: [
                        { role: 'user', content: `Summarize the following text based on this prompt: ${prompt}\n\nText: ${pdfText}` }
                    ],
                });

                const summary = response.data.choices[0].message.content;
                resolve(NextResponse.json({ answers: summary.split('\n').filter(line => line.trim() !== '') }));
            } catch (apiError) {
                console.error('Error with OpenAI API:', apiError);
                reject(new NextResponse('Error with OpenAI API', { status: 500 }));
            } finally {
                // Clean up the uploaded file if necessary
                fs.unlinkSync(filePath); // Remove the temporary file
            }
        });
    });
}

// Function to extract text from PDF (you can use libraries like pdf-lib, pdf-parse, etc.)
async function extractTextFromPdf(filePath: string): Promise<string> {
    // Implement your PDF text extraction logic here
    // This is a placeholder implementation:
    return "Extracted text from the PDF"; // Replace with actual extraction logic
}
