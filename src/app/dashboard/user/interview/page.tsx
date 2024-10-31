'use client';
import React, { useState, useRef } from 'react';
import {
    Container,
    Typography,
    Button,
    FormControl,
    Box,
    Paper,
} from '@mui/material';

const interviewQuestions = [
    'Tell me about yourself.',
    'What are your greatest strengths?',
    'What are your greatest weaknesses?',
    'Describe a challenge you faced and how you overcame it.',
    'Where do you see yourself in 5 years?'
];

const ApplicantInterviewPage = () => {
    const [resume, setResume] = useState<File | null>(null);
    const [audioFiles, setAudioFiles] = useState<{ [key: number]: File | null }>({});
    const [recordedBlobs, setRecordedBlobs] = useState<{ [key: number]: Blob[] }>({});
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [isRecording, setIsRecording] = useState<{ [key: number]: boolean }>({});

    const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setResume(event.target.files[0]);
        }
    };

    const handleAudioUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setAudioFiles((prev) => ({
                ...prev,
                [index]: event.target.files[0]
            }));
        }
    };

    const handleStartRecording = async (index: number) => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert("Audio recording is not supported in this browser.");
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.ondataavailable = (event) => {
            setRecordedBlobs((prev) => ({
                ...prev,
                [index]: [...(prev[index] || []), event.data]
            }));
        };
        mediaRecorder.start();
        setIsRecording((prev) => ({ ...prev, [index]: true }));
    };

    const handleStopRecording = (index: number) => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording((prev) => ({ ...prev, [index]: false }));
        }
    };

    const handleDownloadRecording = (index: number) => {
        if (recordedBlobs[index]) {
            const blob = new Blob(recordedBlobs[index], { type: 'audio/webm' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `response_${index + 1}.webm`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Interview Preparation
            </Typography>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="subtitle1" gutterBottom>
                    Upload Resume
                </Typography>
                <FormControl fullWidth margin="normal">
                    <input
                        accept=".pdf"
                        id="resume-upload"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleResumeChange}
                    />
                    <label htmlFor="resume-upload">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            component="span"
                            fullWidth
                        >
                            Choose Resume
                        </Button>
                    </label>
                </FormControl>
                {resume && (
                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                        Selected Resume: {resume.name}
                    </Typography>
                )}
                
                <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                    Interview Questions
                </Typography>
                
                {interviewQuestions.map((question, index) => (
                    <Box key={index} marginBottom={3}>
                        <Typography variant="body1" gutterBottom>
                            {index + 1}. {question}
                        </Typography>
                        
                        {/* Audio upload option */}
                        <FormControl fullWidth>
                            <input
                                accept=".wav,.mp3,.m4a"
                                id={`audio-upload-${index}`}
                                type="file"
                                style={{ display: 'none' }}
                                onChange={(event) => handleAudioUpload(index, event)}
                            />
                            <label htmlFor={`audio-upload-${index}`}>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    component="span"
                                    fullWidth
                                >
                                    Upload Audio Response
                                </Button>
                            </label>
                        </FormControl>
                        {audioFiles[index] && (
                            <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                                Uploaded Audio: {audioFiles[index]?.name}
                            </Typography>
                        )}

                        {/* Audio recording option */}
                        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => isRecording[index] ? handleStopRecording(index) : handleStartRecording(index)}
                                fullWidth
                            >
                                {isRecording[index] ? 'Stop Recording' : 'Record Answer'}
                            </Button>
                            {recordedBlobs[index] && (
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => handleDownloadRecording(index)}
                                    style={{ marginLeft: '10px' }}
                                    fullWidth
                                >
                                    Download Recording
                                </Button>
                            )}
                        </Box>
                    </Box>
                ))}
            </Paper>
        </Container>
    );
};

export default ApplicantInterviewPage;
