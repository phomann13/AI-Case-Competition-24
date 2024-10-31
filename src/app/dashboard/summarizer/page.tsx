'use client';
import { useState, useEffect } from 'react';
import { Button, Container, TextField, Typography, Box, CircularProgress } from '@mui/material';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    let storedSessionId = localStorage.getItem('sessionId');
    if (!storedSessionId) {
      storedSessionId = crypto.randomUUID();
      localStorage.setItem('sessionId', storedSessionId);
    }
    setSessionId(storedSessionId);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPdfFile(event.target.files[0]);
    }
  };

  const handleSendInitialMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pdfFile || !prompt) return;

    const formData = new FormData();
    formData.append('pdfFile', pdfFile);
    formData.append('prompt', prompt);

    setLoading(true);
    setMessages((prev) => [...prev, { sender: 'user', text: prompt }]);
    setPrompt('');

    try {
      const response = await fetch('http://localhost:5000/api/pdfAssistant', {
        method: 'POST',
        headers: {
          'session-id': sessionId || '',
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        const botMessage: Message = { sender: 'bot', text: result.reply };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        console.error(result.error);
        setMessages((prev) => [...prev, { sender: 'bot', text: 'Error: ' + result.error }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error occurred while processing.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newMessage) return;

    setLoading(true);
    setMessages((prev) => [...prev, { sender: 'user', text: newMessage }]);
    setNewMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/pdfAssistant', {
        method: 'POST',
        headers: {
          'session-id': sessionId || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newMessage }),
      });

      const result = await response.json();
      if (response.ok) {
        const botMessage: Message = { sender: 'bot', text: result.reply };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        console.error(result.error);
        setMessages((prev) => [...prev, { sender: 'bot', text: 'Error: ' + result.error }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error occurred while processing.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setPdfFile(null);
    setPrompt('');
    setNewMessage('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mb: 2 }}>PDF Assistant</Typography>
      <form onSubmit={handleSendInitialMessage}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Initial Prompt"
            variant="outlined"
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            required
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Send Initial'}
        </Button>
      </form>
      <Button variant="outlined" color="secondary" onClick={handleNewChat} sx={{ mt: 2 }}>
        Clear Chat
      </Button>
      <Box mt={4} sx={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '4px', padding: 2 }}>
        {messages.map((msg, index) => (
          <Box key={index} sx={{ marginBottom: 1, textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <Typography variant="body1" sx={{ backgroundColor: msg.sender === 'user' ? '#d1e7dd' : '#f8d7da', borderRadius: '8px', padding: 1 }}>
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <form onSubmit={handleSendMessage} style={{ marginTop: '16px' }}>
        <Box display="flex" alignItems="center">
          <TextField
            label="Type your message"
            variant="outlined"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ ml: 1 }} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Send'}
          </Button>
        </Box>
      </form>
    </Container>
  );
}
