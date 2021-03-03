import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useWindowSize from '../utils/useWindowSizeHook';

import { screenResize } from '../redux/settings/actions';

import { Main, Container, ProgressBarContainer } from './styles';

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
          <ProgressBar length={8} currentStep={currentStep} barSize={30} />
        </ProgressBarContainer>
      );
    case 'beginner':
      return (
        <ProgressBarContainer>
          <ProgressBar length={7} currentStep={currentStep} barSize={30} />
        </ProgressBarContainer>
      );
    default:
      break;
  }
};

const Layout = props => {
  const [width] = useWindowSize();
  const dispatch = useDispatch();

  const { currentStep, path } = useSelector(({ dreamMachine }) => dreamMachine);

  const children = props?.children; // eslint-disable-line

  useEffect(() => {
    dispatch(screenResize(width));
  }, [width, dispatch]);

  return (
    <Container>
      {currentStep && (
        <RenderProgressBar path={path} currentStep={currentStep} />
      )}
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
