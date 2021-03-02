/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

import CheckBox from '../../CustomComponents/CheckBox';
import SvgImg from '../../../assets/icons/checkbox-icon.svg';

const options = [
  'Banco Comercial',
  'Banco Financeiro',
  'Corretora',
  'Exchange',
];
import { Container } from 'react-bootstrap';

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);

  const { currentStep, path, investmentsPlacement } = store;

  const [arrayValues, setArrayValues] = useState(investmentsPlacement);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          investmentsPlacement: arrayValues,
        }),
      );
    },
    [dispatch, store, arrayValues],
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
    <Container>
      <h2>{title}</h2>
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

      <CheckBox
        options={options}
        state={arrayValues}
        setState={setArrayValues}
        image={<SvgImg />}
      />
    </Container>
  );
};

export default StepOne;
