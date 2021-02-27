/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

import Gallery, { Card, Row } from '../../Gallery';

// import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../../../assets/icons/accounting-coins.svg';
import { Container } from 'react-bootstrap';

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { isMobileView } = useSelector(({ settings }) => settings);

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

  const handleCardClick = useCallback((event, clickedCardValue) => {
    console.log(clickedCardValue);
    if (inputValue.includes(clickedCardValue)) {
      return setInputValue(
        inputValue.filter(value => value !== clickedCardValue),
      );
    }

    return setInputValue([...inputValue, clickedCardValue]);
  }, []);

  console.log(inputValue);

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
      {/* <h2>{title}</h2>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => resetStore()}>
        step anterior
      </button> */}

      {isMobileView ? (
        <Gallery onClick={handleCardClick} store={store}>
          <Row>
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={40}
              label="Banco Financeiro"
              labelColor="#FFF"
            />
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={40}
              label="Banco Comercial"
              labelColor="#FFF"
            />
          </Row>
          <Row>
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={40}
              label="Corretora"
              labelColor="#FFF"
            />
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={40}
              label="Exchange"
              labelColor="#FFF"
            />
          </Row>
          <Row>
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={40}
              label="Assets"
              labelColor="#FFF"
            />
          </Row>
        </Gallery>
      ) : (
        <Gallery onClick={handleCardClick} store={store}>
          <Row>
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={50}
              label="Banco Financeiro"
              labelColor="#FFF"
            />
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={50}
              label="Banco Comercial"
              labelColor="#FFF"
            />
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={50}
              label="Corretora"
              labelColor="#FFF"
            />
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={50}
              label="Exchange"
              labelColor="#FFF"
            />
            <Card
              backgroundColor="#EA5E45"
              icon={<Logo />}
              iconSize={50}
              label="Assets"
              labelColor="#FFF"
            />
          </Row>
        </Gallery>
      )}
    </Container>
    // <div>
    //   <h1>{title}</h1>
    // <h2>Step: {currentStep}</h2>
    // <button type="button" onClick={() => resetStore()}>
    //   step anterior
    // </button>
    //   <br />
    //   <button type="button" onClick={() => handleDispatch(2)}>
    //     Proximo step
    //   </button>

    //   <br />

    //   <span>onde voce ja investe: </span>

    //   <select
    //     name="decision"
    //     value={inputValue}
    //     onChange={event => {
    // if (inputValue.includes(event.target.value)) {
    //   return setInputValue(
    //     inputValue.filter(value => value !== event.target.value),
    //   );
    // }

    // return setInputValue([...inputValue, event.target.value]);
    //     }}
    //     multiple
    //   >
    //     <option value="Banco Comercial">Banco Comercial</option>
    //     <option value="Banco Financeiro">Banco Financeiro</option>
    //     <option value="Corretora">Corretora</option>
    //     <option value="Exchange">Exchange</option>
    //   </select>
    // </div>
  );
};

export default StepOne;
