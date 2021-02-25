import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

const StepTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, objectiveCost } = store;

  const [inputValue] = useState(objectiveCost);
  const inputRef = useRef(null);

  const handleDispatch = useCallback(
    step => {
      console.log(step);
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          objectiveCost: inputRef?.current?.value,
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
      <button type="button" onClick={() => handleDispatch(1)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(3)}>
        {' '}
        Proximo step
      </button>
      <br />
      <span>Qual o valor do seu objetivo?</span>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default StepTwo;
