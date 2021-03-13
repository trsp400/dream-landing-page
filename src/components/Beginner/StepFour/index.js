import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import { Container, Body, MessageFeedbackStyle, BoxInput,Footer } from './styles';


import Lefticon from '../../../assets/icons/left-icon.svg'

import toastConfig from '../../../utils/toastConfig';

const StepFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, currentInvestments } = store;

  const [inputValue, setInputValue] = useState(currentInvestments);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, digite um valor!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          currentInvestments:
            parseFloat(
              inputValue
                ?.replace(/R$/gi, '')
                .replace(/\./gi, '')
                .replace(/,/gi, '.'),
            ) || inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <Container>
      <Body>
      <MessageFeedbackStyle placing="above" animationSpeed={2000} animationDelay={900}>
          Beleza!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle placing="bellow" animationSpeed={2000} animationDelay={1300}>
        Quanto você pode investir hoje?
        </MessageFeedbackStyle>
        <BoxInput>
          <Input state={inputValue} setState={setInputValue} type="currency" />
        </BoxInput>
      </Body>

      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(3, 'previous')}
        >
          <Lefticon />
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleDispatch(5, 'next')}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepFour;
