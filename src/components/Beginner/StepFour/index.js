import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import {
  Container,
  Body,
  MessageFeedbackStyle,
  BoxButton,
  BoxInput,
  Footer,
  InputContainer,
} from './styles';

import Lefticon from '../../../assets/icons/left-icon.svg';
import OkIcon from '../../../assets/icons/ok-icon.svg'

const StepFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

  const { currentStep, currentInvestments, objectiveCost } = store;

  const [isActiveInput, setIsActiveInput] = useState(false);
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
        handleDispatch(5, 'next');
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
          Show de bola!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1300}
          isMobileView={isMobileView}
        >
          Quanto você pode investir hoje?
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
  ) : (
    <Container isMobileView={isMobileView}>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          isMobileView={isMobileView}
        >
          Show de bola!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1300}
          isMobileView={isMobileView}
        >
          Quanto você pode investir hoje?
        </MessageFeedbackStyle>

        <InputContainer>
            <Input
              state={inputValue}
              setState={setInputValue}
              type="currency"
              setIsActiveInput={setIsActiveInput}
            />
          <BoxButton>
            <Button
              ripple
              variant="beblue"
              glow
              onClick={() => handleDispatch(3, 'previous')}
            >
              <Lefticon width={20} />
            </Button>

            <Button
              ripple
              variant="beorange"
              glow
              onClick={() => handleDispatch(5, 'next')}
            >
              OK <OkIcon />
            </Button>
          </BoxButton>
       </InputContainer>
      </Body>
    </Container>
  );
};

export default StepFour;
