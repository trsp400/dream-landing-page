import React from 'react';

import StepOne from '../Beginner/StepOne';
import StepTwo from '../Beginner/StepTwo';
import StepThree from '../Beginner/StepThree';
import StepFour from '../Beginner/StepFour';
import StepFive from '../Beginner/StepFive';
import StepSix from '../Beginner/StepSix';
import StepSeven from '../Beginner/StepSeven';
import StepEight from '../Beginner/StepEight';

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
