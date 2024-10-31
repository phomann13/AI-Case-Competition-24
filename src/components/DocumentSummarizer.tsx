// components/DocumentSummarizer.tsx
'use client';
import { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Typography,
    CircularProgress,
    Snackbar,
    Alert,
    Paper,
    TextField,
} from '@mui/material';
import { PdfReader } from 'pdfreader';

export function DocumentSummarizer() {
    const [file, setFile] = useState<File | null>(null);
    const [summary, setSummary] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [prompt, setPrompt] = useState<string>(''); // State for prompt input

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleSummarize = async () => {
        if (!file || !prompt) return; // Check if both file and prompt are set
    
        setLoading(true);
    
        try {
            const reader = new FileReader();
    
            reader.onloadend = async () => {
                const pdfData = new Uint8Array(reader.result as ArrayBuffer);
                
                // Convert Uint8Array to Buffer
                const buffer = Buffer.from(pdfData); // Convert to Buffer
                
                // Use pdfreader to parse the PDF
                const pdfText = await new Promise<string>((resolve, reject) => {
                    new PdfReader().parseBuffer(buffer, (err, item) => {
                        if (err) {
                            reject(err);
                        } else if (item && item.text) {
                            resolve(item.text);
                        }
                    });
                });
    
                const response = await fetch('/api/summarize', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ file: pdfText, prompt }), // Send the PDF text and prompt
                });
    
                if (!response.ok) {
                    throw new Error('Failed to summarize the document');
                }
    
                const data = await response.json();
                setSummary(data.summary);
            };
    
            reader.readAsArrayBuffer(file); // Use readAsArrayBuffer for pdfreader
        } catch (error: any) {
            setSnackbarMessage(error.message);
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };
    

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom align="center">
                Document Summarizer
            </Typography>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    id="upload-file"
                />
                <label htmlFor="upload-file">
                    <Button
                        variant="contained"
                        component="span"
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        Upload Document
                    </Button>
                </label>
                {file && (
                    <Typography variant="body1" align="center">
                        {file.name}
                    </Typography>
                )}
                <TextField
                    label="Enter Prompt"
                    variant="outlined"
                    fullWidth
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSummarize}
                    fullWidth
                    disabled={!file || loading || !prompt} // Disable button if file or prompt is missing
                >
                    {loading ? (
                        <CircularProgress size={24} />
                    ) : (
                        'Summarize Document'
                    )}
                </Button>
                {summary && (
                    <Box mt={3}>
                        <Typography variant="h6">Summary:</Typography>
                        <Typography variant="body1">{summary}</Typography>
                    </Box>
                )}
            </Paper>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}
