/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepTwo = () => {
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
          objectiveCost:
            parseFloat(
              inputValue
                ?.replace(/R$/gi, '')
                .replace(/./gi, '')
                .replace(/,/gi, '.'),
            ) || inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <div style={{ backgroundColor: 'blue' }}>
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
      <Input state={inputValue} setState={setInputValue} type="currency" />
    </div>
  );
};

export default StepTwo;
