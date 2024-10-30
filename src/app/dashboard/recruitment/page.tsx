'use client';
import React, { useState } from 'react';
import { 
  Container, Typography, TextField, Button, MenuItem, 
  Select, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper 
} from '@mui/material';

const Page = () => {
  const [message, setMessage] = useState('');
  const [site, setSite] = useState('');
  const [keyword, setKeyword] = useState('');
  const [candidates, setCandidates] = useState([
    { name: 'John Doe', email: 'johndoe@example.com', grade: 'Senior', h1bStatus: 'Eligible', keywordsMatched: 'JavaScript, React' },
    { name: 'Jane Smith', email: 'janesmith@example.com', grade: 'Junior', h1bStatus: 'Possesses', keywordsMatched: 'Python, Data Analysis' },
    { name: 'Emily Johnson', email: 'emilyj@example.com', grade: 'Senior', h1bStatus: 'Eligible', keywordsMatched: 'Machine Learning, TensorFlow' },
    { name: 'Michael Brown', email: 'michaelb@example.com', grade: 'Sophomore', h1bStatus: 'Not Eligible', keywordsMatched: 'Java, Spring Boot' },
    { name: 'Sara Lee', email: 'saralee@example.com', grade: 'Graduate', h1bStatus: 'Eligible', keywordsMatched: 'Data Science, R, SQL' },
    { name: 'David Kim', email: 'davidkim@example.com', grade: 'Freshman', h1bStatus: 'Possesses', keywordsMatched: 'HTML, CSS, JavaScript' },
    { name: 'Laura Martinez', email: 'lauram@example.com', grade: 'Senior', h1bStatus: 'Eligible', keywordsMatched: 'UX Design, Figma, Adobe XD' },
    { name: 'Chris Wilson', email: 'chrisw@example.com', grade: 'Sophomore', h1bStatus: 'Not Eligible', keywordsMatched: 'React, Node.js, MongoDB' },
    { name: 'Anna Davis', email: 'annad@example.com', grade: 'Junior', h1bStatus: 'Eligible', keywordsMatched: 'Ruby on Rails, PostgreSQL' },
    { name: 'Paul Robinson', email: 'paulr@example.com', grade: 'Graduate', h1bStatus: 'Eligible', keywordsMatched: 'AWS, DevOps, Docker' },
  ]);
  

  const handleRunScraper = () => {
    // Placeholder function to simulate fetching candidates
    console.log('Running web scraper with keyword:', keyword, 'on site:', site);
    // Here you could simulate an API call to fetch the candidate data
  };

  const handleSendMessage = (candidateEmail: string) => {
    console.log(`Sending message to ${candidateEmail} with message: ${message}`);
    alert(`Message sent to ${candidateEmail}`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Recruitment Dashboard</Typography>
      
      {/* Recruitment Message Section */}
      <Typography variant="h6">Craft Recruitment Message</Typography>
      <TextField
        label="Recruitment Message"
        multiline
        rows={4}
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message to invite candidates to apply..."
        margin="normal"
      />

      {/* Recruitment Site Selector */}
      <Typography variant="h6">Select Recruitment Site</Typography>
      <Select
        fullWidth
        value={site}
        onChange={(e) => setSite(e.target.value as string)}
        displayEmpty
      >
        <MenuItem value="" disabled>Select a site</MenuItem>
        <MenuItem value="LinkedIn">LinkedIn</MenuItem>
        <MenuItem value="Handshake">Handshake</MenuItem>
        <MenuItem value="Indeed">Indeed</MenuItem>
      </Select>

      {/* Keyword Input */}
      <TextField
        label="Keyword Search"
        fullWidth
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keywords to filter candidates (e.g., Python, React)"
        margin="normal"
      />

      {/* Run Web Scraper Button */}
      <Button variant="contained" color="primary" onClick={handleRunScraper} sx={{ mt: 2 }}>
        Run Web Scraper
      </Button>

      {/* Candidates Table */}
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Candidate Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>H1-B Status</TableCell>
              <TableCell>Keywords Matched</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate, index) => (
              <TableRow key={index}>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>{candidate.grade}</TableCell>
                <TableCell>{candidate.h1bStatus}</TableCell>
                <TableCell>{candidate.keywordsMatched}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleSendMessage(candidate.email)}
                  >
                    Send Message
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Page;
