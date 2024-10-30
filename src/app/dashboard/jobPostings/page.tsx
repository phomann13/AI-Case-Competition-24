'use client';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';

import { config } from '@/config';
import { AccountDetailsForm } from '@/components/dashboard/account/account-details-form';
import { AccountInfo } from '@/components/dashboard/account/account-info';
import React, { useState } from 'react';
import { Container, Typography, Grid, Dialog, DialogTitle, DialogContent, Card, CardContent, CardActions, Button } from '@mui/material';
import JobCard from './JobCard';
import JobDetailsDialog from './JobDetailsDialog';

const jobPostings = [
  {
    id: 1,
    title: 'HR Intern',
    location: 'College Park, MD',
    type: 'Internship',
    description: 'Support the HR team in daily operations, assist with recruitment processes, and help coordinate training sessions.',
    requirements: [
      "Bachelor's degree in progress, preferably in Human Resources, Business, or a related field",
      'Excellent organizational and communication skills',
      'Ability to work independently and as part of a team'
    ],
    pay: 'Hourly: $18 - $22',
    visaSponsorship: true,
    applicantCount: 42
  },
  {
    id: 2,
    title: 'Software Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop, test, and maintain web applications. Collaborate with cross-functional teams to define project requirements.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      'Experience with JavaScript, React, and Node.js',
      'Knowledge of software development best practices'
    ],
    pay: 'Annual Salary: $85,000 - $100,000',
    visaSponsorship: true,
    applicantCount: 65
  },
  {
    id: 3,
    title: 'Marketing Specialist',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create and implement marketing campaigns, analyze market trends, and collaborate with the sales team to enhance brand visibility.',
    requirements: [
      "Bachelor's degree in Marketing, Business, or related field",
      'Experience with digital marketing and social media strategies',
      'Strong analytical and creative skills'
    ],
    pay: 'Annual Salary: $50,000 - $65,000',
    visaSponsorship: true,
    applicantCount: 30
  },
  {
    id: 4,
    title: 'Data Analyst',
    location: 'Remote',
    type: 'Full-time',
    description: 'Analyze and interpret complex data sets, provide actionable insights, and support data-driven decision-making processes.',
    requirements: [
      "Bachelor's degree in Data Science, Statistics, or a related field",
      'Proficiency in SQL and Python',
      'Experience with data visualization tools like Tableau or Power BI'
    ],
    pay: 'Annual Salary: $70,000 - $85,000',
    visaSponsorship: true,
    applicantCount: 58
  },
  {
    id: 5,
    title: 'Sales Associate',
    location: 'College Park, MD',
    type: 'Part-time',
    description: 'Engage with customers, manage sales transactions, and ensure excellent customer service.',
    requirements: [
      'High school diploma or equivalent',
      'Strong interpersonal skills',
      'Previous experience in retail or sales preferred'
    ],
    pay: 'Hourly: $15 - $20',
    visaSponsorship: false,
    applicantCount: 15
  },
  {
    id: 6,
    title: 'Project Manager',
    location: 'College Park, MD',
    type: 'Full-time',
    description: 'Oversee project timelines, coordinate cross-functional teams, and ensure project goals are met on schedule and within budget.',
    requirements: [
      "Bachelor's degree in Project Management, Business, or related field",
      'Proven experience in project management',
      'Strong organizational and leadership skills'
    ],
    pay: 'Annual Salary: $90,000 - $110,000',
    visaSponsorship: true,
    applicantCount: 28
  },
  {
    id: 7,
    title: 'Graphic Designer',
    location: 'College Park, MD',
    type: 'Freelance',
    description: 'Design marketing materials, create visual content for social media, and work closely with the marketing team.',
    requirements: [
      "Bachelor's degree in Graphic Design or a related field",
      'Proficiency in Adobe Creative Suite (Photoshop, Illustrator)',
      'Portfolio showcasing design skills'
    ],
    pay: 'Hourly: $25 - $35',
    visaSponsorship: false,
    applicantCount: 12
  },
  {
    id: 8,
    title: 'Accountant',
    location: 'College Park, MD',
    type: 'Full-time',
    description: 'Manage financial records, prepare reports, and assist with budgeting and forecasting.',
    requirements: [
      "Bachelor's degree in Accounting or Finance",
      'Certified Public Accountant (CPA) preferred',
      'Strong attention to detail and analytical skills'
    ],
    pay: 'Annual Salary: $60,000 - $75,000',
    visaSponsorship: true,
    applicantCount: 40
  },
  {
    id: 9,
    title: 'IT Support Specialist',
    location: 'College Park, MD',
    type: 'Full-time',
    description: 'Provide technical support to employees, troubleshoot hardware and software issues, and manage IT assets.',
    requirements: [
      "Bachelor's degree in Information Technology or related field",
      'Experience with troubleshooting and problem-solving',
      'Familiarity with network and system administration'
    ],
    pay: 'Annual Salary: $55,000 - $65,000',
    visaSponsorship: true,
    applicantCount: 25
  },
  {
    id: 10,
    title: 'Business Analyst',
    location: 'College Park, MD',
    type: 'Full-time',
    description: 'Analyze business processes, gather requirements, and work with stakeholders to implement solutions.',
    requirements: [
      "Bachelor's degree in Business Administration, IT, or related field",
      'Experience in business analysis and project management',
      'Excellent communication and problem-solving skills'
    ],
    pay: 'Annual Salary: $75,000 - $90,000',
    visaSponsorship: true,
    applicantCount: 50
  }
];


// export const metadata = { title: `Job Postings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpenDetails = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Job Postings</Typography>
      <Grid container spacing={4} justifyContent="center">
        {jobPostings.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <JobCard job={job} onOpenDetails={handleOpenDetails} />
          </Grid>
        ))}
      </Grid>
      {selectedJob && <JobDetailsDialog job={selectedJob} onClose={handleCloseDetails} />}
    </Container>
  );
}
