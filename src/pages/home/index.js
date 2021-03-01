import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Image } from 'react-bootstrap';
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

import Logo from '../../assets/logo/svg/logo_header_mobile.svg';
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
      <MainHome>
        <PresentationSection>
          <MaquinaDosSonhos />
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
          Começar agora
        </Button>
        <Button variant="beorange" onClick={() => onChangeStep(1, 'investor')}>
          Já sei onde investir
        </Button>
        </ButtonSection>
      </MainHome>
    </Container>
  );
};

export default Home;
