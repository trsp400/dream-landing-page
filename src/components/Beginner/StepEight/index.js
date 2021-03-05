import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import { createResultObject } from '../../../utils/handleResultObject';

const StepEight = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const {
    currentStep,
    result: { email },
  } = store;

  const [inputValue, setInputValue] = useState(email);
  const [validEmail, setValidEmail] = useState(true);

  const storeObj = {
    objectiveCost: 'R$ 1.000.000,00',
    period: '10',
    yearOrMonth: 'anos',
    currentInvestments: 'R$ 300.000,00',
    monthlySupport: 'R$ 1.500,00',
  };

  const period = parseInt(storeObj.period);
  const yearOrMonth = storeObj.yearOrMonth;
  const monthlySupport = parseFloat(
    storeObj.monthlySupport
      .replace('R$ ', '')
      .replace(/\./g, '')
      .replace(',', '.'),
  );
  const currentInvestments = parseFloat(
    storeObj.currentInvestments
      .replace('R$ ', '')
      .replace(/\./g, '')
      .replace(',', '.'),
  );
  const objectiveCost = parseFloat(
    storeObj.objectiveCost
      .replace('R$ ', '')
      .replace(/\./g, '')
      .replace(',', '.'),
  );

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          result: {
            email: inputValue,
          },
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  const handleDispatchResultState = () => {
    const resultObject = createResultObject(
      period,
      yearOrMonth,
      monthlySupport,
      currentInvestments,
      objectiveCost,
      inputValue,
    );

    dispatch(
      changeFormState({
        ...store,
        result: {
          ...resultObject,
        },
      }),
    );
  };

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
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(7)}>
        {' '}
        step anterior
      </button>
      <br />

      <br />
      <br />
      <span>Email: </span>
      <Input
        state={inputValue}
        setState={checkValidEmailOnInputChange}
        type="email"
      />
      {!validEmail ? (
        <span className="email-error body__four">Digite um e-mail válido!</span>
      ) : null}

      <button type="button" onClick={() => handleOnClink(inputValue)}>
        OK
      </button>
    </div>
  );
};

export default StepEight;
