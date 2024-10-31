"use client";
import * as React from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

// Sample job data with application stages
const jobs = [
  { id: 1, title: 'Software Engineer', companyName: 'Tech Corp', applicationStage: 'Online Assessment', progress: 60, description: 'Developing and maintaining software applications.', responsibilities: 'Write code, debug, and collaborate with the team.', notes: 'Please complete your online assessment' },
  { id: 2, title: 'Product Manager', companyName: 'Innovate LLC', applicationStage: 'Interview', progress: 75, description: 'Leading product development and strategy.', responsibilities: 'Define vision, create roadmaps, and coordinate teams.', notes: 'Please Schedule your interview' },
  { id: 3, title: 'Data Scientist', companyName: 'DataWorks Inc.', applicationStage: 'Denied', progress: 0, description: 'Analyzing data to provide insights.', responsibilities: 'Build predictive models and optimize algorithms.', notes: 'Application denied due to lack of required experience.' },
  { id: 4, title: 'UX Designer', companyName: 'Creative Minds', applicationStage: 'Job Offered', progress: 100, description: 'Designing user interfaces and experiences.', responsibilities: 'Conduct user research and create wireframes.', notes: 'Offer accepted; preparing for start date.' },
  { id: 5, title: 'Systems Analyst', companyName: 'Solutions Ltd.', applicationStage: 'Denied', progress: 0, description: 'Analyzing and improving IT systems.', responsibilities: 'Evaluate system performance and implement improvements.', notes: 'Application denied due to skill mismatch.' },
  { id: 6, title: 'Network Engineer', companyName: 'NetTech', applicationStage: 'Sponsorship Approved', progress: 100, description: 'Managing and optimizing network systems.', responsibilities: 'Ensure network security and connectivity.', notes: 'Sponsorship approved; onboarding process started.' },
  { id: 7, title: 'Database Administrator', companyName: 'DataGuard', applicationStage: 'Denied', progress: 0, description: 'Maintaining database systems.', responsibilities: 'Monitor database performance and security.', notes: 'Application denied due to skill mismatch.' },
  { id: 8, title: 'Full Stack Developer', companyName: 'DevHouse', applicationStage: 'Job Offered', progress: 100, description: 'Building front-end and back-end web applications.', responsibilities: 'Collaborate with teams to deliver software solutions.', notes: 'Offer accepted; preparing for start date.' },
  { id: 9, title: 'Quality Assurance Engineer', companyName: 'TestRight', applicationStage: 'Job Offered', progress: 100, description: 'Testing software applications for bugs and issues.', responsibilities: 'Create test plans and execute testing.', notes: 'Offer accepted; preparing for start date.' },
  { id: 10, title: 'Marketing Specialist', companyName: 'MarketPro', applicationStage: 'Denied', progress: 0, description: 'Developing marketing strategies and campaigns.', responsibilities: 'Conduct market research and analyze trends.', notes: 'Application denied; feedback pending.' },
  { id: 11, title: 'Frontend Developer', companyName: 'WebWizards', applicationStage: 'Interview', progress: 75, description: 'Creating visually appealing web applications.', responsibilities: 'Implementing design and ensuring responsiveness.', notes: 'Please Schedule your interview.' },
  { id: 12, title: 'DevOps Engineer', companyName: 'OpsWorks', applicationStage: 'Denied', progress: 0, description: 'Streamlining software development and operations.', responsibilities: 'Automate processes and manage infrastructure.', notes: 'Application denied; seeking feedback for improvement.' },
  { id: 13, title: 'Sales Executive', companyName: 'SalesForce', applicationStage: 'Job Offered', progress: 100, description: 'Driving sales and managing client relationships.', responsibilities: 'Identify opportunities and close deals.', notes: 'Offer accepted; preparing for start date.' },
];

const MyJobsPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Jobs
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job Title</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Application Stage</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.companyName}</TableCell>
                <TableCell>{job.description}</TableCell>
                <TableCell>{job.applicationStage}</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={job.progress}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: (theme) => theme.palette.grey[300],
                      '& .MuiLinearProgress-bar': {
                        backgroundColor:
                          job.applicationStage === 'Sponsorship Approved'
                            ? 'green'
                            : job.applicationStage === 'Denied'
                            ? 'red'
                            : 'orange',
                      },
                    }}
                  />
                </TableCell>
                <TableCell>{job.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyJobsPage;
