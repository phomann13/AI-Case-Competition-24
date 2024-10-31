import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const feesData = [
  { cost: '$10', description: 'Registration' },
  { cost: '$460', description: 'Base Filing Fee (form I-129)' },
  { cost: '$750 (25 or fewer employees)\n$1500 (more than 25 employees)', description: 'American Competitiveness and Workforce Improvement Act (ACWIA) Fee\nFunds allocated to U.S. worker training programs' },
  { cost: '$500', description: 'Fraud prevention and detection for the H-1B program' },
  { cost: '$2500', description: 'OPTIONAL: Premium Processing Fee' },
  { cost: '$4000', description: 'Public Law 114-113 Fee\nApplies to companies with >50 employees and >50% workforce on H-1B or L-1 visas' },
];
const VisaInfo = () => {
  return (
    <Container>
      {/* H-1B Section Header */}
      <Typography variant="h4" gutterBottom>
        H-1B Visa Information
      </Typography>
      <Typography variant="h6">
        What is an H-1B visa?
      </Typography>
      <Typography>
        The H-1B visa allows U.S. employers to temporarily employ foreign workers in specialty occupations that require theoretical or technical expertise.
      </Typography>
      <Typography variant="h6">
        What qualifies as a specialty occupation?
      </Typography>
      <Typography gutterBottom>
        Typically requires a bachelor’s degree or higher in a field related to the job, such as IT, engineering, or sciences.
      </Typography>

      {/* Applicant Section */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>I am an Applicant</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {/* FAQ */}
            <Grid item xs={12}>
              <Typography variant="h6">FAQ</Typography>
              <Typography>
                <strong>What are the eligibility requirements?</strong><br />
                &nbsp; - Have a Job offer from a U.S. employer<br />
                &nbsp; - Educational / Professional experience in a relevant field
              </Typography>
              <Typography>
                <strong>How do I apply for an H-1B visa?</strong><br />
                &nbsp; - Once you have a job offer, your potential U.S. employer will file a petition on your behalf with the U.S. Citizenship and Immigration Services (USCIS) and submit a Labor Condition Application (LCA) to the Department of Labor.

              </Typography>
              <Typography>
                <strong>How long is the H-1B visa valid?</strong><br />
                &nbsp; - H-1B visas are initially granted for up to three years, then your employer can apply for an extension for a maximum of six years.
              </Typography>
              <Typography>
                <strong>What happens if my H-1B visa expires, or if my employer withdraws my H-1B petition?</strong><br />
                &nbsp; - If your visa expires and you haven’t applied for an extension or changed your status, you must leave the U.S. Staying beyond the visa expiration can affect future immigration applications.
                <br></br>
                &nbsp; - If your petition is withdrawn, you may need to leave the U.S. or find another employer willing to file a new petition for you.
              </Typography>
              <Typography>
                <strong>Can I change employers while on an H-1B visa?</strong><br />
                &nbsp; - You can only work for the employer that sponsored your H-1B visa and in the position specified in the petition. Working for other employers without proper authorization is prohibited.
                <br></br>
                &nbsp; - If you would like to work for a new employer, they must file a new H-1B petition on your behalf, and you can begin working for the new employer once USCIS receives the petition.
                <br></br>
                &nbsp; -You also may only leave a company dependent on your contract.

              </Typography>
              <Typography>
                <strong>Can I apply for a green card?</strong><br />
                &nbsp; - Yes, many H-1B holders pursue permanent residency (green card) through employment-based immigration. Your employer typically must sponsor this process.

              </Typography>
              <Typography>
                <strong>Can my family accompany me on an H-1B visa?</strong><br />
                &nbsp; - Yes, your spouse and unmarried children under 21 can apply for H-4 visas to accompany you. H-4 visa holders may also apply for work authorization in certain cases.
              </Typography>
            </Grid>
            {/* Steps and Timeline */}
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Steps and Timeline</strong></Typography>
              <Typography>
              1. <strong>Apply</strong> for a position and <strong>receive a job offer</strong> prior to March<br></br>
              2. The employer submits H-1B registration and enters the lottery process<br></br>
              &nbsp; &nbsp; &nbsp; If not selected in the lottery, the employer cannot go through with the application process, and you will have to look for other visa options or wait to reapply in the next cycle
              3. <strong>Provide any requested information to the employer</strong> while they file a Labor Condition Application (LCA) with DOL<br></br>
              4. <strong>Provide copies of education documents, passport, etc.</strong> to assist the employer while they file H-1B petition with USCIS<br></br>
              5. Employer will notify you if the petition has been approved<br></br>
              6. <strong>Apply for the H-1B visa at a U.S. consulate or embassy</strong><br></br>
              &nbsp; &nbsp; &nbsp;Involves filling out the DS-160 form (Online Nonimmigrant Visa Application), paying the visa application fee, and scheduling a visa interview.<br></br>
              7. <strong>Attend the visa interview at the consulate</strong>, where you will need to present your approval notice, passport, and other required documentation.<br></br>
              8. <strong>Visa Issuance:</strong> If the consular officer approves your application, they will issue the H-1B visa, allowing you to enter the U.S. to work for the sponsoring employer.<br></br>
              9. Work with the employer to coordinate any travel and/or living arrangements (if offered)<br></br>
              10. <strong>Complete any necessary background checks, paperwork, and I-9 verification</strong> to help with onboarding (as requested by employer)<br></br>
              11. Ensure that you <strong>remain compliant</strong> with H-1B requirements<br></br>
              12. Consider Long Term Sponsorship if Necessary<br></br>
              &nbsp; &nbsp; &nbsp;If you are thinking about seeking green card sponsorship, work with your employer to get started early as this can take several years<br></br>

              </Typography>
            </Grid>
            {/* Compliance */}
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Compliance Requirements</strong></Typography>
              <Typography>
              1. Maintain Employment:<br></br>
              &nbsp; &nbsp; &nbsp;Stay employed with the sponsoring employer. If employment is terminated, you must either find a new employer willing to sponsor you or depart the U.S.<br></br>
              2. Adhere to Visa Conditions:<br></br>
              &nbsp; &nbsp; &nbsp;Follow the terms of the H-1B visa, including maintaining the same job title and duties as specified in the petition.<br></br>
              3. Notify Employer of Changes:<br></br>
              &nbsp; &nbsp; &nbsp;Inform the employer of any changes in personal circumstances, such as address changes or if they wish to change employers.<br></br>
              4. File Timely Renewals:<br></br>
              &nbsp; &nbsp; &nbsp;Ensure timely filing for visa renewals or extensions before the current visa expires (at least 6 months before expiration)<br></br>
              5. Seek Approval for Concurrent Employment:<br></br>
              &nbsp; &nbsp; &nbsp;If taking a second job, obtain a separate H-1B petition from the new employer.<br></br>

              </Typography>
            </Grid>
            {/* Extensions */}
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Details on Extensions</strong></Typography>
              <Typography>
              Pending Green Card Application:<br></br>
              &nbsp; &nbsp; &nbsp;If an H-1B holder has an approved I-140 immigrant petition (part of the green card process) and meets specific criteria, they can extend their H-1B status beyond six years in 3-year increments while the green card process is ongoing.<br></br>
              Recapturing Time:<br></br>
              &nbsp; &nbsp; &nbsp;Time spent outside the U.S. during the H-1B validity period can sometimes be "recaptured." For example, if an H-1B holder spent time outside the U.S., they might be able to extend their H-1B status for that amount of time.<br></br>
              Change of Status:<br></br>
              &nbsp; &nbsp; &nbsp;An H-1B holder may change their status to another nonimmigrant status (like H-4 or L-1) if eligible.<br></br>
              Different Employer:<br></br>
              &nbsp; &nbsp; &nbsp;If changing employers, a new H-1B petition can be filed, but the total time in H-1B status still counts toward the six-year limit.<br></br>

              </Typography>
            </Grid>
            {/* Required Documents */}
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Required Documents</strong></Typography>
              <Typography>
              - Passport<br />
              - I-797: The original H-1B approval notice<br />
              - Employment letter (confirming your employment, title, salary, etc.)<br />
              - Photocopy of H-1B petition: both Form I-129 and Form ETA 9035<br />
              - Previous residency documentation if you previously legally lived in the United States<br />
              - Pay Stubs or Employment Verification from current or previous employer (if applicable)<br />
              - Marriage certificate: If applicable (and an English translation)<br />
              - Form G-28: If you have an attorney representing you<br />

              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Employer Section */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>I am an Employer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {/* FAQ */}
            <Grid item xs={12}>
              <Typography variant="h6">FAQ</Typography>
              <Typography>
                <strong>What are the steps to hire an H-1B worker?</strong><br />
                1. Determine if the position qualifies as a specialty occupation<br />
                2. Submit electronic H-1B registration to USCIS in March<br />
                3. File a Labor Condition Application (LCA) with the Department of Labor<br />
                4. Submit an H-1B petition (Form I-129) to USCIS<br />
                &nbsp; &nbsp; &nbsp;*Only once notified of selection<br />
                See Timeline for more detailed information<br />
               
              </Typography> <br/>
              <Typography>
                <strong>What is a Labor Condition Application (LCA)?</strong><br />
                A document filed with the Department of Labor stating that the employer will pay the H-1B worker at least the prevailing wage for the occupation and that hiring the foreign worker will not adversely affect the working conditions of U.S. workers.
              </Typography> <br />
              <Typography>
                <strong>What is the prevailing wage?</strong><br />
                The prevailing wage is the average wage paid to similarly employed workers in a specific occupation and geographic area. Employers must offer at least this wage to H-1B workers.
              </Typography> <br />
              <Typography>
                <strong>Is there a cap on H-1B visas?</strong><br />
                - Yes, there is an annual cap of 65,000 H-1B visas, with an additional 20,000 available for applicants with a master’s degree or higher from a U.S. institution. Certain employers, such as universities, may be exempt from the cap.<br />
                - If H-1B registration exceeds the cap, USCIS conducts a lottery to determine which applicants will be chosen to petition for H-1B status
              </Typography>
              <Typography>
                <strong>What is the difference between registering for H-1B and submitting a petition?</strong><br />
                - Registration is an initial step to enter a lottery, while petitioning is the detailed application process that occurs if the registration is selected.
                - You must first register before you are able to petition for H-1B status.
              </Typography> <br />
              <Typography>
                <strong>How long is the H-1B visa valid?</strong><br />
                The H-1B visa is initially granted for up to three years and can be extended for a maximum of six years. Extensions beyond six years may be available under certain circumstances, such as pending green card applications.
              </Typography> <br />
              <Typography>
                <strong>Can I change the terms of employment?</strong><br />
                Yes, but if there are significant changes to the job title, responsibilities, or work location, you may need to file an amended H-1B petition with USCIS.
              </Typography> <br />
              <Typography>
                <strong>Can I hire multiple H-1B workers?</strong><br />
                Yes, you can sponsor multiple H-1B petitions as long as each position meets the specialty occupation requirements and you comply with LCA regulations for each position.
              </Typography> <br />
              <Typography>
                <strong>What happens if my H-1B petition is denied?</strong><br />
                If denied, you will receive a notice explaining the reasons. You can address the issues and file a new petition, or you may have the option to appeal the decision.
              </Typography> <br />
              <Typography>
                <strong>Can I hire an H-1B worker on a part-time basis?</strong><br />
                Yes, you can sponsor an H-1B worker for part-time employment, but you must still comply with the LCA requirements and ensure that the offered wage meets the prevailing wage for part-time positions.
              </Typography> <br />
              <Typography>
                <strong>Can I terminate an H-1B employee?</strong><br />
                Yes, but if you terminate the employee, you must notify USCIS and may be required to pay for the employee's return travel expenses.
              </Typography> <br />
              <Typography>
                <strong>Are there any legal responsibilities I have as an employer?</strong><br />
                Yes, you must comply with all labor laws, including maintaining accurate payroll records, posting required notices, and ensuring that the employment terms are consistent with the information provided in the LCA and H-1B petition.
              </Typography> <br />
            </Grid>
            {/* Steps and Timeline */}
            <Grid item xs={12}>
              <Typography variant="h6">Steps and Timeline</Typography>
              <Typography>
              1. <strong>Submit a job offer to a candidate, ensuring compliance with DOL requirements</strong><br />
              &nbsp; &nbsp; &nbsp;See Compliance<br />
              2. <strong>H-1B registration and lottery</strong><br />
              &nbsp; &nbsp; &nbsp;- Submit electronic registration to USCIS in March during the open registration period and pay a $10 registration fee<br />
              &nbsp; &nbsp; &nbsp;- If applications exceed the annual cap, USCIS conducts a lottery in April<br />
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;- If selected in the lottery, proceed with filing the full petition<br />
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;- If not selected, you must wait until the cycle to register again or seek other visa options<br />
              3. <strong>Submit form ETA-9035</strong> to file the Labor Condition Application (LCA) with DOL<br />
              4. <strong>Submit form I-129 to file for H-1B Petition with USCIS</strong> (within 90 days of being notified of selection)<br />
              5. Handle RFEs (Requests for Information)<br />
              6. <strong>Await the USCIS decision, and notify the applicant of any changes</strong><br />
              7. <strong>Await H-1B visa issuance</strong><br />
              8. <strong>Coordinate travel and/or living arrangements</strong> with applicant (if applicable)<br />
              9. <strong>Complete onboarding and I-9 verification</strong>, and keep a copy of Form I-797 (H-1B approval notice) on file<br />
              10. <strong>Maintain compliance</strong> with H-1B terms <br />
              &nbsp; &nbsp; &nbsp;- Salary, work location, and job role changes must be reported to USCIS<br />
              &nbsp; &nbsp; &nbsp;- Track renewal - every 3 years<br />
              11. Considering Long Term Sponsorship if Necessary<br />
              &nbsp; &nbsp; &nbsp;- If you are considering sponsoring for a green card, work with the applicant/employee to get started early, as this can take several years<br />

              </Typography>
            </Grid>
            <TableContainer component={Paper}>
              <Typography variant="h6" align="center" gutterBottom>
                Associated Fees
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Minimum cost: $2470
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Cost</strong></TableCell>
                    <TableCell><strong>Fee + Description</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feesData.map((fee, index) => (
                    <TableRow key={index}>
                      <TableCell>{fee.cost}</TableCell>
                      <TableCell>{fee.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
  
            {/* Compliance */}
            <Grid item xs={12}>
            <Typography variant="h6"><strong>Funding Options</strong></Typography>
              <Typography>
              Although there currently are no grant or funding options that are intended to directly subsidize the hiring of H-1B workers, workforce development initiatives can sometimes be used by companies to help decrease the costs associated with filing.<br />
              <br />
              <strong>Consider researching the following to find funding options for your company: </strong><br />
              Federal and State Grants for workforce development<br />
              &nbsp; &nbsp; &nbsp; - Includes initiatives by the U.S. Department of Labor or local workforce development boards aimed at training programs<br />
              Industry-specific programs available to address workforce shortages<br />
              &nbsp; &nbsp; &nbsp; - Community Colleges and Training Partnerships<br />
              Companies can partner with educational institutions that might receive grants to develop training programs tailored to the needs of local employers.<br />
              Tax Credits and Incentives: Some states offer tax credits or incentives for businesses that invest in employee training or hire from certain demographics.<br />
              
              </Typography><br />
              <Typography variant="h6"><strong>USCIS Decision Codes and Filing Deadlines</strong></Typography>
              <Typography>
              H-1B cap registration: <strong>early March</strong><br />
              RFE (Request for Evidence): 30 - 90 days from notice (usually specified)<br />
              NOID (Notice of Intent to Deny): 30 days from NOID<br />
              &nbsp; &nbsp; &nbsp; - If USCIS issues a NOID, they are leaning toward denying the app unless the applicant provides convincing evidence to address the concerns listed<br />
              NOIR (Notice of Intent to Revoke): 30 days from NOIR<br />
              &nbsp; &nbsp; &nbsp; - USCIS is planning on revoking an approved petition, the employer must respond in time with why the petition should not be revoked<br />
              Premium Processing 15-Day Deadline: 15 days from when USCIS receives the petition and premium processing fee<br />
              &nbsp; &nbsp; &nbsp; - Guarantees that USCIS will take initial action (approval, denial, RFE, or NOID) within 15 days, and if USCIS fails to meet this deadline, they must refund the premium processing fee and continue expedited processing<br />
              Appeal Deadlines (for denials): 30 days from denial notice<br />
              &nbsp; &nbsp; &nbsp; - Applicant or employer can file a motion to reopen or reconsider, or appeal to the Administrative Appeals Office (AAO)<br />
              H-1B Extention or Renewal Filing Window: up to 6 months before current H-1B status expires<br />
              Other Deadlines: varies, typically 30 days<br />
              &nbsp; &nbsp; &nbsp; - E.g. site visits

              </Typography><br />
              <Typography variant="h6"><strong>Compliance</strong></Typography>
              <Typography>
              In order to maintain compliance with the Department of Labor (DOL), keep in mind the following:<br />
              <br />
              1. Before posting a job/submitting an offer<br />
              &nbsp; &nbsp; &nbsp; - Determine the prevailing wage for your position by doing one of the following:<br />
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; i. Use the OFLC Wage Search tool: <a href = 'https://flag.dol.gov/wage-data/wage-search'>https://flag.dol.gov/wage-data/wage-search</a><br />
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; ii. Request a prevailing wage from the NPWC<br />
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; iii. Use a survey conducted by an independent authoritative source<br />
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; iv. Use any other legitimate source<br />
              2. File a Labor Condition Application (LCA) before submitting the H-1B petition:<br />
              &nbsp; &nbsp; &nbsp;- Attesting to paying the prevailing wage<br />
              &nbsp; &nbsp; &nbsp;- Providing working conditions that won’t adversely affect other workers<br />
              &nbsp; &nbsp; &nbsp; <a href="https://flag.dol.gov/programs/LCA">https://flag.dol.gov/programs/LCA</a><br />
              3. Maintain Accurate Records:<br />
              &nbsp; &nbsp; &nbsp; - Keep records of wage payments, hours worked, and any changes to employment conditions. This includes documentation of the job title, job duties, and salary.<br />
              4. Notify USCIS of Changes:<br />
              &nbsp; &nbsp; &nbsp; -Report any significant changes in the employee’s role, such as job location, job duties, or salary, which may require filing an amended petition.<br />
              5. Revoke the Visa if Necessary:<br />
              &nbsp; &nbsp; &nbsp; - If the employment ends, companies must notify USCIS to revoke the H-1B status of the employee.<br />
              6. Compliance with Immigration Laws:<br />
              &nbsp; &nbsp; &nbsp; - Ensure adherence to all immigration laws and regulations, including keeping the employment relationship in good standing.<br />
              &nbsp; &nbsp; &nbsp; <a href='https://www.uscis.gov/laws-and-policy'>https://www.uscis.gov/laws-and-policy</a><br />

              </Typography>
            </Grid><br />
            {/* Costs and Funding */}
            
            {/* Extensions */}
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Details on Extensions</strong></Typography>
              <Typography>
              Pending Green Card Application<br />
              &nbsp; &nbsp; &nbsp;- If an H-1B holder has an approved I-140 immigrant petition (part of the green card process) and meets specific criteria, they can extend their H-1B status beyond six years in 3-year increments while the green card process is ongoing.<br />
              Recapturing Time<br />
              &nbsp; &nbsp; &nbsp;- Time spent outside the U.S. during the H-1B validity period can sometimes be "recaptured." For example, if an H-1B holder spent time outside the U.S., they might be able to extend their H-1B status for that amount of time.<br />
              Change of Status<br />
              &nbsp; &nbsp; &nbsp;- An H-1B holder may change their status to another nonimmigrant status (like H-4 or L-1) if eligible.<br />
              Different Employer<br />
              &nbsp; &nbsp; &nbsp;- If changing employers, a new H-1B petition can be filed, but the total time in H-1B status still counts toward the six-year limit.<br />

              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Other Visa Types Section */}
      <Typography variant="h4" gutterBottom>
        Other Visa Types
      </Typography>
      <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <strong>L-1B Visa</strong>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      &nbsp; &nbsp; &nbsp;- For employees of a multinational company who have specialized knowledge.<br />
      &nbsp; &nbsp; &nbsp;- Eligibility: Applicants must have worked for the foreign branch of the company for at least one continuous year within the past three years. They must possess specialized knowledge about the company’s products, services, or procedures.<br />
      &nbsp; &nbsp; &nbsp;- Duration: Initially valid for up to three years, with the possibility of extensions for a maximum of five years.<br />
      &nbsp; &nbsp; &nbsp;- Employer Requirements: The U.S. employer must be a qualifying organization, which means it must be related to the foreign entity (parent, subsidiary, affiliate).<br />
      &nbsp; &nbsp; &nbsp;- Dependents: L-2 visas are available for spouses and unmarried children under 21.<br />
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <strong>O-1 Visa</strong>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      &nbsp; &nbsp; &nbsp;- For individuals with extraordinary ability or achievement in their field, such as arts, sciences, education, business, or athletics.<br />
      &nbsp; &nbsp; &nbsp;- Eligibility: Applicants must provide evidence of their extraordinary ability through a significant body of work, awards, or recognition. The standard of proof is high, often requiring documentation like major awards or critical acclaim.<br />
      &nbsp; &nbsp; &nbsp;- Duration: Valid for the duration of the event, performance, or activity, up to three years, with the possibility of extensions in one-year increments.<br />
      &nbsp; &nbsp; &nbsp;- Employer Requirements: Must have a U.S. employer or agent who will sponsor the visa application.<br />
      &nbsp; &nbsp; &nbsp;- Dependents: O-3 visas are available for spouses and children.<br />
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <strong>TN Visa</strong>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      &nbsp; &nbsp; &nbsp;- For Canadian and Mexican citizens working in specific professional occupations as outlined in the USMCA (formerly NAFTA).<br />
      &nbsp; &nbsp; &nbsp;- Eligibility: Applicants must possess the qualifications for one of the designated professions (e.g., engineers, accountants, scientists) and must have a job offer from a U.S. employer.<br />
      &nbsp; &nbsp; &nbsp;- Duration: Initially granted for up to three years, with the option to renew indefinitely.<br />
      &nbsp; &nbsp; &nbsp;- Employer Requirements: A job offer from a U.S. employer is required, but a labor certification is not needed.<br />
      &nbsp; &nbsp; &nbsp;- Dependents: Spouses and children can accompany the TN visa holder, but they do not have work authorization.<br />
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <strong>J-1 Visa</strong>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      &nbsp; &nbsp; &nbsp;- For exchange visitors participating in programs that promote cultural exchange, including internships, research, teaching, and training.<br />
      &nbsp; &nbsp; &nbsp;- Eligibility: Various categories exist under the J-1 program, each with specific eligibility criteria, such as academic qualifications or sponsorship by a designated program.<br />
      &nbsp; &nbsp; &nbsp;- Duration: Duration varies depending on the specific program (a few months to several years).<br />
      &nbsp; &nbsp; &nbsp;- Employer Requirements: Must be sponsored by an approved organization or institution.<br />
      &nbsp; &nbsp; &nbsp;- Dependents: J-2 visas are available for spouses and children, and they may apply for work authorization.<br />
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <strong>H-2B Visa</strong>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      &nbsp; &nbsp; &nbsp;- For temporary non-agricultural workers to perform seasonal or intermittent work.<br />
      &nbsp; &nbsp; &nbsp;- Eligibility: Employers must demonstrate that there are not enough U.S. workers who are able, willing, qualified, and available to do the work.<br />
      &nbsp; &nbsp; &nbsp;- Duration: Initially valid for up to one year, with possible extensions in increments of up to one year, for a maximum of three years.<br />
      &nbsp; &nbsp; &nbsp;- Employer Requirements: The employer must obtain a temporary labor certification from the U.S. Department of Labor and file a petition with USCIS.<br />
      &nbsp; &nbsp; &nbsp;- Dependents: H-4 visas are available for spouses and children, but they do not have work authorization.<br />
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <strong>OPT/STEM OPT Program (extension with F-1 Visas)</strong>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      &nbsp; &nbsp; &nbsp;- Allows F-1 students (international students studying in the U.S.) to work in their field of study for up to 36 months (12 months for OPT, 24 more months for STEM OPT)<br />
      &nbsp; &nbsp; &nbsp;- Eligibility: Students must have completed a degree in an eligible STEM field designated by the Department of Homeland Security (DHS), they must be in F-1 visa status and currently in their initial period of post-completion OPT when applying for the STEM OPT extension.<br />
      &nbsp; &nbsp; &nbsp;- Duration: 3 years (12 months of initial OPT program + 24 months with the STEM OPT extension). The student must work at least 20 hours per week in a paid position.<br />
      &nbsp; &nbsp; &nbsp;- Employer Requirements: Must be enrolled in the E-Verify program and the job must be directly related to the student’s field of study.<br />
      &nbsp; &nbsp; &nbsp;- Transition to H-1B: Employers can use the STEM OPT period to apply for an H-1B visa on behalf of the student, providing more time for sponsorship and filing.<br />
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <strong>F-1 Visa</strong>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
    (<strong>NOT ELIGIBLE FOR WORK AUTHORIZATION</strong>, but F-1 Visa holders may apply for H-1B status while they are studying in the United States, or apply for OPT/STEM OPT program) <br />
      &nbsp; &nbsp; &nbsp;- A non-immigrant student visa that allows foreign students to pursue academic studies at an accredited U.S. institution.<br />
      &nbsp; &nbsp; &nbsp;- Eligibility: Applicants must be accepted into a full-time academic program, demonstrate proficiency in English, and show intent to return to their home country.<br />
      &nbsp; &nbsp; &nbsp;- Duration: Valid for the duration of the academic program, plus any authorized practical training (e.g., OPT or CPT).<br />
      &nbsp; &nbsp; &nbsp;- School Requirements: Students must enroll in an SEVP-approved school and maintain full-time enrollment.<br />
      &nbsp; &nbsp; &nbsp;- Dependents: F-2 visas are available for spouses and children.<br />
    </Typography>
  </AccordionDetails>
</Accordion>

{/* Additional Resources Section */}
<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>Additional Resources</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      <a href="https://www.uscis.gov/h-1b-visa" target="_blank" rel="noopener noreferrer">USCIS H-1B Visa Overview</a><br />
      <a href="https://www.dol.gov/agencies/eta/foreign-labor/permanent" target="_blank" rel="noopener noreferrer">Department of Labor H-1B Program</a><br />
      <a href="https://www.studyinthestates.dhs.gov/students/stem-opt" target="_blank" rel="noopener noreferrer">Study in the States: STEM OPT</a>
    </Typography>
  </AccordionDetails>
</Accordion>

    </Container>
  );
};

export default VisaInfo;
