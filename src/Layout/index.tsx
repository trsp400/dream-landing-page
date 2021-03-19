import React, { useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';

import store from '../redux/store';
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
  finishSimulation?: Boolean;
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
            length={9}
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

  const yearlyAverageArray: Number[] = result?.yearlyAverageArray;

  const children = props?.children;
  const finishSimulation = props?.finishSimulation;

  useEffect(() => {
    dispatch(screenResize(width));
  }, [width, dispatch]);

  return (
    <Provider store={store}>
      <Container isMobileView={isMobileView} currentStep={currentStep}>
        <Background
          currentStep={currentStep}
          yearlyAverageArray={yearlyAverageArray}
        />
        {!yearlyAverageArray?.length && isMobileView && (
          <RenderProgressBar path={path} currentStep={currentStep} />
        )}
        <Main finishSimulation={finishSimulation}>{children}</Main>
      </Container>
    </Provider>
  );
};

export default Layout;
