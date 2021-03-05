/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepFive = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, monthlySupport } = store;

  const [inputValue, setInputValue] = useState(monthlySupport);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          monthlySupport:
            parseFloat(
              inputValue
                ?.replace(/R$/gi, '')
                .replace(/\./gi, '')
                .replace(/,/gi, '.'),
            ) || inputValue,
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
      <span>Quanto voce pode investir por mes?</span>
      <Input state={inputValue} setState={setInputValue} type="currency" />
    </div>
  );
};

export default StepFive;
