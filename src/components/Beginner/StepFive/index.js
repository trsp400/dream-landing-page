import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepFive = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, monthlySupport } = store;

  const [inputValue] = useState(monthlySupport);
  const inputRef = useRef(null);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          monthlySupport: inputRef?.current?.value,
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
      <button type="button" onClick={() => handleDispatch(4)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(6)}>
        {' '}
        Proximo step
      </button>

      <br />
      <br />
      <span>Quanto voce pode investir por mes?</span>
      {/* <input type="text" ref={inputRef} /> */}
      <Input ref={inputRef} />
    </div>
  );
};

export default StepFive;
