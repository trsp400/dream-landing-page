import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';

import Lefticon from '../../../assets/icons/left-icon.svg'

import { Container, Body, MessageFeedbackStyle, BoxInput ,Footer, ButtonContainer } from './styles';

import toastConfig from '../../../utils/toastConfig';

const listPeriods = {
  anos: 'Anos',
  meses: 'Meses',
};

const StepThree = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, period, yearOrMonth } = store;

  const [inputValue, setInputValue] = useState(period);
  const [inputYearOrMonth, setInputYearOrMonth] = useState(yearOrMonth);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, digite um valor!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          period: inputValue,
          yearOrMonth: inputYearOrMonth,
        }),
      );
    },
    [dispatch, store, inputValue, inputYearOrMonth],
  );

  return (
    <Container>
      <Body>
        <MessageFeedbackStyle placing="above" animationSpeed={2000} animationDelay={900}>
          OK!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle placing="bellow" animationSpeed={2000} animationDelay={1200}>
          De quanto tempo você precisa?
        </MessageFeedbackStyle>

        <ButtonContainer>
          {Object.keys(listPeriods).map(item => (
            <Button
              variant={item === inputYearOrMonth ? 'beorange' : 'beblue'}
              ripple
              glow
              onClick={() => setInputYearOrMonth(item)}
              key={item}
            >
              {listPeriods[item]}
            </Button>
          ))}
        </ButtonContainer>
        <BoxInput>
          <Input
            state={inputValue}
            setState={setInputValue}
            type="number"
            placeholder="Tempo"
          />
        </BoxInput>
      </Body>

      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(2, 'previous')}
        >
          <Lefticon />
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleDispatch(4, 'next')}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepThree;
