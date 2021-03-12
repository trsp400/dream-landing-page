import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import  Modal from '../../CustomComponents/Modal'

import SavingBankIcon from '../../../assets/icons/saving-bank-1.svg';
import SavingBagIcon from '../../../assets/icons/saving-bag-increase.svg';
import BrokerIcon from '../../../assets/icons/building-modern-2.svg';
import AssetsIcon from '../../../assets/icons/money-bag-dollar.svg';
import ExchangeIcon from '../../../assets/icons/accounting-coins-bill.svg';
import OtherIcon from '../../../assets/icons/other-icon.svg';
import LeftIcon from '../../../assets/icons/left-icon.svg'

import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import IconGallery, { Card, Row } from '../../CustomComponents/IconGallery';

import { Container,Footer, BodyModalStyled, HeaderModalStyled, ModalStyled, MessageFeedbackStyle } from './styles';

const labelSize = 8.8;
const iconSize = 38

import toastConfig from '../../../utils/toastConfig';
import { isNull } from 'lodash-es';

const StepOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, path, objective } = store;

  const [inputValue, setInputValue] = useState("");
  const [objectiveValue, setObjectiveValue] = useState("")
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  useEffect(() => {
    (function() {
      const mockObjectivesArrayDefault = ["CASAMENTO","CASA","APOSENTADORIA","INTERCÂMBIO","AUTOMÓVEL","INDEPENDÊNCIA FINANCEIRA"]

      const indexStandardObjective = mockObjectivesArrayDefault.findIndex(defaultObjective => defaultObjective === objective)

      if(indexStandardObjective < 0) {
        setInputValue(objective)
      }

    })()
  }, [objective])

  const handleDispatch = useCallback(

    (objectiveValue, step, direction) => {

      if (!objectiveValue)
        return notify('Por favor, selecione uma objetivo!');

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

    if(label.toLowerCase() !== "outros") {
      insertValueInObjective("default", label)
      return;
    }

    setObjectiveValue(label)
    setIsVisibleModal(!isVisibleModal);
  };



  const insertValueInObjective = async (argElement, value) => {

    const setValueInStateObjective = {
      default: () => {
       setObjectiveValue(value);
       handleDispatch(value, 2, "next")

      },
      others: () => {
        const valueUpperCase = value.toUpperCase()
        handleDispatch(valueUpperCase, 2, "next")
      }
    }

    const resolvValueInStateObjective = setValueInStateObjective[argElement]
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
      <MessageFeedbackStyle placing="above" animationSpeed={3000} animationDelay={900}>
        Olá, vamos começar?
      </MessageFeedbackStyle>

      <MessageFeedbackStyle placing="bellow" animationSpeed={3000} animationDelay={1500}>
        Qual o seu objetivo de vida?
      </MessageFeedbackStyle>

      <IconGallery onClick={handleCardClick} objectiveValue={objectiveValue}>
      <Row>
         <Card
            backgroundColor="#EA5E45"
            icon={<SavingBankIcon />}
            iconSize={iconSize}
            label="BANCO COMERCIAL"
            labelColor="#FFF"
            labelSize={labelSize}
          />
          <Card
            backgroundColor="#EA5E45"
            icon={<SavingBagIcon />}
            iconSize={iconSize}
            label="BANCO DE INVESTIMENTOS"
            labelColor="#FFF"
            labelSize={labelSize}
          />
        </Row>
        <Row>
          <Card
            backgroundColor="#EA5E45"
            icon={<BrokerIcon />}
            iconSize={iconSize}
            label="Corretora"
            labelColor="#FFF"
            labelSize={labelSize}
          />
          <Card
            backgroundColor="#EA5E45"
            icon={<AssetsIcon />}
            iconSize={iconSize}
            label="ASSETS"
            labelColor="#FFF"
            labelSize={labelSize}
          />
        </Row>
        <Row>
          <Card
            backgroundColor="#EA5E45"
            icon={<ExchangeIcon />}
            iconSize={iconSize}
            label="EXCHANGE"
            labelColor="#FFF"
            labelSize={labelSize}
          />
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
            onClick={() => insertValueInObjective("others", inputValue)}
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


// import React, { useCallback, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { changeFormState } from '../../../redux/dream_machine/actions';

// import SavingBankIcon from '../../../assets/icons/saving-bank-1.svg';
// import SavingBagIcon from '../../../assets/icons/saving-bag-increase.svg';
// import BrokerIcon from '../../../assets/icons/building-modern-2.svg';
// import AssetsIcon from '../../../assets/icons/money-bag-dollar.svg';
// import ExchangeIcon from '../../../assets/icons/accounting-coins-bill.svg';

// import Button from '../../CustomComponents/Button';

// import MessageFeedback from '../../CustomComponents/MessageFeedback';
// import IconGallery, { Card, Row } from '../../CustomComponents/IconGallery';

// import { Container, Footer } from './styles';

// const labelSize = 8.8;
// const iconSize = 40

// const StepOne = () => {
//   const dispatch = useDispatch();
//   const store = useSelector(({ dreamMachine }) => dreamMachine);
//   const { notify } = useSelector(({ settings }) => settings);

//   const { currentStep, investmentsPlacement } = store;

//   const [arrayValues, setArrayValues] = useState(investmentsPlacement);

//   const handleDispatch = useCallback(
//     (step, direction) => {
//       if (!arrayValues.length && step > currentStep)
//         return notify('Por favor, selecione uma opção!');
//       dispatch(
//         changeFormState({
//           ...store,
//           currentStep: step,
//           direction,
//           investmentsPlacement: arrayValues,
//         }),
//       );
//     },
//     [dispatch, store, arrayValues],
//   );

//   const resetStore = useCallback(() => {
//     dispatch(
//       changeFormState({
//         ...store,
//         currentStep: 0,
//         resultSuccess: null,
//         result: {
//           monthlyRate: 0,
//           annualRate: 0,
//           riskProfile: '',
//           email: '',
//           yearlyAverageArray: [],
//         },
//         path: '',
//         objective: null,
//         objectiveCost: null,
//         period: null,
//         yearOrMonth: 'anos',
//         monthlySupport: null,
//         currentInvestments: null,
//         decision: null,
//         monthlyLifeCost: null,
//         monthlyIncome: null,
//         investmentsPlacement: [],
//         desiredInvestmentsPlacement: [],
//         otherInvestments: null,
//         currentAssets: [],
//       }),
//     );
//   }, [dispatch, store]);

//   const handleCardClick = (event, label) => {
//     if (arrayValues.includes(label)) {
//       return setArrayValues(arrayValues.filter(value => value !== label));
//     }

//     return setArrayValues([...arrayValues, label]);
//   };

//   return (
//     <Container>
//       <MessageFeedback strong="lighter">Olá, vamos começar ?</MessageFeedback>

//       <MessageFeedback strong="bold">Onde você já investe?</MessageFeedback>

//       <IconGallery onClick={handleCardClick} arrayValues={arrayValues}>
//         <Row>
//           <Card
//             backgroundColor="#EA5E45"
//             icon={<SavingBankIcon />}
//             iconSize={iconSize}
//             label="BANCO COMERCIAL"
//             labelColor="#FFF"
//             labelSize={labelSize}
//           />
//           <Card
//             backgroundColor="#EA5E45"
//             icon={<SavingBagIcon />}
//             iconSize={iconSize}
//             label="BANCO DE INVESTIMENTOS"
//             labelColor="#FFF"
//             labelSize={labelSize}
//           />
//         </Row>
//         <Row>
//           <Card
//             backgroundColor="#EA5E45"
//             icon={<BrokerIcon />}
//             iconSize={iconSize}
//             label="Corretora"
//             labelColor="#FFF"
//             labelSize={labelSize}
//           />
//           <Card
//             backgroundColor="#EA5E45"
//             icon={<AssetsIcon />}
//             iconSize={iconSize}
//             label="ASSETS"
//             labelColor="#FFF"
//             labelSize={labelSize}
//           />
//         </Row>
//         <Row>
//           <Card
//             backgroundColor="#EA5E45"
//             icon={<ExchangeIcon />}
//             iconSize={iconSize}
//             label="EXCHANGE"
//             labelColor="#FFF"
//             labelSize={labelSize}
//           />
//         </Row>
//       </IconGallery>

//       <Footer>
//         <Button
//           ripple
//           variant="beblue"
//           glow
//           onClick={() => resetStore()}
//           style={{
//             width: '30%',
//           }}
//         >
//           {'<='}
//         </Button>

//         <Button
//           ripple
//           variant="beorange"
//           glow
//           onClick={() => handleDispatch(2, 'next')}
//           style={{
//             width: '30%',
//           }}
//         >
//           OK
//         </Button>
//       </Footer>
//     </Container>
//   );
// };

// export default StepOne;
