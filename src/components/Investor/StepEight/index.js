import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepEight = () => {
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
    [dispatch, store],
  );

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
      <Input state={inputValue} setState={setInputValue} type="text" />

      <button
        type="button"
        onClick={() => {
          dispatch(
            changeFormState({
              ...store,
              currentStep: null,
            }),
          );
          navigate('/resultado');
        }}
      >
        OK
      </button>
    </div>
  );
};

export default StepEight;
