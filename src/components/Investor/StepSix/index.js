import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import toastConfig from '../../../utils/toastConfig';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, ButtonContainer, Body, Footer } from './styles';

const StepSix = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, monthlySupport } = store;

  const [inputValue, setInputValue] = useState(monthlySupport);

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, digite um valor!');
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          monthlySupport: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <Container>
      <Body>
        <MessageFeedback strong="lighter">OK!</MessageFeedback>
        <MessageFeedback strong="bold">
          Quanto você pode investir por mês?
        </MessageFeedback>

        <Input state={inputValue} setState={setInputValue} type="currency" />
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
          onClick={() => handleDispatch(7)}
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

export default StepSix;