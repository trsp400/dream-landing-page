/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import toastConfig from '../../../utils/toastConfig';

import { changeFormState } from '../../../redux/dream_machine/actions';

import SvgImg from '../../../assets/icons/checkbox-icon.svg';

import Input from '../../CustomComponents/Input';
import CheckBox from '../../CustomComponents/CheckBox';
import MessageFeedback from '../../CustomComponents/MessageFeedback';

import Button from '../../CustomComponents/Button';

import { Footer, Container } from './styles';

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
      <MessageFeedback strong="lighter">Incrível!</MessageFeedback>

      <MessageFeedback strong="bold">
        Onde você deseja investir?
      </MessageFeedback>

      <CheckBox
        options={options}
        state={arrayValues}
        setState={setArrayValues}
        image={<SvgImg />}
      />

      <br />
      <span>Outro: </span>
      <Input
        state={otherInvestmentsInput}
        setState={setOtherInvestmentsInput}
        type="text"
      />

      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(1, 'previous')}
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
          onClick={() => handleDispatch(3, 'next')}
          style={{
            width: '30%',
          }}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepTwo;