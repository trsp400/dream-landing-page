/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const {
    currentStep,
    result: { email },
  } = store;

  const [inputValue, setInputValue] = useState(email);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          result: {
            ...store?.result,
            email: inputValue,
          },
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  const handleOnClink = params => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const verify = re.test(String(params).toLowerCase());

    verify && navigate('/resultado');
  };

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(6)}>
        {' '}
        step anterior
      </button>
      <br />

      <br />
      <br />
      <span>Email: </span>
      <Input state={inputValue} setState={setInputValue} type="email" />

      <button type="button" onClick={() => handleOnClink(inputValue)}>
        OK
      </button>
    </div>
  );
};

export default StepSeven;
