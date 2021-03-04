/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

import SvgImg from '../../../assets/icons/checkbox-icon.svg';

import Input from '../../CustomComponents/Input';
import CheckBox from '../../CustomComponents/CheckBox';
import MessageFeedback from '../../CustomComponents/MessageFeedback';

import Button from '../../CustomComponents/Button';

import { Footer, Container } from './styles';

const options = [
  'Banco Comercial',
  'Banco Financeiro',
  'Corretora',
  'Exchange',
];

const StepTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, desiredInvestmentsPlacement, otherInvestments } = store;

  const [arrayValues, setArrayValues] = useState(desiredInvestmentsPlacement);
  const [otherInvestmentsInput, setOtherInvestmentsInput] = useState(
    otherInvestments,
  );

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          desiredInvestmentsPlacement: arrayValues,
          otherInvestments: otherInvestmentsInput,
        }),
      );
    },
    [dispatch, store, arrayValues, otherInvestmentsInput],
  );

  return (
    <Container>
      <MessageFeedback strong="lighter">Incrível! ?</MessageFeedback>

      <MessageFeedback strong="bold">
        Onde você deseja investir?
      </MessageFeedback>
      {/* <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(1)}>
        step anterior
      </button>
      <br />
      <button type="button" onClick={() => handleDispatch(3)}>
        Proximo step
      </button> */}
      {/* <br />
      <span>onde voce deseja investir: </span>

      <select
        name="decision"
        value={inputValue}
        onChange={event => {
          if (inputValue.includes(event.target.value)) {
            return setInputValue(
              inputValue.filter(value => value !== event.target.value),
            );
          }

          return setInputValue([...inputValue, event.target.value]);
        }}
        multiple
      >
        <option value="Renda Fixa">Renda Fixa</option>
        <option value="COE">COE</option>
        <option value="Renda Variável">Renda Variável</option>
        <option value="Investimento Externo">Investimento Externo</option>
        <option value="Fundos de Investimentos">Fundos de Investimentos</option>
        <option value="Criptomoedas">Criptomoedas</option>
      </select> */}

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
          onClick={() => handleDispatch(1)}
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
          onClick={() => handleDispatch(3)}
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
