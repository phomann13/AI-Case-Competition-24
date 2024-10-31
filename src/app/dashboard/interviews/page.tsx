'use client';
import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Input,
    FormControl,
    Box,
    Paper,
    CircularProgress,
    LinearProgress,
} from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';

const InterviewsPage = () => {
    const [resume, setResume] = useState<File | null>(null);
    const [jobDescription, setJobDescription] = useState<string>('');
    const [interviewQuestions, setInterviewQuestions] = useState<string[]>(['Tell me about yourself.']);
    const [audioFiles, setAudioFiles] = useState<File[]>([]);
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setResume(event.target.files[0]);
        }
    };

    const handleJobDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJobDescription(event.target.value);
    };

    const handleAudioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setAudioFiles(Array.from(event.target.files));
        }
    };
    const handleInterviewQuestionChange = (index: number, value: string) => {
        const updatedQuestions = [...interviewQuestions];
        updatedQuestions[index] = value;
        setInterviewQuestions(updatedQuestions);
    };

    const handleAddQuestion = () => {
        setInterviewQuestions([...interviewQuestions, '']);
    };

    const handleRemoveQuestion = (index: number) => {
        const updatedQuestions = interviewQuestions.filter((_, i) => i !== index);
        setInterviewQuestions(updatedQuestions);
    };
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('pdf_path', resume as Blob);
        formData.append('job_description', jobDescription);
        interviewQuestions.forEach((question, index) => {
            formData.append(`interview_questions[]`, question); // Changed to append as an array
        });
        audioFiles.forEach((audio, index) => {
            formData.append(`audio_file_paths[]`, audio); // Changed to append as an array
        });
        

        setLoading(true); // Start loading
        const response = await fetch('http://127.0.0.1:5000/evaluate', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setResult(data);
        setLoading(false); // End loading
    };
    function getSubstringStartingWithWord(str: string, word: string): string | null {
        const startIndex = str.indexOf(word);
        if (startIndex === -1) {
            return null; // Return null if the word is not found
        }
        return str.substring(startIndex); // Return the substring starting with the word
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Interview Preparation
            </Typography>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h7" gutterBottom>
                    Upload Resume
                </Typography>
                <FormControl fullWidth margin="normal">
                    <Input
                        id="resume-upload"
                        type="file"
                        onChange={handleResumeChange}
                        inputProps={{ accept: '.pdf' }}
                    />
                </FormControl>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Job Description"
                    variant="outlined"
                    value={jobDescription}
                    onChange={handleJobDescriptionChange}
                    margin="normal"
                />
                 <Typography variant="h7" marginBottom={2}>
                    Interview Questions
                </Typography>
                <br></br>
                {interviewQuestions.map((question, index) => (
                    <Box key={index} marginBottom={2}>
                        <TextField
                            fullWidth
                            label={`Question ${index + 1}`}
                            variant="outlined"
                            value={question}
                            onChange={(e) => handleInterviewQuestionChange(index, e.target.value)}
                        />
                        <Button 
                            variant="outlined" 
                            color="secondary" 
                            onClick={() => handleRemoveQuestion(index)} 
                            style={{ marginTop: '10px' }}
                        >
                            Remove
                        </Button>
                    </Box>
                ))}
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={handleAddQuestion} 
                    style={{ marginBottom: '20px' }}
                >
                    Add Interview Question
                </Button>
                <br></br>
                <Typography variant="h7" gutterBottom>
                    Upload Interview Audio
                </Typography>
                <FormControl fullWidth margin="normal">
                    <Input
                        id="interview-upload"
                        type="file"
                        onChange={handleAudioChange}
                        multiple
                        inputProps={{ accept: '.wav,.mp3,.m4a' }}
                    />
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Evaluate
                </Button>
            </Paper>

            {loading ? (
    <Box display="flex" justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
        <CircularProgress />
    </Box>
) : result && (
    <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5">Results:</Typography>
        <Typography variant="h6">Resume Score:</Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
            <Gauge width={100} height={100} value={parseInt(result.resume_score)} />
        </Box>
        <Typography variant="h6">Interview Evaluations:</Typography>
        <Typography>{getSubstringStartingWithWord(result.resume_score, 'Explanation')}</Typography>
        {result.evaluations.map((evaluation: any, index: number) => (
            <Box key={index} mb={2}>
                <Typography variant="body1"><strong>Question:</strong> {evaluation.question}</Typography>
                <Typography variant="body2"><strong>Transcribed Response:</strong> {evaluation.transcribed_response}</Typography>
                <Typography variant="body2"><strong>Score:</strong> {evaluation.score}</Typography>
            </Box>
        ))}
        <Typography variant="h6">Interview Questions:</Typography>
        {interviewQuestions.map((question, index) => (
            <Typography key={index} variant="body1">{index + 1}. {question}</Typography>
        ))}
    </Paper>
)}

        </Container>
    );
};

export default InterviewsPage;
