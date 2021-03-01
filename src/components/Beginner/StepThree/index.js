/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

const listPeriods = {
  anos: 'Anos',
  meses: 'Meses',
};

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

      {Object.keys(listPeriods).map(item => (
        <button
          style={{
            backgroundColor: item === inputYearOrMonth ? 'orange' : 'blue',
          }}
          onClick={() => setInputYearOrMonth(item)}
          key={item}
        >
          {listPeriods[item]}
        </button>
      ))}

      <Input
        state={inputValue}
        setState={setInputValue}
        type="period"
        placeholder={listPeriods[inputYearOrMonth]}
      />
    </div>
  );
};

export default StepThree;
