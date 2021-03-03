import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, period } = store;

  const [inputValue, setInputValue] = useState(period);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          period: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(3)}>
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(5)}>
        Proximo step
      </button>

      <br />
      <span>em quanto tempo?</span>
      <Input
        state={inputValue}
        setState={setInputValue}
        type="number"
        placeholder="Tempo"
      />
    </div>
  );
};

export default StepFour;
