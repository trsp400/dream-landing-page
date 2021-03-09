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
import OtherIcon from '../../../assets/icons/other-icon.svg';
import LeftIcon from '../../../assets/icons/left-icon.svg'

import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import IconGallery, { Card, Row } from '../../CustomComponents/IconGallery';

import { Container,Footer, BodyModalStyled, HeaderModalStyled, ModalStyled, MessageFeedbackStyle,   } from './styles';

const labelSize = 8.8;
const iconSize = 38

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
  const [isVisibleModal, setIsVisibleModal] = useState(false)

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

  const handleCardClick = (event, label) => {

    if(label.toLowerCase() !== "outros") {
      setArrayValues([label])
      return
    }
    setIsVisibleModal(!isVisibleModal);


    handleDispatch(2)
  };

  const handleInputChange = () => {

    setArrayValues(
      arrayValue => {
        arrayValue.shift()
        arrayValue.push(inputValue.toUpperCase())
        handleDispatch(2)
      }
    )


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
      <MessageFeedbackStyle placing="above" animationSpeed={3000}>
        Olá, vamos começar?
      </MessageFeedbackStyle>

      <MessageFeedbackStyle placing="bellow" animationSpeed={3000} animationDelay={1000}>
        Qual o seu objetivo de vida?
      </MessageFeedbackStyle>

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
        <Row>
        <Card
            backgroundColor="#EA5E45"
            icon={<OtherIcon />}
            iconSize={36}
            label="OUTROS"
            labelColor="#FFF"
            labelSize={labelSize}
          />
        </Row>
      </IconGallery>


    </Container>
    <ModalStyled
      state={isVisibleModal}
      setState={setIsVisibleModal}
      contentClassName="custom-content"
      dialogClassName="custom-dialog"
    >
      <HeaderModalStyled closeButton/>
      <BodyModalStyled>
        <div className="content-body">Descreva abaixo qual outro objetivo de vida.</div>
        <Input state={inputValue} setState={setInputValue} type="text" />
        <Footer>
          <Button
            ripple
            variant="beblue"
            glow
            onClick={() => setIsVisibleModal(!isVisibleModal)}
            style={{
              width: '30%',
            }}
          >
            Voltar
          </Button>
          <Button
            ripple
            variant="beorange"
            glow
            onClick={() => handleInputChange()}
            style={{
              width: '30%',
            }}
          >
            OK
          </Button>
        </Footer>
        </BodyModalStyled>
    </ModalStyled>
    </>
  );
};

export default StepOne;
