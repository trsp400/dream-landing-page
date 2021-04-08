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
  BoxButton,
  Footer,
  ListDecisionStyled,
  BoxMessageFeedback
} from './styles';

import { question3 } from '../../../utils/questionsToProfile';

import Lefticon from '../../../assets/icons/left-icon.svg';
import OkIcon from '../../../assets/icons/ok-icon.svg'

const StepEight = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

  const { currentStep, decision } = store;

  const [inputValue, setInputvalue] = useState(decision?.third);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, selecione uma opção!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          decision: { ...store?.decision, third: inputValue },
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.keyCode === 13) {
        handleDispatch(9, 'next');
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
        <BoxMessageFeedback>
        <MessageFeedbackStyle
            placing="above"
            animationSpeed={2000}
            animationDelay={900}
            isMobileView={isMobileView}
          >
            Legal, entendi!
          </MessageFeedbackStyle>
          <MessageFeedbackStyle
            placing="bellow"
            animationSpeed={2000}
            animationDelay={1800}
            isMobileView={isMobileView}
          >
            {question3?.quest}
          </MessageFeedbackStyle>
        </BoxMessageFeedback>
        <BoxListDecision isMobileView={isMobileView}>
          <ListDecision
            options={question3?.options}
            state={inputValue}
            setState={setInputvalue}
          />
        </BoxListDecision>
      </Body>
      <Footer isMobileView={isMobileView}>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(7, 'previous')}
        >
          <Lefticon />
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => {
            if (!inputValue) return notify('Por favor, selecione uma opção!');
            return handleDispatch(9, 'next');
          }}
        >
          OK
        </Button>
      </Footer>
    </Container>
  ) : (
    <Container isMobileView={isMobileView}>
      <MessageFeedbackStyle
        placing="above"
        animationSpeed={2000}
        animationDelay={900}
        isMobileView={isMobileView}
      >
        Legal, entendi!
      </MessageFeedbackStyle>
      <MessageFeedbackStyle
        placing="bellow"
        animationSpeed={2000}
        animationDelay={1800}
        isMobileView={isMobileView}
      >
        {question3.quest}
      </MessageFeedbackStyle>
      <BoxListDecision isMobileView={isMobileView}>
        <ListDecisionStyled
          options={question3.options}
          state={inputValue}
          setState={setInputvalue}
        />

      <BoxButton>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(7, 'previous')}
        >
          <Lefticon width={20} />
        </Button>
        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleDispatch(9, 'next')}
        >
          OK <OkIcon />
        </Button>
      </BoxButton>

      </BoxListDecision>
    </Container>
  );
};

export default StepEight;
