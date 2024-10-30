import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

export default function JobCard({ job, onOpenDetails }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <Typography color="textSecondary">{job.location}</Typography>
        <Typography color="textSecondary">{job.type}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onOpenDetails(job)}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}