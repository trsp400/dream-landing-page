/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import toastConfig from '../../../utils/toastConfig';

import { changeFormState } from '../../../redux/dream_machine/actions';

import SvgImg from '../../../assets/icons/checkbox-icon.svg';
import Lefticon from '../../../assets/icons/left-icon.svg'

import Input from '../../CustomComponents/Input';
import CheckBox from '../../CustomComponents/CheckBox';
import Button from '../../CustomComponents/Button';

import { Container, MessageFeedbackStyle,BoxCheck , BoxInput,Footer } from './styles';

const options = [
  'Renda Fixa',
  'Renda Variável',
  'Fundo de Investimento',
  'COE',
  'Investimento Externo',
  'Criptomoedas',
];

const StepTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, desiredInvestmentsPlacement, otherInvestments } = store;

  const [arrayValues, setArrayValues] = useState(desiredInvestmentsPlacement);

  const { notify } = useSelector(({ settings }) => settings);

  const [otherInvestmentsInput, setOtherInvestmentsInput] = useState(
    otherInvestments,
  );

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!arrayValues?.length && !otherInvestmentsInput && step > currentStep)
        return notify('Por favor, selecione uma opção!');
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          desiredInvestmentsPlacement: arrayValues,
          otherInvestments: otherInvestmentsInput,
        }),
      );
    },
    [dispatch, store, arrayValues, otherInvestmentsInput],
  );

  return (
    <Container>
      <MessageFeedbackStyle placing="above" animationSpeed={2000} animationDelay={900}>
          Olá, vamos começar?
        </MessageFeedbackStyle>
        <MessageFeedbackStyle placing="bellow" animationSpeed={2000} animationDelay={1300}>
          Onde você já investe?
        </MessageFeedbackStyle>
      <BoxCheck>
        <CheckBox
          options={options}
          state={arrayValues}
          setState={setArrayValues}
          image={<SvgImg />}
        />
      </BoxCheck>

      <BoxInput>
        <Input
          state={otherInvestmentsInput}
          setState={setOtherInvestmentsInput}
          type="text"
        />
      </BoxInput>
      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(1, 'previous')}
        >
          <Lefticon/>
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleDispatch(3, 'next')}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepTwo;
