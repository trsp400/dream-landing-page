import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import { sendDreamMachineResultToAPIRequest } from '../../../redux/dream_machine/actions';
import { createResultObject } from '../../../utils/handleResultObject';
import Input from '../../CustomComponents/Input';
import Loading from '../../CustomComponents/Loading';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, Body, Footer } from './styles';
import { parseCurrencyFloat, parseStringInt } from '../../../utils/parseValues';

const NotFound = () => <h1 style={{ color: '#fff' }}>Refaça o teste</h1>;

const StepEight = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const {
    investmentsPlacement,
    desiredInvestmentsPlacement,
    resultSuccess,
    result: { email, yearlyAverageArray },
  } = store;

  const [inputValue, setInputValue] = useState(email);
  const [validEmail, setValidEmail] = useState(true);
  const [requestLoading, setRequestLoading] = useState(false);
  const [resultFailure, setResultFailure] = useState(false);

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

    if (!inputValue) return notify('Por favor, digite seu e-mail!');

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
      : (setResultFailure(true), setRequestLoading(false));
  });

  function emailIsValid(dataEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataEmail);
  }

  const handleOnClink = email => {
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

  return requestLoading ? (
    <Loading />
  ) : resultFailure ? (
    <NotFound />
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
    </Container>
  );
};

export default StepEight;
