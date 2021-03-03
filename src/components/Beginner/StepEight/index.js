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
    currentInvestments: 'R$ 3.000,55',
    monthlySupport: 'R$ 2.000,79',
    objectiveCost: 'R$ 40.000,87',
    period: '10',
    yearOrMonth: 'anos',
  };

  const period = parseInt(storeObj.period);
  const yearOrMonth = storeObj.yearOrMonth;
  const monthlySupport = parseFloat(
    storeObj.monthlySupport
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.'),
  );
  const currentInvestments = parseFloat(
    storeObj.currentInvestments
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.'),
  );
  const objectiveCost = parseFloat(
    storeObj.objectiveCost
      .replace('R$ ', '')
      .replace('.', '')
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
    console.log(period, monthlySupport, currentInvestments, objectiveCost);

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
    // dispatch(
    //   sendDreamMachineResultToAPIRequest({
    //     ...store,
    //     result: {
    //       ...resultObject,
    //     },
    //   }),
    // );
  };

  function emailIsValid(dataEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataEmail);
  }

  const handleOnClink = email => {
    const isValidEmail = emailIsValid(email);

    if (isValidEmail) {
      // setRequestLoading(true);
      handleDispatchResultState();

      // handleDispatch(null);
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

  useEffect(() => {
    console.log(store);
  }, [store]);

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
