import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

import WeddingIcon from '../../../assets/icons/wedding-cake.svg';
import HouseIcon from '../../../assets/icons/house-chimney-2.svg';
import BeachIcon from '../../../assets/icons/beach-parasol-water.svg';
import WorldIcon from '../../../assets/icons/travel-luggage-1.svg';
import CarIcon from '../../../assets/icons/vintage-car-6.svg';
import MoneyIcon from '../../../assets/icons/accounting-bills.svg';

import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import IconGallery, { Card, Row } from '../../CustomComponents/IconGallery';

import { Container, Footer } from './styles';

import toastConfig from '../../../utils/toastConfig';

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, path, objective } = store;

  const [inputValue, setInputValue] = useState(
    typeof objective === 'string' && objective,
  );
  const [arrayValues, setArrayValues] = useState(
    typeof objective === 'object' ? objective : null,
  );

  const handleDispatch = useCallback(
    step => {
      if (!inputValue && !arrayValues?.length)
        return notify('Por favor, selecione uma opção!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          objective: arrayValues || inputValue,
        }),
      );
    },
    [dispatch, store, arrayValues, inputValue],
  );

  const handleCardClick = useCallback((event, label) => {
    setArrayValues([label]);
    return setInputValue('');
  }, []);

  const handleInputChange = useCallback(value => {
    setArrayValues(null);

    setInputValue(value);
  }, []);

  const resetStore = useCallback(() => {
    dispatch(
      changeFormState({
        ...store,
        currentStep: 0,
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

  return (
    <Container>
      <MessageFeedback strong="lighter">Olá, vamos começar ?</MessageFeedback>

      <MessageFeedback strong="bold">
        Qual o seu objetivo de vida?
      </MessageFeedback>

      <IconGallery onClick={handleCardClick} arrayValues={arrayValues}>
        <Row>
          <Card
            backgroundColor="#EA5E45"
            icon={<WeddingIcon />}
            iconSize={50}
            label="CASAMENTO"
            labelColor="#FFF"
            labelSize={10}
          />
          <Card
            backgroundColor="#EA5E45"
            icon={<HouseIcon />}
            iconSize={50}
            label="CASA"
            labelColor="#FFF"
            labelSize={10}
          />
        </Row>
        <Row>
          <Card
            backgroundColor="#EA5E45"
            icon={<BeachIcon />}
            iconSize={50}
            label="APOSENTADORIA"
            labelColor="#FFF"
            labelSize={10}
          />
          <Card
            backgroundColor="#EA5E45"
            icon={<WorldIcon />}
            iconSize={50}
            label="INTERCÂMBIO"
            labelColor="#FFF"
            labelSize={10}
          />
        </Row>

        <Row>
          <Card
            backgroundColor="#EA5E45"
            icon={<CarIcon />}
            iconSize={50}
            label="AUTOMÓVEL"
            labelColor="#FFF"
            labelSize={10}
          />
          <Card
            backgroundColor="#EA5E45"
            icon={<MoneyIcon />}
            iconSize={50}
            label="INDEPENDÊNCIA FINANCEIRA"
            labelColor="#FFF"
            labelSize={10}
          />
        </Row>
      </IconGallery>

      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => resetStore()}
          style={{
            width: '30%',
          }}
        >
          {'<='}
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleDispatch(2)}
          style={{
            width: '30%',
          }}
        >
          OK
        </Button>

        <Input state={inputValue} setState={handleInputChange} type="text" />
      </Footer>
    </Container>
  );
};

export default StepOne;
