import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepThree = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, objectiveCost } = store;

  const [inputValue, setInputValue] = useState(objectiveCost);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          objectiveCost: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(2)}>
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(4)}>
        Proximo step
      </button>
      <br />
      <span>De quanto voce precisa?</span>
      <Input state={inputValue} setState={setInputValue} type="currency" />
    </div>
  );
};

export default StepThree;
