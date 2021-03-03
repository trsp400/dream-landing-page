import React, { memo } from 'react';
import { times } from 'lodash';

import { Container, Bar } from './styles';

interface ProgressBarProps {
  length: number;
  currentStep?: number;
  barColor?: string;
  barSize?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  length,
  currentStep,
  barColor,
  barSize,
}) => {
  let bars = [];

  times(length, () => bars.push(<Bar />));

  return (
    <>
      {bars.map((bar, index) => (
        <Container key={index}>
          {React.cloneElement(bar, {
            currentStep: index === currentStep - 1,
            barColor: barColor || '#EA5E45',
            barSize: barSize || 25,
          })}
        </Container>
      ))}
    </>
  );
};

export default memo(ProgressBar);
