import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import { changeFormState } from '../../../redux/dream_machine/actions';

const StepEight = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const {
    currentStep,
    result: { email },
  } = store;

  const [inputValue] = useState(email);
  const inputRef = useRef(null);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          result: {
            ...store?.result,
            email: inputRef?.current?.value,
          },
        }),
      );
    },
    [dispatch, store],
  );

  useEffect(() => {
    inputRef.current.value = inputValue;
  }, [inputValue]);

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
      <input type="text" ref={inputRef} />

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
