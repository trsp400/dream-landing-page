import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';

import Lefticon from '../../../assets/icons/left-icon.svg'

import { Container, Body, MessageFeedbackStyle,BoxInput, Footer } from './styles';

const StepTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, objectiveCost } = store;

  const [inputValue, setInputValue] = useState(objectiveCost);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, digite um valor!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          objectiveCost:
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

  console.log(store)
  return (
    <Container>
      <Body>
       <MessageFeedbackStyle placing="above" animationSpeed={2000} animationDelay={900} largeLowSpace>
          Que legal! Com a Máquina dos Sonhos da BeCapital você consegue com tranquilidade!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle placing="bellow" animationSpeed={2000} animationDelay={2800}>
          De quanto você precisa?
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
  );
};

export default StepTwo;
