import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';

import Lefticon from '../../../assets/icons/left-icon.svg';

import {
  Container,
  Body,
  MessageFeedbackStyle,
  BoxInput,
  Footer,
} from './styles';

const StepTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, objectiveCost } = store;

  const [isActiveInput, setIsActiveInput] = useState(false)
  const [inputValue, setInputValue] = useState(objectiveCost);

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
                ?.replace(/,/gi, '.') || inputValue,
            )
          : inputValue;

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          objectiveCost: formattedInputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <Container>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          // largeLowSpace
        >
          OK!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1000}
        >
          De quanto você precisa?
        </MessageFeedbackStyle>

        <BoxInput>
          <Input state={inputValue} setState={setInputValue} type="currency" setIsActiveInput={setIsActiveInput}/>
        </BoxInput>
      </Body>
      <Footer isActiveInput={isActiveInput}>
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

export default StepTwo;
