// pages/prediction.js
'use client'
import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Box,
} from '@mui/material';

const PredictionApp = () => {
    const [formData, setFormData] = useState({
        country: '',
        city: '',
        employer: '',
        state: '',
        wageSource: '',
        socCode: '',
        year: 2024,
        remuneration: ''
    });
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send a POST request to the prediction API
        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([{
                    COUNTRY_OF_CITIZENSHIP: formData.country,
                    EMPLOYER_CITY: formData.city,
                    EMPLOYER_NAME: formData.employer,
                    EMPLOYER_STATE: formData.state,
                    PW_WAGE_SOURCE: formData.wageSource,
                    PW_SOC_CODE: formData.socCode,
                    year: parseInt(formData.year),
                    remuneration: parseInt(formData.remuneration)
                }])
            });

            const resultData = await response.json();
            setResult(`Predicted CASE_STATUS: ${resultData}`);
        } catch (error) {
            console.error("Error fetching prediction:", error);
            setResult("Error fetching prediction");
        }
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Predict Applicants Case Status
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Country of Citizenship"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Employer City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Employer Name"
                    name="employer"
                    value={formData.employer}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Employer State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Wage Source"
                    name="wageSource"
                    value={formData.wageSource}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="SOC Code"
                    name="socCode"
                    value={formData.socCode}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Year"
                    name="year"
                    type="number"
                    value={formData.year}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Remuneration"
                    name="remuneration"
                    type="number"
                    value={formData.remuneration}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Predict
                </Button>
            </form>

            {result && (
                <Box mt={2}>
                    <Typography variant="h6">{result}</Typography>
                </Box>
            )}
        </Container>
    );
};

export default PredictionApp;
