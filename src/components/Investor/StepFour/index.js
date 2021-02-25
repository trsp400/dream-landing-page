import React, { useCallback, useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

const StepFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, period } = store;

  const [inputValue] = useState(period);
  const inputRef = useRef(null);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          period: inputRef?.current?.value,
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
      <button type="button" onClick={() => handleDispatch(3)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(5)}>
        {' '}
        Proximo step
      </button>

      <br />
      <span>em quanto tempo?</span>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default StepFour;
