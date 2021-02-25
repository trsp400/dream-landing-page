import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const StepFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep } = store;

  const handleDispatch = useCallback(
    (event, step, property, value) => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          [property]: value,
        }),
      );
    },
    [dispatch, store],
  );

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch('', 3)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch('', 5)}>
        {' '}
        Proximo step
      </button>
      <Input />
    </div>
  );
};

export default StepFour;
