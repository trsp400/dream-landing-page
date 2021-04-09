import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import {
  sendDreamMachineResultToAPIRequest,
  changeFormState,
} from '../../../redux/dream_machine/actions';
import { createResultObject } from '../../../utils/handleResultObject';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';

import { parseStringInt } from '../../../utils/parseValues';

import EmailIcon from '../../../assets/icons/email-icon.svg';

import {
  Container,
  MessageFeedbackStyle,
  BoxInput,
  ErrorInformation,
  BoxButton,
  Body,
  Footer,
  InputContainer,
  BoxMessageFeedback
} from './styles';

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

  const { result, decision } = store;

  const yearlyAverageArray = result?.yearlyAverageArray || [];

  const [isActiveInput, setIsActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [validEmail, setValidEmail] = useState(true);

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
          direction: "loading",
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

      navigate('/resultado');
    };

    monthlySupport < objectiveCost &&
      currentInvestments < objectiveCost &&
      dispatchResult();
  });

  function emailIsValid(dataEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataEmail);
  }

  const handleOnClink = email => {
    if (!email || email === '') return notify('Por favor, digite seu e-mail!');

    const isValidEmail = emailIsValid(email);

    if (isValidEmail) {
      handleDispatchResultState();
      setValidEmail(true);

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

  useEffect(() => {
    if (yearlyAverageArray?.length) {
      navigate('/resultado');
    }
  }, [yearlyAverageArray]);

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
          <BoxMessageFeedback>
            <MessageFeedbackStyle
              placing="bellow"
              animationSpeed={2000}
              animationDelay={900}
              isMobileView={isMobileView}
            >
              Para receber o resultado completo do seu perfil, deixe aqui o seu
              e-mail:
            </MessageFeedbackStyle>
          </BoxMessageFeedback>
          <BoxInput isMobileView={isMobileView}>
            <span className="box-input_warning">
              Ao cadastrar seu e-mail, você autoriza a BeCapital a enviar
              conteúdos que a nossa equipe considere relevantes para o seu
              perfil.
            </span>
            <Input
              state={inputValue}
              setState={checkValidEmailOnInputChange}
              type="email"
              setIsActiveInput={setIsActiveInput}
              style={{
                paddingBottom: 10,
              }}
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
            Para receber o resultado completo da sua carteira, deixe aqui seu
            e-mail e whatsapp:
          </MessageFeedbackStyle>

          <InputContainer>
            <span>
              Ao cadastrar o e-mail, você autoriza que a BeCapital faça envio de
              conteúdos que a nossa equipe avalie como interessantes para o seu
              perfil.
            </span>
            <BoxInput isMobileView={isMobileView}>
              <Input
                state={inputValue}
                setState={checkValidEmailOnInputChange}
                type="email"
                setIsActiveInput={setIsActiveInput}
                style={{
                  paddingBottom: 10,
                }}
              />
              {!validEmail && (
                <ErrorInformation>Digite um e-mail válido!</ErrorInformation>
              )}
            </BoxInput>
            <BoxButton>
              <Button
                ripple
                variant="beorange"
                glow
                onClick={() => handleOnClink(inputValue)}
              >
                Enviar <EmailIcon />
              </Button>
            </BoxButton>
          </InputContainer>
        </Body>
      </Container>
    );
  };

  return renderMobileOrDesktop();
};

export default StepSeven;
