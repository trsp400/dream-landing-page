import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import toastConfig from '../../../utils/toastConfig';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';

import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, ButtonContainer, Body, Footer } from './styles';

const StepSix = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, monthlySupport } = store;

  const [inputValue, setInputValue] = useState(monthlySupport);

  const notify = useCallback(
    () => toast('Por favor, digite um valor!', toastConfig),
    [],
  );

  const handleDispatch = useCallback(
    step => {
      if (!inputValue && step > currentStep) return notify();
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          monthlySupport: inputValue,
        }),
      );
    },
    [dispatch, store, inputValue],
  );

  return (
    <Container>
      <ToastContainer />
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
