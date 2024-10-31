'use client';
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export default function JobDetailsDialog({ job, onClose }) {
  const handleApply = () => {
    // Define your apply logic here
    console.log(`Applying for job: ${job.title}`);
    // You might redirect to an application form or open a new tab
  };

  return (
    <Dialog open={Boolean(job)} onClose={onClose}>
      <DialogTitle>{job.title}</DialogTitle>
      <DialogContent>
        <DialogContentText><strong>Location:</strong> {job.location}</DialogContentText>
        <DialogContentText><strong>Type:</strong> {job.type}</DialogContentText>
        <DialogContentText><strong>Description:</strong> {job.description}</DialogContentText>
        <DialogContentText><strong>Applicants:</strong> {job.applicantCount}</DialogContentText>
        {job.visaSponsorship && (
          <DialogContentText>
            <strong>H-1B Visa Sponsorship Information:</strong> This position may be eligible for H-1B visa sponsorship, pending qualifications in fields like IT, engineering, and sciences. The company will consider sponsorship based on candidate eligibility and annual cap limits.
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
        <Button onClick={handleApply} color="primary">Apply</Button>
      </DialogActions>
    </Dialog>
  );
}
