import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import toastConfig from '../../../utils/toastConfig';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, Body, Footer } from './styles';

const StepThree = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, objectiveCost } = store;

  const [inputValue, setInputValue] = useState(objectiveCost);

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
          objectiveCost: inputValue,
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
        <MessageFeedback strong="bold">De quanto você precisa?</MessageFeedback>

        <Input state={inputValue} setState={setInputValue} type="currency" />
      </Body>
      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(2)}
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
          onClick={() => handleDispatch(4)}
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

export default StepThree;
