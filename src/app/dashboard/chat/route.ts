// src/app/api/chat/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure to set this environment variable
});

export async function POST(request: Request) {
  const { message } = await request.json();

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Choose the model you want to use
      messages: [{ role: 'user', content: message }],
    });

    const botMessage = response.choices[0].message.content;
    return NextResponse.json({ message: botMessage });
  } catch (error) {
    return NextResponse.json({ error: 'Error communicating with OpenAI' }, { status: 500 });
  }
}
