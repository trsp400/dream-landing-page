import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, ButtonContainer, Button } from './styles';

import { changeFormState } from '../../redux/dream_machine/actions';

import RenderInvestorForm from '../../components/RenderInvestorSteps';
import RenderBeginnerForm from '../../components/RenderBeginnerSteps';

import LineChart from '../../components/LineChart';

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
      <LineChart
        data={[
          { x: 2021, y: 6975.64 },
          { x: 2022, y: 18408.09 },
          { x: 2023, y: 36376.74 },
        ]}
        isMobileView={isMobileView}
        height={400}
        slider
      />
      {/* <ButtonContainer>
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
      </ButtonContainer> */}
    </Container>
  );
};

export default Home;
