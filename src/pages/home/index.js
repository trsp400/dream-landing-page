import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Header,
  MainHome,
  PresentationSection,
  ButtonSection,
  Button,
} from './styles';

import { changeFormState } from '../../redux/dream_machine/actions';

import RenderInvestorForm from '../../components/RenderInvestorSteps';
import RenderBeginnerForm from '../../components/RenderBeginnerSteps';

import Logo from '../../assets/logo/svg/bec_logo.svg';
import MaquinaDosSonhos from '../../assets/logo/svg/maquinaDosSonhos.svg';

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

  const { currentStep, path } = store;

  const onChangeStep = (step, selectedPath) => {
    dispatch(
      changeFormState({
        ...store,
        currentStep: step,
        path: selectedPath,
      }),
    );
  };

  return currentStep > 0 ? (
    <div>
      <RenderSelectedFormPath
        currentStep={currentStep}
        store={store}
        path={path}
      />
    </div>
  ) : (
    <Container>
      <Header>
        <Logo />
      </Header>
      <MaquinaDosSonhos />
      <MainHome>
        <PresentationSection>
          <h1>Quer descobrir o investimento ideal para você?</h1>
          <p>
            Nosso orientador financeiro te ajudará a encontrar o título mais
            adequado para você atingir seu objetivo.
          </p>
        </PresentationSection>

        <ButtonSection>
          <Button
            ripple
            variant="beorange"
            glow
            onClick={() => onChangeStep(1, 'beginner')}
          >
            COMEÇAR AGORA
          </Button>
          <Button variant="beblue" onClick={() => onChangeStep(1, 'investor')}>
            JÁ SEI ONDE INVESTIR
          </Button>
        </ButtonSection>
      </MainHome>
    </Container>
  );
};

export default Home;
