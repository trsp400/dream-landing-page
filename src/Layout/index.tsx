import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useWindowSize from '../utils/useWindowSizeHook';

import { screenResize } from '../redux/settings/actions';

import { Main, Container, ProgressBarContainer, Background } from './styles';

import ProgressBar from '../components/CustomComponents/ProgressBar';

interface RenderProgressBarProps {
  path: 'investor' | 'beginner';
  currentStep: number;
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

  const { currentStep, path } = useSelector(({ dreamMachine }) => dreamMachine);
  const { isMobileView } = useSelector(({ settings }) => settings);

  const children = props?.children;

  useEffect(() => {
    dispatch(screenResize(width));
  }, [width, dispatch]);

  return (
    <Container>
      {location?.pathname !== '/resultado' && isMobileView && (
        <RenderProgressBar path={path} currentStep={currentStep} />
      )}
      <Main style={{ zIndex: 999 }}>
        <Background />
        {children}
      </Main>
    </Container>
  );
};

export default Layout;
