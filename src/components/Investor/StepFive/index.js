import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import {
  Container,
  Body,
  MessageFeedbackStyle,
  BoxInput,
  Footer,
} from './styles';

import Lefticon from '../../../assets/icons/left-icon.svg';

const StepFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, currentInvestments, objectiveCost } = store;

  const [inputValue, setInputValue] = useState(currentInvestments);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, digite um valor!');

      const formattedInputValue =
        typeof inputValue === 'string'
          ? parseFloat(
              inputValue
                ?.replace('R$', '')
                ?.replace(/\./gi, '')
                ?.replace(/,/gi, '.'),
            )
          : inputValue;

      if (objectiveCost <= formattedInputValue && step > currentStep)
        return notify(
          'O valor que você pode investir deve ser menor do que o valor do seu sonho!',
        );

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          currentInvestments: formattedInputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.keyCode === 13) {
        handleDispatch(6, 'next');
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [inputValue]);

  return (
    <Container>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
        >
          Beleza!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1300}
        >
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

export default StepFour;
