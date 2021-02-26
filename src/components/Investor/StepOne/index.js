/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

import { Select, Option } from '../../CustomComponents/Select';

const options = [
  'Banco Comercial',
  'Banco Financeiro',
  'Corretora',
  'Exchange',
];

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);

  const { currentStep, path, investmentsPlacement } = store;

  const [inputValue, setInputValue] = useState(investmentsPlacement);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          investmentsPlacement: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  const resetStore = useCallback(() => {
    dispatch(
      changeFormState({
        ...store,
        currentStep: null,
        resultSuccess: null,
        result: {
          monthlyRate: 0,
          annualRate: 0,
          riskProfile: '',
          email: '',
          yearlyAverageArray: [],
        },
        path: '',
        objective: null,
        objectiveCost: null,
        period: null,
        yearOrMonth: 'anos',
        monthlySupport: null,
        currentInvestments: null,
        decision: null,
        monthlyLifeCost: null,
        monthlyIncome: null,
        investmentsPlacement: [],
        desiredInvestmentsPlacement: [],
        otherInvestments: null,
        currentAssets: [],
      }),
    );
  }, [dispatch, store]);

  const title = path === 'beginner' ? 'Iniciante' : 'Já é investidor';

  return (
    <div>
      <h1>{title}</h1>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => resetStore()}>
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(2)}>
        Proximo step
      </button>

      <br />

      <span>onde voce ja investe: </span>

      <Select
        name="decision"
        inputValue={inputValue}
        multiple
        setInputValue={setInputValue}
      >
        {options.map(o => (
          <Option value={o}> {o} </Option>
        ))}
      </Select>
    </div>
  );
};

export default StepOne;
