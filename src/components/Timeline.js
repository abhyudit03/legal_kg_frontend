import React, { Fragment } from "react";
// import "./Timeline.css"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];


const Timeline = () => {

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
//     <div class="container">
//   <ul class="timeline">
//     <li class="active-tl" id="first"></li>
//     <li id="second"></li>
//     <li id="third"></li>
//   </ul>
// </div>

export default Timeline;