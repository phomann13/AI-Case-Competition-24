import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export default function JobDetailsDialog({ job, onClose }) {
  return (
    <Dialog open={Boolean(job)} onClose={onClose}>
      <DialogTitle>{job.title}</DialogTitle>
      <DialogContent>
        <DialogContentText><strong>Location:</strong> {job.location}</DialogContentText>
        <DialogContentText><strong>Type:</strong> {job.type}</DialogContentText>
        <DialogContentText><strong>Description:</strong> {job.description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
}
