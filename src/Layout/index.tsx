import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useWindowSize from '../hooks/useWindowSize';

import { screenResize } from '../redux/settings/actions';

import { Main, Container, ProgressBarContainer, Background } from './styles';

import ProgressBar from '../components/CustomComponents/ProgressBar';

interface RenderProgressBarProps {
  path: 'investor' | 'beginner';
  currentStep: number;
}

interface ReduxStore {
  isMobileView?: Boolean;
  path?: 'investor' | 'beginner';
  result?: Array<any>;
  currentStep?: number;
  dreamMachine?: Object;
  settings?: Object;
}

const RenderProgressBar: React.FC<RenderProgressBarProps> = ({
  path,
  currentStep,
}) => {
  switch (path) {
    case 'investor':
      return (
        <ProgressBarContainer>
          <ProgressBar
            length={8}
            currentStep={currentStep}
            barColor="#EA5E45"
          />
        </ProgressBarContainer>
      );
    case 'beginner':
      return (
        <ProgressBarContainer>
          <ProgressBar
            length={7}
            currentStep={currentStep}
            barColor="#EA5E45"
          />
        </ProgressBarContainer>
      );
    default:
      return null;
  }
};

const Layout = props => {
  const [width] = useWindowSize();
  const dispatch = useDispatch();

  const { currentStep, path, result }: ReduxStore = useSelector(
    ({ dreamMachine }: ReduxStore) => dreamMachine,
  );
  const { isMobileView }: ReduxStore = useSelector(
    ({ settings }: ReduxStore) => settings,
  );

  const yearlyAverageArray = result?.yearlyAverageArray;

  const children = props?.children;

  useEffect(() => {
    dispatch(screenResize(width));
  }, [width, dispatch]);

  return (
    <Container isMobileView={isMobileView} currentStep={currentStep}>
      <Background
        currentStep={currentStep}
        yearlyAverageArray={yearlyAverageArray}
      />
      {!yearlyAverageArray?.length && isMobileView && (
        <RenderProgressBar path={path} currentStep={currentStep} />
      )}
      <Main yearlyAveradeArray={yearlyAverageArray}>{children}</Main>
    </Container>
  );
};

export default Layout;
