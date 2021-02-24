import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, path } = store;

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

  const title = path === 'beginner' ? 'Iniciante' : 'Já é investidor';

  return (
    <div>
      <h1>{title}</h1>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch('', 0)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch('', 2)}>
        {' '}
        Proximo step
      </button>
    </div>
  );
};

export default StepOne;
