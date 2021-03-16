import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import { sendDreamMachineResultToAPIRequest } from '../../../redux/dream_machine/actions';
import { createResultObject } from '../../../utils/handleResultObject';
import Input from '../../CustomComponents/Input';
import Loading from '../../CustomComponents/Loading';
import Button from '../../CustomComponents/Button';

import { parseStringInt } from '../../../utils/parseValues';

import {
  Container,
  MessageFeedbackStyle,
  BoxInput,
  ErrorInformation,
  Body,
  Footer,
} from './styles';

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { result, decision } = store;

  const yearlyAverageArray = result?.yearlyAverageArray || [];
  const resultSuccess = result?.resultSuccess || false;

  const [inputValue, setInputValue] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [requestLoading, setRequestLoading] = useState(false);

  const period = parseStringInt(store.period);
  const yearOrMonth = store.yearOrMonth;
  const monthlySupport = store.monthlySupport;
  const currentInvestments = store.currentInvestments;
  const objectiveCost = store.objectiveCost;

  const handleDispatchResultState = useCallback(() => {
    const resultObject = createResultObject(
      period,
      yearOrMonth,
      monthlySupport,
      currentInvestments,
      objectiveCost,
      inputValue,
      decision,
    );

    monthlySupport < objectiveCost && currentInvestments < objectiveCost
      ? dispatch(
          sendDreamMachineResultToAPIRequest({
            ...store,
            result: {
              ...resultObject,
            },
            period,
            monthlySupport,
            currentInvestments,
            objectiveCost,
          }),
        )
      : setRequestLoading(false);
  });

  function emailIsValid(dataEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataEmail);
  }

  const handleOnClink = email => {
    if (!email || email === '') return notify('Por favor, digite seu e-mail!');

    const isValidEmail = emailIsValid(email);

    if (isValidEmail) {
      setRequestLoading(true);
      handleDispatchResultState();
      setValidEmail(true);

      return true;
    }

    setRequestLoading(false);
    return setValidEmail(false);
  };

  const checkValidEmailOnInputChange = value => {
    const valid = emailIsValid(value);
    setValidEmail(valid);

    setInputValue(value);
    return valid;
  };

  useEffect(() => {
    if (yearlyAverageArray?.length) {
      navigate('/resultado');
    }
  }, [yearlyAverageArray]);

  useEffect(() => {
    if (resultSuccess === null) {
      setRequestLoading(false);
    }
  }, [resultSuccess]);

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.keyCode === 13) {
        handleOnClink(inputValue);
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [inputValue]);

  return requestLoading ? (
    <Loading />
  ) : (
    <Container>
      <Body>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={900}
        >
          Para receber o resultado completo do seu perfil, deixe aqui o seu
          e-mail:
        </MessageFeedbackStyle>
        <BoxInput>
          <Input
            state={inputValue}
            setState={checkValidEmailOnInputChange}
            type="email"
          />
          {!validEmail && (
            <ErrorInformation>Digite um e-mail válido!</ErrorInformation>
          )}
        </BoxInput>
        <span>
          Ao cadastrar o e-mail, você autoriza que a BeCapital faça envio de
          conteúdos que a nossa equipe avalie como interessantes para o seu
          perfil.
        </span>
      </Body>

      <Footer>
        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleOnClink(inputValue)}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepSeven;
