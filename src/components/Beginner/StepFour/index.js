import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, Body, Footer } from './styles';

import toastConfig from '../../../utils/toastConfig';

const StepFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, currentInvestments } = store;

  const [inputValue, setInputValue] = useState(currentInvestments);

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
          currentInvestments:
            parseFloat(
              inputValue
                ?.replace(/R$/gi, '')
                .replace(/./gi, '')
                .replace(/,/gi, '.'),
            ) || inputValue,
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
          Quanto você pode investir hoje?
        </MessageFeedback>

        <Input state={inputValue} setState={setInputValue} type="currency" />
      </Body>

      <Footer>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(3)}
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
          onClick={() => handleDispatch(5)}
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

export default StepFour;
