/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListDecision from '../../CustomComponents/ListDecision';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import Loading from '../../CustomComponents/Loading';
import { Container, Body, Footer } from './styles';

import { changeFormState } from '../../../redux/dream_machine/actions';

const options = [
  'Aumentar para R$ 1.200 no fim do seu ciclo de investimento, sem eventuais riscos.',
  'Ter a possibilidade de aumentar para R$ 1.500 no fim do seu ciclo, com um pequeno risco.',
  'Aumentar para R$ 1.200 no fim do seu ciclo de investimento, sem eventuais riscos.',
];

const RenderLoading = ({ setLoading, dispatch }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      dispatch(7);
    }, 3000);
  });
  return <Loading />;
};

const StepSeven = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, decision } = store;
  const [loading, setLoading] = useState(false);

  const [inputValue, setInputvalue] = useState(decision);

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          decision: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return loading ? (
    <RenderLoading setLoading={setLoading} dispatch={handleDispatch} />
  ) : (
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
          onClick={() => handleDispatch(5)}
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
          onClick={() => setLoading(true)}
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
