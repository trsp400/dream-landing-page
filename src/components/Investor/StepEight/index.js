import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import { sendDreamMachineResultToAPIRequest } from '../../../redux/dream_machine/actions';
import { createResultObject } from '../../../utils/handleResultObject';
import Input from '../../CustomComponents/Input';
import Loading from '../../CustomComponents/Loading';
import Button from '../../CustomComponents/Button';

import { Container, MessageFeedbackStyle, BoxInput,ErrorInformation ,Body, Footer } from './styles';

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const {
    investmentsPlacement,
    desiredInvestmentsPlacement,
    result: { email },
  } = store;

  const [inputValue, setInputValue] = useState(email);
  const [validEmail, setValidEmail] = useState(true);
  const [requestLoading, setRequestLoading] = useState(false);

  const period = parseInt(store.period);
  const yearOrMonth = store.yearOrMonth;
  const monthlySupport = parseFloat(
    store.monthlySupport
      .replace('R$ ', '')
      .replace(/\./g, '')
      .replace(',', '.'),
  );
  const currentInvestments = parseFloat(
    store.currentInvestments
      .replace('R$ ', '')
      .replace(/\./g, '')
      .replace(',', '.'),
  );
  const objectiveCost = parseFloat(
    store.objectiveCost.replace('R$ ', '').replace(/\./g, '').replace(',', '.'),
  );

  const handleDispatchResultState = useCallback(() => {
    const resultObject = createResultObject(
      period,
      yearOrMonth,
      monthlySupport,
      currentInvestments,
      objectiveCost,
      inputValue,
      investmentsPlacement,
      desiredInvestmentsPlacement,
    );

    if (!inputValue) return notify('Por favor, digite seu e-mail!');
    setRequestLoading(true);

    dispatch(
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
    );
  });

  function emailIsValid(dataEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataEmail);
  }

  const handleOnClink = email => {
    const isValidEmail = emailIsValid(email);

    if (isValidEmail) {
      handleDispatchResultState();
      setValidEmail(true);
      navigate('/resultado');
      return true;
    }

    return setValidEmail(false);
  };

  const checkValidEmailOnInputChange = value => {
    const valid = emailIsValid(value);
    setValidEmail(valid);

    setInputValue(value);
    return valid;
  };

  return (
    <Container>
      <Body>
        <MessageFeedbackStyle placing="bellow" animationSpeed={2000} animationDelay={900}>
          Para receber o resultado completo do
          seu perfil, deixe aqui o seu e-mail:
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
          Ao cadastrar o e-mail, você autoriza que a BeCapital faça envio de conteúdos que a nossa
          equipe avalie como interessantes para o seu perfil.
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
      {requestLoading && <Loading size="5" />}
    </Container>
  );
};

export default StepSeven;
