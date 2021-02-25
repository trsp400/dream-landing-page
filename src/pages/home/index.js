import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, ButtonContainer, Button } from './styles';

import { changeFormState } from '../../redux/dream_machine/actions';

import RenderInvestorForm from '../../components/RenderInvestorSteps';
import RenderBeginnerForm from '../../components/RenderBeginnerSteps';

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

  console.log(store);

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
    <RenderSelectedFormPath
      currentStep={currentStep}
      store={store}
      path={path}
    />
  ) : (
    <Container>
      <ButtonContainer>
        <Button
          variant="warning"
          type="button"
          onClick={() => onChangeStep(1, 'beginner')}
        >
          Começar agora
        </Button>
        <Button type="button" onClick={() => onChangeStep(1, 'investor')}>
          Já sei onde investir
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
