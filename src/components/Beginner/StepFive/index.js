import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, MessageFeedbackStyle, BoxInput, Body, Footer } from './styles';

import Lefticon from '../../../assets/icons/left-icon.svg'

import toastConfig from '../../../utils/toastConfig';

const StepFive = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, monthlySupport } = store;

  const [inputValue, setInputValue] = useState(monthlySupport);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, digite um valor!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          monthlySupport:
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
          Quanto você pode investir por mês?
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
          onClick={() => handleDispatch(4, 'previous')}
        >
          <Lefticon />
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleDispatch(6, 'next')}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepFive;
