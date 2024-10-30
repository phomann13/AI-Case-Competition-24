import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { message } = await request.json();
        
        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Use the appropriate model
                messages: [{ role: 'user', content: message }],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: `OpenAI API error: ${errorData.message}` }, { status: response.status });
        }

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        return NextResponse.json({ message: botResponse });
    } catch (error) {
        return NextResponse.json({ error: "Error communicating with OpenAI: " + error.message }, { status: 500 });
    }
}
