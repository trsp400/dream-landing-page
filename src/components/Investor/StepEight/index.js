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
import MessageFeedback from '../../CustomComponents/MessageFeedback';

import { Footer as ModalFooter } from '../../CustomComponents/Modal';

import { parseCurrencyFloat, parseStringInt } from '../../../utils/parseValues';
import {
  Container,
  Body,
  Footer,
  BodyStyled,
  HeaderStyled,
  ModalStyled,
} from './styles';

const StepEight = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { investmentsPlacement, desiredInvestmentsPlacement, result } = store;

  const email = result?.email || '';
  const yearlyAverageArray = result?.yearlyAverageArray || [];
  const resultSuccess = result?.resultSuccess || false;

  const [inputValue, setInputValue] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [requestLoading, setRequestLoading] = useState(false);
  const [resultModalFailure, setResultModalFailure] = useState(false);

  const period = parseStringInt(store.period);
  const yearOrMonth = store.yearOrMonth;
  const monthlySupport = parseCurrencyFloat(store.monthlySupport);
  const currentInvestments = parseCurrencyFloat(store.currentInvestments);
  const objectiveCost = parseCurrencyFloat(store.objectiveCost);

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
      : (setResultModalFailure(true), setRequestLoading(false));
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

  const resetStore = useCallback(() => {
    dispatch(
      changeFormState({
        ...store,
        currentStep: 0,
        resultSuccess: null,
        result: {
          monthlyRate: 0,
          annualRate: 0,
          riskProfile: '',
          email: '',
          yearlyAverageArray: [],
        },
        path: '',
        objective: null,
        objectiveCost: null,
        period: null,
        yearOrMonth: 'anos',
        monthlySupport: null,
        currentInvestments: null,
        decision: null,
        monthlyLifeCost: null,
        monthlyIncome: null,
        investmentsPlacement: [],
        desiredInvestmentsPlacement: [],
        otherInvestments: null,
        currentAssets: [],
      }),
    );
  }, [dispatch, store]);

  useEffect(() => {
    if (yearlyAverageArray?.length) {
      navigate('/resultado');
    }
  }, [yearlyAverageArray]);

  useEffect(() => {
    if (resultSuccess === null) {
      setResultModalFailure(true);
      setRequestLoading(false);
    }
  }, [resultSuccess]);

  return requestLoading ? (
    <Loading />
  ) : resultModalFailure ? (
    <ModalStyled
      visible={resultModalFailure}
      setVisible={setResultModalFailure}
      contentClassName="custom-content"
      dialogClassName="custom-dialog"
    >
      <HeaderStyled closeButton />

      <BodyStyled>
        O valor do seu sonho deve ser maior do que o valor a qual você já tem, e
        maior do que o valor que você pode investir mensalmente. Por favor,
        clique no botão abaixo para recomeçar a calcular seu sonho!
      </BodyStyled>
      <ModalFooter>
        <Button style={{ width: '100%' }} onClick={() => resetStore()}>
          RECOMEÇAR
        </Button>
      </ModalFooter>
    </ModalStyled>
  ) : (
    <Container>
      <Body>
        <MessageFeedback strong="normal">
          Para receber o <strong>resultado completo</strong> do seu perfil,
          deixei aqui o seu e-mail:
        </MessageFeedback>

        <Input
          state={inputValue}
          setState={checkValidEmailOnInputChange}
          type="email"
        />

        {!validEmail ? (
          <span style={{ color: 'red' }}>Digite um e-mail válido!</span>
        ) : null}

        <span style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          ac lorem et vulputate. Praesent dapibus, augue ut euismod mattis,
          massa leo tempus erat, et aliquam nulla turpis sed nisi. Praesent id
          ipsum est. Integer posuere interdum eros. Nam nec aliquet ipsum, at
          sodales elit. Phasellus eget enim mi.
        </span>
      </Body>

      <Footer>
        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleOnClink(inputValue)}
          style={{
            width: '100%',
          }}
        >
          OK
        </Button>
      </Footer>
      {requestLoading && <Loading size="5" />}
    </Container>
  );
};

export default StepEight;
