import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

const StepThree = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, period, yearOrMonth } = store;

  const [inputValue, setInputValue] = useState(period);
  const [inputYearOrMonth, setInputYearOrMonth] = useState(yearOrMonth);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          period: inputValue,
          yearOrMonth: inputYearOrMonth,
        }),
      );
    },
    [dispatch, store, inputValue, inputYearOrMonth],
  );

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(2)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(4)}>
        {' '}
        Proximo step
      </button>

      <br />
      <span>em quanto tempo?</span>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default StepThree;
