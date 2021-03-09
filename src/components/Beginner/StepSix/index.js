/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListDecision from '../../CustomComponents/ListDecision';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, Body, Footer } from './styles';

import { changeFormState } from '../../../redux/dream_machine/actions';

const options = [
  'Aumentar para R$ 1.200 no fim do seu ciclo de investimento, sem eventuais riscos.',
  'Ter a possibilidade de aumentar para R$ 1.500 no fim do seu ciclo, com um pequeno risco.',
  'Aumentar para R$ 1.200 no fim do seu ciclo de investimento, sem eventuais riscos.',
];

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, decision } = store;

  const [inputValue, setInputvalue] = useState(decision);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, selecione uma opção!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          decision: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <Container>
      <Body>
        <MessageFeedback strong="lighter">
          Vamos entender melhor os seus objetivos...
        </MessageFeedback>
        <MessageFeedback strong="bold">
          Se você investisse R$1.000, qual seria a sua preferência?
        </MessageFeedback>

        <ListDecision
          options={options}
          state={inputValue}
          setState={setInputvalue}
        />
      </Body>

      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(5, 'previous')}
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
          onClick={() => {
            if (!inputValue) return notify('Por favor, selecione uma opção!');
            return handleDispatch(7);
          }}
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

export default StepSeven;
