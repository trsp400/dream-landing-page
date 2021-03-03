/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

import Input from '../../CustomComponents/Input';

const StepTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, desiredInvestmentsPlacement, otherInvestments } = store;

  const [inputValue, setInputValue] = useState(desiredInvestmentsPlacement);
  const [otherInvestmentsInput, setOtherInvestmentsInput] = useState(
    otherInvestments,
  );

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          desiredInvestmentsPlacement: inputValue,
          otherInvestments: otherInvestmentsInput,
        }),
      );
    },
    [dispatch, store, inputValue, otherInvestmentsInput],
  );

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(1)}>
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(3)}>
        Proximo step
      </button>
      <br />
      <span>onde voce deseja investir: </span>

      <select
        name="decision"
        value={inputValue}
        onChange={event => {
          if (inputValue.includes(event.target.value)) {
            return setInputValue(
              inputValue.filter(value => value !== event.target.value),
            );
          }

          return setInputValue([...inputValue, event.target.value]);
        }}
        multiple
      >
        <option value="Renda Fixa">Renda Fixa</option>
        <option value="COE">COE</option>
        <option value="Renda Variável">Renda Variável</option>
        <option value="Investimento Externo">Investimento Externo</option>
        <option value="Fundos de Investimentos">Fundos de Investimentos</option>
        <option value="Criptomoedas">Criptomoedas</option>
      </select>

      <br />
      <span>Outro: </span>
      <Input
        state={otherInvestmentsInput}
        setState={setOtherInvestmentsInput}
        type="text"
      />
    </div>
  );
};

export default StepTwo;
