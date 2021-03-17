import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Header,
  MainHome,
  PresentationSection,
  ButtonSection,
  Button,
  Background,
  DesktopContainer,
  DreamMachineContainer,
  ContainerSteps
} from './styles';

import { useSpring, animated } from 'react-spring';

import { changeFormState } from '../../redux/dream_machine/actions';

import RenderInvestorForm from '../../components/RenderInvestorSteps';
import RenderBeginnerForm from '../../components/RenderBeginnerSteps';

import SpringerInterpolate from '../../components/CustomComponents/SpringerInterpolate';

import Logo from '../../assets/logo/svg/bec_logo.svg';
import MaquinaDosSonhosDesktop from '../../assets/logo/svg/maquinaDosSonhosDesktop.svg';

import ImageGallery from '../../components/CustomComponents/ImageGallery';

const RenderSelectedFormPath = ({ currentStep, store, path }) => {
  const paths = {
    investor: <RenderInvestorForm currentStep={currentStep} store={store} />,
    beginner: <RenderBeginnerForm currentStep={currentStep} store={store} />,
  };

  return paths[path];
};

const Home = () => {
  const dispatch = useDispatch();

  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { isMobileView } = useSelector(({ settings }) => settings);

  const { currentStep, path, direction } = store;

  const onChangeStep = (step, selectedPath, direction) => {
    dispatch(
      changeFormState({
        ...store,
        currentStep: step,
        path: selectedPath,
        direction,
      }),
    );
  };

  const springConfig =
    direction === 'previous'
      ? {
          transform: isMobileView ? 'translateX(0px)' : 'translateY(0px)',
          from: {
            opacity: 0,
            transform: isMobileView
              ? 'translateX(-1000px)'
              : 'translateY(-1000px)',
          },
        }
      : {
          transform: isMobileView ? 'translateX(0px)' : 'translateY(0px)',
          from: {
            opacity: 0,
            transform: isMobileView
              ? 'translateX(1000px)'
              : 'translateY(1000px)',
          },
        };

  const springProps = useSpring({
    opacity: 1,
    delay: 0,
    config: { tension: 300, friction: 70 },

    reset: currentStep,
    ...springConfig,
  });

  return currentStep >= 1 ? (
    <ContainerSteps>
        <animated.div
          style={{
            ...springProps,
            height: '100vh',
          }}
        >

            <RenderSelectedFormPath
              currentStep={currentStep}
              store={store}
              path={path}
            />
        </animated.div>
      </ContainerSteps>
  ) : (
    <Container isMobileView={isMobileView} currentStep={currentStep}>
      <Header isMobileView={isMobileView}>
        <Logo />
      </Header>

      <Background isMobileView={isMobileView} />

      <MainHome>
        {isMobileView ? (
          <>
            <ImageGallery />
            <PresentationSection isMobileView={isMobileView}>
              <h1>Quer descobrir o investimento ideal para você?</h1>
              <p>
                Nosso orientador financeiro te ajudará a encontrar o título mais
                adequado para você atingir seu objetivo.
              </p>
            </PresentationSection>
            <ButtonSection isMobileView>
              <Button
                ripple
                variant="beorange"
                glow
                onClick={() => onChangeStep(1, 'beginner', 'next')}
              >
                COMEÇAR AGORA
              </Button>
              {/* <Button
                variant="beblue"
                onClick={() => onChangeStep(1, 'investor', 'next')}
              >
                JÁ SEI ONDE INVESTIR
              </Button> */}
            </ButtonSection>
          </>
        ) : (
          <DesktopContainer>
            <PresentationSection>
              <h1>Quer descobrir o investimento ideal para você?</h1>
              <p>
                Nosso orientador financeiro te ajudará a encontrar o título mais
                adequado para você atingir seu objetivo.
              </p>
              <ButtonSection isMobileView={isMobileView}>
                <Button
                  ripple
                  variant="beorange"
                  glow
                  onClick={() => onChangeStep(1, 'beginner', 'next')}
                >
                  COMEÇAR AGORA
                </Button>
                {/* <Button
                  variant="beblue"
                  ripple
                  glow
                  onClick={() => onChangeStep(1, 'investor', 'next')}
                >
                  JÁ SEI ONDE INVESTIR
                </Button> */}
              </ButtonSection>
            </PresentationSection>
            <DreamMachineContainer>
              <SpringerInterpolate>
                <MaquinaDosSonhosDesktop style={{ width: '800px' }} />
              </SpringerInterpolate>
            </DreamMachineContainer>
          </DesktopContainer>
        )}
      </MainHome>
    </Container>
  );
};

export default Home;
