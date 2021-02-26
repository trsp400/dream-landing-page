import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);

  const { currentStep, path, objective } = store;

  const [inputValue] = useState(objective);
  const inputRef = useRef(null);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          objective: inputRef?.current?.value,
        }),
      );
    },
    [dispatch, store, inputRef],
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

  useEffect(() => {
    inputRef.current.value = inputValue;
  }, [inputValue]);

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

      <span>Qual seu objetivo?</span>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default StepOne;
