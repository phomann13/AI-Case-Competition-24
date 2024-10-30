"use client"
import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Typography, Box, Button, Stack, Avatar, Divider, Paper } from '@mui/material';
import dayjs from 'dayjs';

// Dummy data for demonstration purposes
const dummyApplicantData = {
  id: 'PMN-010',
  name: 'Alcides Antonio',
  avatar: '/assets/avatar-10.png', // Path to avatar image
  email: 'alcides.antonio@devias.io',
  phone: '908-691-3242',
  address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
  documents: ['Resume.pdf', 'CoverLetter.pdf'],
  workAuthorizationStatus: 'Authorized',
  jobsApplied: [
    { title: 'Software Engineer', dateApplied: dayjs().subtract(10, 'days').toDate() },
    { title: 'Product Manager', dateApplied: dayjs().subtract(20, 'days').toDate() },
  ],
};

export default function ApplicantProfile(): React.JSX.Element {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const applicantData = dummyApplicantData;

  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Profile Header */}
      <Paper sx={{ padding: 4, width: '100%', maxWidth: '800px', marginBottom: 4 }} elevation={3}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar
            src={applicantData.avatar}
            alt={applicantData.name}
            sx={{ width: 120, height: 120, boxShadow: 3 }}
          />
          <Box>
            <Typography variant="h4">{applicantData.name}</Typography>
            <Typography color="textSecondary">{applicantData.email}</Typography>
            <Typography color="textSecondary">{applicantData.phone}</Typography>
          </Box>
        </Stack>
      </Paper>

      {/* Main Profile Information */}
      <Paper sx={{ padding: 4, width: '100%', maxWidth: '800px' }} elevation={3}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" gutterBottom>Address</Typography>
            <Typography>
              {applicantData.address.street}, {applicantData.address.city}, {applicantData.address.state}, {applicantData.address.country}
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" gutterBottom>Work Authorization Status</Typography>
            <Typography>{applicantData.workAuthorizationStatus}</Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" gutterBottom>Documents</Typography>
            <Stack direction="row" spacing={2}>
              {applicantData.documents.map((doc, index) => (
                <Button key={index} variant="outlined">
                  {doc}
                </Button>
              ))}
            </Stack>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" gutterBottom>Jobs Applied</Typography>
            <Stack spacing={1}>
              {applicantData.jobsApplied.map((job, index) => (
                <Typography key={index}>
                  {job.title} (Applied on: {dayjs(job.dateApplied).format('MMM D, YYYY')})
                </Typography>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Paper>

      <Button
        variant="contained"
        onClick={() => router.push('/dashboard/applicants')}
        sx={{ marginTop: 4 }}
      >
        Back to Applicants
      </Button>
    </Box>
  );
}
