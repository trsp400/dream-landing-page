/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListDecicion from '../../CustomComponents/ListDecision';

import { changeFormState } from '../../../redux/dream_machine/actions';

const options = [
  'Aumentar para R$ 1.200 no fim do seu ciclo de investimento, sem eventuais riscos.',
  'Ter a possibilidade de aumentar para R$ 1.500 no fim do seu ciclo, com um pequeno risco.',
  'Aumentar para R$ 1.200 no fim do seu ciclo de investimento, sem eventuais riscos.',
];

const StepSix = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, decision } = store;

  const [inputValue, setInputvalue] = useState(options.indexOf(decision));

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          decision: options[inputValue],
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
      <span>Se você investisse R$ 1.000, qual seria a sua preferência?</span>

      <ListDecicion
        options={options}
        state={inputValue}
        setState={setInputvalue}
      />
    </div>
  );
};

export default StepSix;
