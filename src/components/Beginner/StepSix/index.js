/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

const StepSix = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, decision } = store;

  const [inputValue, setInputvalue] = useState(decision);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          decision: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(5)}>
        {' '}
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(7)}>
        {' '}
        Proximo step
      </button>

      <br />
      <br />
      <span>Se voce tivesse 1000...</span>

      <select
        name="decision"
        value={inputValue}
        onChange={event => setInputvalue(event.target.value)}
      >
        <option value="1200">R$1200</option>
        <option value="1500">R$1500</option>
        <option value="2000">R$2000</option>
      </select>
    </div>
  );
};

export default StepSix;
