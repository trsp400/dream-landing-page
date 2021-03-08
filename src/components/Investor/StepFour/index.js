import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import toastConfig from '../../../utils/toastConfig';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, ButtonContainer, Body, Footer } from './styles';

const listPeriods = {
  anos: 'Anos',
  meses: 'Meses',
};

const StepFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep, period, yearOrMonth } = store;

  const [inputValue, setInputValue] = useState(period);
  const [inputYearOrMonth, setInputYearOrMonth] = useState(yearOrMonth);

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
          period: inputValue,
          yearOrMonth: inputYearOrMonth,
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
        <MessageFeedback strong="bold">Em quanto tempo?</MessageFeedback>

        <ButtonContainer>
          {Object.keys(listPeriods).map(item => (
            <Button
              variant={item === inputYearOrMonth ? 'beorange' : 'beblue'}
              ripple
              glow
              style={{
                width: '30%',
              }}
              onClick={() => setInputYearOrMonth(item)}
              key={item}
            >
              {listPeriods[item]}
            </Button>
          ))}
        </ButtonContainer>

        <Input
          state={inputValue}
          setState={setInputValue}
          type="number"
          placeholder="Tempo"
        />
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
