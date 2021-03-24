import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Modal from '../../CustomComponents/Modal';

import WeddingIcon from '../../../assets/icons/wedding-cake.svg';
import HouseIcon from '../../../assets/icons/house-chimney-2.svg';
import BeachIcon from '../../../assets/icons/beach-parasol-water.svg';
import WorldIcon from '../../../assets/icons/travel-luggage-1.svg';
import CarIcon from '../../../assets/icons/vintage-car-6.svg';
import MoneyIcon from '../../../assets/icons/accounting-bills.svg';
import OtherIcon from '../../../assets/icons/other-icon.svg';
import LeftIcon from '../../../assets/icons/left-icon.svg';

import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import IconGallery, { Card, Row } from '../../CustomComponents/IconGallery';

import {
  Container,
  Footer,
  BodyModalStyled,
  HeaderModalStyled,
  ModalStyled,
  MessageFeedbackStyle,
  DesktopBody,
  DesktopGalleryContainer,
} from './styles';

const labelSize = 8.8;
const iconSize = 38;

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

  const { currentStep, path, objective } = store;

  const [inputValue, setInputValue] = useState('');
  const [objectiveValue, setObjectiveValue] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);

  useEffect(() => {
    (function () {
      const mockObjectivesArrayDefault = [
        'CASAMENTO',
        'CASA',
        'APOSENTADORIA',
        'INTERCÂMBIO',
        'AUTOMÓVEL',
        'INDEPENDÊNCIA FINANCEIRA',
      ];

      const indexStandardObjective = mockObjectivesArrayDefault.findIndex(
        defaultObjective => defaultObjective === objective,
      );

      if (indexStandardObjective < 0) {
        setInputValue(objective);
      }
    })();
  }, [objective]);

  const handleDispatch = useCallback(
    (objectiveValue, step, direction) => {
      if (!objectiveValue) return notify('Por favor, selecione uma objetivo!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          objective: objectiveValue,
        }),
      );
    },
    [dispatch, store, objectiveValue, inputValue],
  );

  const handleCardClick = async (event, label) => {
    if (label.toLowerCase() !== 'outros') {
      insertValueInObjective('default', label);
      return;
    }

    setObjectiveValue(label);
    setIsVisibleModal(!isVisibleModal);
  };

  const insertValueInObjective = async (argElement, value) => {
    const setValueInStateObjective = {
      default: () => {
        setObjectiveValue(value);
        handleDispatch(value, 2, 'next');
      },
      others: () => {
        if(!value) return notify('Por favor, digite um objetivo!');


        const valueUpperCase = value.toUpperCase();
        handleDispatch(valueUpperCase, 2, 'next');
      },
    };

    const resolvValueInStateObjective = setValueInStateObjective[argElement];
    resolvValueInStateObjective();
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
        decision: {
          first: '',
          second: '',
          third: '',
        },
        monthlyLifeCost: null,
        monthlyIncome: null,
        investmentsPlacement: [],
        desiredInvestmentsPlacement: [],
        otherInvestments: null,
        currentAssets: [],
      }),
    );
  }, [dispatch, store]);

  return isMobileView ? (
    <>
      <Container isMobileView={isMobileView}>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={3000}
          animationDelay={900}
          isMobileView={isMobileView}
        >
          Olá, vamos começar?
        </MessageFeedbackStyle>

        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={3000}
          animationDelay={1500}
          isMobileView={isMobileView}
        >
          Qual o seu objetivo de vida?
        </MessageFeedbackStyle>

        <IconGallery onClick={handleCardClick} objectiveValue={objectiveValue}>
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
        visible={isVisibleModal}
        setVisible={setIsVisibleModal}
        contentClassName="custom-content"
        dialogClassName="custom-dialog"
      >
        <HeaderModalStyled closeButton />
        <BodyModalStyled>
          <div className="content-body">
            Descreva abaixo qual outro objetivo de vida.
          </div>
          <div className="boxInput">
            <Input state={inputValue} setState={setInputValue} type="text" />
          </div>
          <Footer>
            <Button
              ripple
              variant="beblue"
              glow
              onClick={() => setIsVisibleModal(!isVisibleModal)}
            >
              Voltar
            </Button>
            <Button
              ripple
              variant="beorange"
              glow
              onClick={() => insertValueInObjective('others', inputValue)}
            >
              OK
            </Button>
          </Footer>
        </BodyModalStyled>
      </ModalStyled>
    </>
  ) : (
    <Container>
      <div>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={3000}
          animationDelay={900}
          isMobileView={isMobileView}
        >
          Olá, vamos começar?
        </MessageFeedbackStyle>

        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={3000}
          animationDelay={1500}
          isMobileView={isMobileView}
        >
          Qual o seu objetivo de vida?
        </MessageFeedbackStyle>
        <DesktopGalleryContainer>
          <IconGallery
            onClick={handleCardClick}
            objectiveValue={objectiveValue}
          >
            <Row>
              <Card
                backgroundColor="#EA5E45"
                icon={<WeddingIcon />}
                iconSize={70}
                label="CASAMENTO"
                labelColor="#FFF"
                labelSize={15}
              />
              <Card
                backgroundColor="#EA5E45"
                icon={<HouseIcon />}
                iconSize={70}
                label="CASA"
                labelColor="#FFF"
                labelSize={15}
              />
              <Card
                backgroundColor="#EA5E45"
                icon={<BeachIcon />}
                iconSize={70}
                label="APOSENTADORIA"
                labelColor="#FFF"
                labelSize={15}
              />
              <Card
                backgroundColor="#EA5E45"
                icon={<WorldIcon />}
                iconSize={70}
                label="INTERCÂMBIO"
                labelColor="#FFF"
                labelSize={15}
              />
              <Card
                backgroundColor="#EA5E45"
                icon={<CarIcon />}
                iconSize={70}
                label="AUTOMÓVEL"
                labelColor="#FFF"
                labelSize={15}
              />
              <Card
                backgroundColor="#EA5E45"
                icon={<MoneyIcon />}
                iconSize={70}
                label="INDEPENDÊNCIA FINANCEIRA"
                labelColor="#FFF"
                labelSize={15}
              />
              <Card
                backgroundColor="#EA5E45"
                icon={<OtherIcon />}
                iconSize={70}
                label="OUTROS"
                labelColor="#FFF"
                labelSize={15}
              />
            </Row>
          </IconGallery>
        </DesktopGalleryContainer>
      </div>
      <ModalStyled
        visible={isVisibleModal}
        setVisible={setIsVisibleModal}
        contentClassName="custom-content"
        dialogClassName="custom-dialog"
      >
        <HeaderModalStyled closeButton />
        <BodyModalStyled>
          <div className="content-body">
            Descreva abaixo qual outro objetivo de vida.
          </div>
          <div className="body-modal__input_desktop">
            <Input
              state={inputValue}
              setState={setInputValue}
              type="text"
              setIsActiveInput={setIsActiveInput}
            />
          </div>

          <Footer>
            <Button
              ripple
              variant="beblue"
              glow
              onClick={() => {
                setIsVisibleModal(!isVisibleModal);
                setObjectiveValue("");
                setInputValue("");
              }}
            >
              Voltar
            </Button>
            <Button
              ripple
              variant="beorange"
              glow
              onClick={() => insertValueInObjective('others', inputValue)}
            >
              OK
            </Button>
          </Footer>
        </BodyModalStyled>
      </ModalStyled>
    </Container>
  );
};

export default StepOne;
