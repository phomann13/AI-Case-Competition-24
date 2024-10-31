import { NextRequest, NextResponse } from 'next/server';

type Message = { role: string; content: string };
const sessions = new Map<string, Message[]>();

function getSessionId(req: NextRequest): string {
    let sessionId = req.headers.get('session-id');
    if (!sessionId) {
        sessionId = crypto.randomUUID(); // Generate a new session ID
    }
    return sessionId;
}

export async function POST(req: NextRequest) {
    const { message } = await req.json();
    const sessionId = getSessionId(req);

    // Retrieve or initialize session data
    let messages = sessions.get(sessionId) || [{ role: 'system', content: 'You are a helpful assistant.' }];
    messages.push({ role: 'user', content: message });

    // Fetch response from OpenAI
    const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages,
        }),
    });
    const data = await openAiResponse.json();
    const botReply = data.choices[0].message.content;

    // Append assistant's reply to messages and store in the session
    messages.push({ role: 'assistant', content: botReply });
    sessions.set(sessionId, messages);

    return NextResponse.json({ reply: botReply, sessionId }, { headers: { 'session-id': sessionId } });
}
