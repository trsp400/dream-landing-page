import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';

import Lefticon from '../../../assets/icons/left-icon.svg'

import { Container, Body, MessageFeedbackStyle, BoxInput ,Footer, ButtonContainer } from './styles';

import toastConfig from '../../../utils/toastConfig';

const listPeriods = {
  anos: 'Anos',
  meses: 'Meses',
};

const StepThree = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify } = useSelector(({ settings }) => settings);

  const { currentStep, period, yearOrMonth } = store;

  const [isActiveInput, setIsActiveInput] = useState(false)
  const [inputValue, setInputValue] = useState(period);
  const [inputYearOrMonth, setInputYearOrMonth] = useState(yearOrMonth);
  const [placeholderInfo, setPlaceholderInfo] = useState(listPeriods[yearOrMonth])

  const handleDispatch = useCallback(
    (step, direction) => {
      if (!inputValue && step > currentStep)
        return notify('Por favor, digite um valor!');

      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
          direction,
          period: inputValue,
          yearOrMonth: inputYearOrMonth,
        }),
      );
    },
    [dispatch, store, inputValue, inputYearOrMonth],
  );

  const setPlaceholderInformation = useCallback(item => {
      const returnItemListPeriod = listPeriods[item];

      setPlaceholderInfo(returnItemListPeriod);
      setInputYearOrMonth(item)
  })

  return (
    <Container >
      <Body>
        <MessageFeedbackStyle placing="above" animationSpeed={2000} animationDelay={900}>
          OK!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle placing="bellow" animationSpeed={2000} animationDelay={1200}>
          De quanto tempo você precisa?
        </MessageFeedbackStyle>

        <ButtonContainer  isActiveInput={isActiveInput}>
          {Object.keys(listPeriods).map(item => (
            <Button
              variant={item === inputYearOrMonth ? 'beorange' : 'beblue'}
              ripple
              glow
              onClick={() => setPlaceholderInformation(item)}
              key={item}
            >
              {listPeriods[item]}
            </Button>
          ))}
        </ButtonContainer>
        <BoxInput>
          <Input
            state={inputValue}
            setState={setInputValue}
            type="number"
            placeholder={placeholderInfo}
            setIsActiveInput={setIsActiveInput}
          />
        </BoxInput>
      </Body>

      <Footer isActiveInput={isActiveInput}>
        <Button
          ripple
          variant="beblue"
          glow
          onClick={() => handleDispatch(2, 'previous')}
        >
          <Lefticon />
        </Button>

        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleDispatch(4, 'next')}
        >
          OK
        </Button>
      </Footer>
    </Container>
  );
};

export default StepThree;
