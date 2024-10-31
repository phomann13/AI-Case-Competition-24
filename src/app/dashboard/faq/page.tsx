import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LearnMore = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Learn More
      </Typography>

      {/* H-1B Visas Section */}
      <Typography variant="h5" gutterBottom>
        H-1B Visas
      </Typography>

      {/* I am an Applicant Section */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>I am an Applicant</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Eligibility Requirements</Typography>
              <Typography>
                <strong>What are the eligibility requirements for an H-1B visa?</strong>
                <br />
                - Must have a job offer from a U.S. employer and meet the educational and professional qualifications for the job (typically a bachelor’s degree).
                <br />
                - The job must be in a specialty occupation related to your field of study.
                <br />
                <strong>How do I apply for an H-1B visa?</strong>
                <br />
                - Your potential U.S. employer will file a petition on your behalf with USCIS and submit a Labor Condition Application (LCA) to the Department of Labor.
                <br />
                - It’s essential to gather all required documentation, including degrees and job offer letters.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Steps and Timeline</Typography>
              <Typography>
                1. Apply for a position and receive a job offer prior to March.
                <br />
                2. The employer submits H-1B registration and enters the lottery process.
                <br />
                3. If selected, the employer files Form I-129 with USCIS.
                <br />
                4. H-1B status becomes effective on October 1, beginning your employment.
                <br />
                5. If not selected, consider reapplying the following year.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Required Documents</Typography>
              <Typography>
                - Passport
                <br />
                - I-797: The original H-1B approval notice
                <br />
                - Job offer letter
                <br />
                - Educational credentials, including transcripts and diplomas.
                <br />
                - Any previous immigration documents (if applicable).
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* I am an Employer Section */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>I am an Employer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Steps to Hire</Typography>
              <Typography>
                <strong>What are the steps to hire an H-1B worker?</strong>
                <br />
                - Determine if the position qualifies as a specialty occupation.
                <br />
                - Ensure compliance with Department of Labor (DOL) requirements.
                <br />
                - Submit electronic H-1B registration to USCIS during the designated filing period.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Steps and Timeline</Typography>
              <Typography>
                1. Submit a job offer to a candidate, ensuring compliance with DOL requirements.
                <br />
                2. Submit H-1B registration and enter the lottery.
                <br />
                3. If selected, file Form I-129 with USCIS along with required documentation.
                <br />
                4. Await approval and inform the employee of their start date and any next steps.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Associated Fees</Typography>
              <Typography>
                Total Minimum Fees: Approximately $2,470
                <br />
                - $10 Registration
                <br />
                - $460 Base Filing Fee (Form I-129)
                <br />
                - $2,500 (for employers with more than 25 employees, applicable for training fees).
                <br />
                - Legal fees may also apply if using an attorney for the application process.
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* STEM OPT Section */}
      <Typography variant="h5" gutterBottom>
        STEM OPT Extension
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The STEM OPT extension allows F-1 students who graduate in eligible STEM fields to extend their post-completion OPT for an additional 24 months. 
            <br />
            To qualify, students must have a job offer from an employer enrolled in the E-Verify program and must submit a Form I-983 Training Plan, detailing how the job relates to their degree and how they will be trained.
            <br />
            Students must report their employment status every six months and are required to keep records of their training activities. Non-compliance can result in losing their OPT status.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Additional Resources Section */}
      <Typography variant="h5" gutterBottom>
        Additional Resources
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Links and References</Typography>
        </AccordionSummary>
        <AccordionDetails>
        // Inside the Additional Resources Section
<Typography>
  Here are some useful links for more information:
  <br />
  - <a href="https://www.uscis.gov/h-1b-visa" target="_blank" rel="noopener noreferrer">USCIS H-1B Visa Overview</a>
  <br />
  - <a href="https://www.dol.gov/agencies/eta/foreign-labor/permanent" target="_blank" rel="noopener noreferrer">Department of Labor on H-1B Program</a>
  <br />
  - <a href="https://www.studyinthestates.dhs.gov/students/stem-opt" target="_blank" rel="noopener noreferrer">Study in the States: STEM OPT</a>
</Typography>

        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default LearnMore;
