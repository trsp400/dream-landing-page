import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../../CustomComponents/Input';
import { changeFormState } from '../../../redux/dream_machine/actions';

const StepFive = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, currentInvestments } = store;

  const [inputValue, setInputValue] = useState(currentInvestments);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          currentInvestments: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

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
      <span>Quanto voce pode investir hoje?</span>
      <Input state={inputValue} setState={setInputValue} type="currency" />
    </div>
  );
};

export default StepFive;
