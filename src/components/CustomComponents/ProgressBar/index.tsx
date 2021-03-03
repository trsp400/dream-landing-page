import React, { memo } from 'react';
import { times } from 'lodash';

import { Container, Bar } from './styles';

interface ProgressBarProps {
  length: number;
  currentStep?: number;
  barColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  length,
  currentStep,
  barColor,
}) => {
  let bars = [];

  times(length, () => bars.push(<Bar />));

  return (
    <>
      {bars.map((bar, index) => (
        <Container key={index}>
          {React.cloneElement(bar, {
            currentStep: index === currentStep - 1,
            style: {
              backgroundColor: index < currentStep && (barColor || '#EA5E45'),
            },
          })}
        </Container>
      ))}
    </>
  );
};

export default memo(ProgressBar);
