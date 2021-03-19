import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import {
  sendDreamMachineResultToAPIRequest,
  changeFormState,
} from '../../../redux/dream_machine/actions';
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
  InputContainer,
} from './styles';

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

  const { result, decision } = store;

  const yearlyAverageArray = result?.yearlyAverageArray || [];
  const resultSuccess = result?.resultSuccess || false;

  const [isActiveInput, setIsActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [loading, setLoading] = useState(false);

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

    const dispatchResult = () => {
      dispatch(
        changeFormState({
          ...store,
          finishSimulation: true,
        }),
      );

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
    };

    monthlySupport < objectiveCost && currentInvestments < objectiveCost
      ? dispatchResult()
      : setLoading(false);
  });

  function emailIsValid(dataEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataEmail);
  }

  const handleOnClink = email => {
    if (!email || email === '') return notify('Por favor, digite seu e-mail!');

    const isValidEmail = emailIsValid(email);

    if (isValidEmail) {
      setLoading(true);
      handleDispatchResultState();
      setValidEmail(true);

      return true;
    }

    setLoading(false);
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
      setLoading(false);
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

  const renderMobileOrDesktop = () => {
    return isMobileView ? (
      <Container isMobileView={isMobileView}>
        <Body isMobileView={isMobileView}>
          <MessageFeedbackStyle
            placing="bellow"
            animationSpeed={2000}
            animationDelay={900}
            isMobileView={isMobileView}
          >
            Para receber o resultado completo do seu perfil, deixe aqui o seu
            e-mail:
          </MessageFeedbackStyle>
          <BoxInput isMobileView={isMobileView}>
            <span className="box-input_warning">
              Ao cadastrar o e-mail, você autoriza que a BeCapital faça envio de
              conteúdos que a nossa equipe avalie como interessantes para o seu
              perfil.
            </span>
            <Input
              state={inputValue}
              setState={checkValidEmailOnInputChange}
              type="email"
              setIsActiveInput={setIsActiveInput}
            />
            {!validEmail && (
              <ErrorInformation>Digite um e-mail válido!</ErrorInformation>
            )}
          </BoxInput>

        </Body>

        <Footer isActiveInput={isActiveInput}>
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
    ) : (
      <Container isMobileView={isMobileView}>
        <Body isMobileView={isMobileView}>
          <MessageFeedbackStyle
            placing="bellow"
            animationSpeed={2000}
            animationDelay={900}
            isMobileView={isMobileView}
          >
            Para receber o resultado completo do seu perfil, deixe aqui o seu
            e-mail:
          </MessageFeedbackStyle>

          <InputContainer>
            <BoxInput isMobileView={isMobileView}>
              <Input
                state={inputValue}
                setState={checkValidEmailOnInputChange}
                type="email"
                setIsActiveInput={setIsActiveInput}
              />
              {!validEmail && (
                <ErrorInformation>Digite um e-mail válido!</ErrorInformation>
              )}
            </BoxInput>
            <Button
              ripple
              variant="beorange"
              glow
              onClick={() => handleOnClink(inputValue)}
            >
              OK
            </Button>
          </InputContainer>
          <span>
            Ao cadastrar o e-mail, você autoriza que a BeCapital faça envio de
            conteúdos que a nossa equipe avalie como interessantes para o seu
            perfil.
          </span>
        </Body>
      </Container>
    );
  };

  return loading ? <Loading /> : renderMobileOrDesktop();
};

export default StepSeven;
