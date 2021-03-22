import React, { useCallback, useState, useEffect } from 'react';
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
  InputContainer,
} from './styles';

const StepTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

  const { currentStep, objectiveCost } = store;

  const [inputValue, setInputValue] = useState(objectiveCost);
  const [isActiveInput, setIsActiveInput] = useState(false);

  // useEffect(() => {
  //   const input = document.querySelector('input');
  //   setIsActiveInput(true);
  //   input.autofocus = true;
  // }, []);

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

      if (typeof inputValue === 'string') {
        if (
          (formattedInputValue <= 0 || inputValue?.includes('-')) &&
          step > currentStep
        )
          return notify('Por favor, digite um valor válido!');
      } else {
        if ((formattedInputValue <= 0 || inputValue <= 0) && step > currentStep)
          return notify('Por favor, digite um valor válido!');
      }

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

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.keyCode === 13) {
        handleDispatch(3, 'next');
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [inputValue]);

  return isMobileView ? (
    <Container isMobileView={isMobileView} isActiveInput={isActiveInput}>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          largeLowSpace
          isMobileView={isMobileView}
        >
          Que legal! Com a Máquina dos Sonhos da BeCapital você consegue com
          tranquilidade!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={2800}
          isMobileView={isMobileView}
        >
          De quanto você precisa?
        </MessageFeedbackStyle>

        <BoxInput isMobileView={isMobileView}>
          <Input
            state={inputValue}
            setState={setInputValue}
            type="currency"
            setIsActiveInput={setIsActiveInput}
          />
        </BoxInput>
      </Body>
      <Footer isActiveInput={isActiveInput}>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(1, 'previous')}
        >
          <Lefticon />
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleDispatch(3, 'next')}
        >
          OK
        </Button>
      </Footer>
    </Container>
  ) : (
    <Container isMobileView={isMobileView}>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          largeLowSpace
          isMobileView={isMobileView}
        >
          Que legal! Com a Máquina dos Sonhos da BeCapital você consegue com
          tranquilidade!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={2800}
          isMobileView={isMobileView}
        >
          De quanto você precisa?
        </MessageFeedbackStyle>

        <InputContainer>
          <Button
            ripple
            variant="beblue"
            glow
            onClick={() => handleDispatch(1, 'previous')}
            style={{
              width: '10%',
            }}
          >
            <Lefticon width={20} />
          </Button>
          <BoxInput>
            <Input
              state={inputValue}
              setState={setInputValue}
              type="currency"
              setIsActiveInput={setIsActiveInput}
            />
          </BoxInput>
          <Button
            ripple
            variant="beorange"
            glow
            onClick={() => handleDispatch(3, 'next')}
            style={{
              width: '10%',
            }}
          >
            OK
          </Button>
        </InputContainer>
      </Body>
    </Container>
  );
};

export default StepTwo;
