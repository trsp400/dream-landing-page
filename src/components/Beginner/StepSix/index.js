/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

import ListDecision from '../../CustomComponents/ListDecision';
import Button from '../../CustomComponents/Button';
import {
  Container,
  Body,
  BoxListDecision,
  MessageFeedbackStyle,
  Footer,
} from './styles';

import Lefticon from '../../../assets/icons/left-icon.svg';

import { question1 } from '../../../utils/questionsToProfile';

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, decision } = store;

  const [inputValue, setInputvalue] = useState(decision?.first);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, selecione uma opção!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          decision: { ...store?.decision, first: inputValue },
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.keyCode === 13) {
        handleDispatch(7, 'next');
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
          Vamos entender melhor os seus objetivos...
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1800}
        >
          {question1.quest}
        </MessageFeedbackStyle>
        <BoxListDecision>
          <ListDecision
            options={question1.options}
            state={inputValue}
            setState={setInputvalue}
          />
        </BoxListDecision>
      </Body>

      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(5, 'previous')}
        >
          <Lefticon />
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => {
            if (!inputValue) return notify('Por favor, selecione uma opção!');
            return handleDispatch(7);
          }}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepSeven;
