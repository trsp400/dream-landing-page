import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import  Modal from '../../CustomComponents/Modal'

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

import { Container,Footer, BodyStyled, HeaderStyled, ModalStyled } from './styles';

const labelSize = 8.8;
const iconSize = 40

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, path, objective } = store;

  const [inputValue, setInputValue] = useState(
    typeof objective === 'string' && objective,
  );
  const [arrayValues, setArrayValues] = useState(
    typeof objective === 'object' ? objective : null,
  );
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleDispatch = useCallback(
    step => {
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

  const handleCardClick = (event, label) => {
    console.log(label)

    setArrayValues([label]);
    return setInputValue('');
  };

  const handleInputChange = value => {
    setArrayValues(null);

    setInputValue(value);
  };

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
    <>
    <Container>
      <MessageFeedback strong="lighter" animationSpeed={3000}>
        Olá, vamos começar ?
      </MessageFeedback>

      <MessageFeedback strong="bold" animationSpeed={3000} animationDelay={1000}>
        Qual o seu objetivo de vida?
      </MessageFeedback>

      <IconGallery onClick={handleCardClick} arrayValues={arrayValues}>
        <Row>
          <Card
            backgroundColor="#EA5E45"
            icon={<WeddingIcon />}
            iconSize={iconSize}
            label="CASAMENTO"
            labelColor="#FFF"
            labelSize={labelSize}
          />
          <Card
            backgroundColor="#EA5E45"
            icon={<HouseIcon />}
            iconSize={iconSize}
            label="CASA"
            labelColor="#FFF"
            labelSize={labelSize}
          />
        </Row>
        <Row>
          <Card
            backgroundColor="#EA5E45"
            icon={<BeachIcon />}
            iconSize={iconSize}
            label="APOSENTADORIA"
            labelColor="#FFF"
            labelSize={labelSize}
          />
          <Card
            backgroundColor="#EA5E45"
            icon={<WorldIcon />}
            iconSize={iconSize}
            label="INTERCÂMBIO"
            labelColor="#FFF"
            labelSize={labelSize}
          />
        </Row>

        <Row>
          <Card
            backgroundColor="#EA5E45"
            icon={<CarIcon />}
            iconSize={iconSize}
            label="AUTOMÓVEL"
            labelColor="#FFF"
            labelSize={labelSize}
          />
          <Card
            backgroundColor="#EA5E45"
            icon={<MoneyIcon />}
            iconSize={iconSize}
            label="INDEPENDÊNCIA FINANCEIRA"
            labelColor="#FFF"
            labelSize={labelSize}
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
    <Modal
      state={isVisibleModal}
    >
      <span>OLÁ</span>
    </Modal>
    </>
  );
};

export default StepOne;
