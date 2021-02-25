import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep } = store;

  const handleDispatch = useCallback(
    (event, step, property, value) => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          stepTwo: {
            ...store.stepTwo,
            [property]: value,
          },
        }),
      );
    },
    [dispatch, store],
  );

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch('', 1)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch('', 3)}>
        {' '}
        Proximo step
      </button>
      <Input />
    </div>
  );
};

export default StepTwo;
