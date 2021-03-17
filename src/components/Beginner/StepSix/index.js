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
  ListDecisionStyled,
} from './styles';

import Lefticon from '../../../assets/icons/left-icon.svg';

import { question1 } from '../../../utils/questionsToProfile';

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

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

  return isMobileView ? (
    <Container isMobileView={isMobileView}>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          isMobileView={isMobileView}
        >
          Vamos entender melhor os seus objetivos...
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1800}
          isMobileView={isMobileView}
        >
          {question1.quest}
        </MessageFeedbackStyle>
        <BoxListDecision isMobileView={isMobileView}>
          <ListDecision
            options={question1.options}
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
  ) : (
    <Container isMobileView={isMobileView}>
      <MessageFeedbackStyle
        placing="above"
        animationSpeed={2000}
        animationDelay={900}
        isMobileView={isMobileView}
      >
        Vamos entender melhor os seus objetivos...
      </MessageFeedbackStyle>
      <MessageFeedbackStyle
        placing="bellow"
        animationSpeed={2000}
        animationDelay={1800}
        isMobileView={isMobileView}
      >
        {question1.quest}
      </MessageFeedbackStyle>
      <BoxListDecision isMobileView={isMobileView}>
        <ListDecisionStyled
          options={question1.options}
          state={inputValue}
          setState={setInputvalue}
        />
      </BoxListDecision>

      <Footer isMobileView={isMobileView}>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(5, 'previous')}
          style={{
            width: '20%',
          }}
        >
          <Lefticon width={20} />
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => {
            if (!inputValue) return notify('Por favor, selecione uma opção!');
            return handleDispatch(7);
          }}
          style={{
            width: '20%',
          }}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepSeven;
