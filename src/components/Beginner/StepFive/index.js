import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

import Button from '../../CustomComponents/Button';

import {
  Container,
  MessageFeedbackStyle,
  BoxInput,
  Body,
  Footer,
  InputContainer,
} from './styles';

import Lefticon from '../../../assets/icons/left-icon.svg';

const StepFive = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

  const { currentStep, monthlySupport, objectiveCost } = store;

  const [isActiveInput, setIsActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState(monthlySupport);

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
          monthlySupport: formattedInputValue,
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

  return isMobileView ? (
    <Container isMobileView={isMobileView}>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          isMobileView={isMobileView}
        >
          Beleza!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1300}
          isMobileView={isMobileView}
        >
          Quanto você pode investir por mês?
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
  ) : (
    <Container isMobileView={isMobileView}>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          isMobileView={isMobileView}
        >
          Beleza!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1300}
          isMobileView={isMobileView}
        >
          Quanto você pode investir por mês?
        </MessageFeedbackStyle>
        <InputContainer>
          <Button
            ripple
            variant="beblue"
            glow
            onClick={() => handleDispatch(4, 'previous')}
            style={{
              width: '10%',
              padding: 0,
            }}
          >
            <Lefticon width={20} />
          </Button>

          <BoxInput isMobileView={isMobileView}>
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
            onClick={() => handleDispatch(6, 'next')}
            style={{
              width: '20%',
            }}
          >
            OK
          </Button>
        </InputContainer>
      </Body>

      <Footer></Footer>
    </Container>
  );
};

export default StepFive;
