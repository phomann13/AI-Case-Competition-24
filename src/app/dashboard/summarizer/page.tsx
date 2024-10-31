// src/app/page.tsx
'use client';
import { useState } from 'react';
import { Button, Container, TextField, Typography, Box, CircularProgress } from '@mui/material';

export default function Page() {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [summary, setSummary] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setPdfFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!pdfFile || !prompt) return;

        const formData = new FormData();
        formData.append('pdfFile', pdfFile);
        formData.append('prompt', prompt);

        setLoading(true);
        setSummary([]);

        try {
            const response = await fetch('/api/pdfAssistant', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (response.ok) {
                setSummary(result.answers);
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{ mb: 2 }}>PDF Summarizer</Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Prompt"
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
                    {loading ? <CircularProgress size={24} /> : 'Summarize'}
                </Button>
            </form>
            {summary.length > 0 && (
                <Box mt={4}>
                    <Typography variant="h6">Summary:</Typography>
                    {summary.map((answer, index) => (
                        <Typography key={index} variant="body1">{answer}</Typography>
                    ))}
                </Box>
            )}
        </Container>
    );
}
