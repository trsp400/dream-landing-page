import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

const StepEight = () => {
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
      <button type="button" onClick={() => handleDispatch('', 7)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch('', 3)}>
        {' '}
        Proximo step
      </button>
    </div>
  );
};

export default StepEight;
