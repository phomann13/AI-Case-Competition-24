'use client';
import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

export default function JobCard({ job, onOpenDetails }) {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', width: '300px', height: '250px' }}>
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="h6">{job.title}</Typography>
        <Typography color="textSecondary">{job.location}</Typography>
        <Typography color="textSecondary">{job.type}</Typography>
        <Typography color="textSecondary">Pay: {job.pay}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onOpenDetails(job)}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
