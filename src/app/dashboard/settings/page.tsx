import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { Notifications } from '@/components/dashboard/settings/notifications';
import { UpdatePasswordForm } from '@/components/dashboard/settings/update-password-form';
import JobCard from './JobCard';
import JobDetailsDialog from './JobDetailsDialog';

export const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {


const jobPostings = [
  { id: 1, title: 'Software Engineer', location: 'New York, NY', type: 'Full-Time', description: 'Develop and maintain software applications...' },
  { id: 2, title: 'Data Analyst', location: 'Remote', type: 'Contract', description: 'Analyze data to support company projects...' },
  // Add more job listings here
];

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
      <Grid container spacing={4}>
        {jobPostings.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <JobCard job={job} onOpenDetails={handleOpenDetails} />
          </Grid>
        ))}
      </Grid>
      {selectedJob && <JobDetailsDialog job={selectedJob} onClose={handleCloseDetails} />}
    </Container>
  );
}
