import React from 'react';

import StepOne from '../Investor/StepOne';
import StepTwo from '../Investor/StepTwo';
import StepThree from '../Investor/StepThree';
import StepFour from '../Investor/StepFour';
import StepFive from '../Investor/StepFive';
import StepSix from '../Investor/StepSix';
import StepSeven from '../Investor/StepSeven';
import StepEight from '../Investor/StepEight';

const RenderFormSteps = ({ currentStep }) => {
  switch (currentStep) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
    case 4:
      return <StepFour />;
    case 5:
      return <StepFive />;
    case 6:
      return <StepSix />;
    case 7:
      return <StepSeven />;
    case 8:
      return <StepEight />;
    default:
      return null;
  }
};

export default RenderFormSteps;
