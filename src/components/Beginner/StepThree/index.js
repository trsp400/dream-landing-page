import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';
import Input from '../../CustomComponents/Input';
import Button from '../../CustomComponents/Button';

import Lefticon from '../../../assets/icons/left-icon.svg';
import OkIcon from '../../../assets/icons/ok-icon.svg'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import {
  Container,
  Body,
  MessageFeedbackStyle,
  SelectTime,
  BoxInput,
  InputContainer,
  BoxButton,
  Footer,
  ButtonContainer,
} from './styles';

import selectPeriodConfig from '../../../utils/selectPeriodConfig';

const listPeriods = {
  anos: 'Anos',
  meses: 'Meses',
};

const options = Object.keys(listPeriods).map(item => ({
  value: listPeriods[item],
  label: listPeriods[item],
}));

const StepThree = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { notify, isMobileView } = useSelector(({ settings }) => settings);

  const { currentStep, period, yearOrMonth } = store;

  const [isActiveInput, setIsActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState(period || '');
  const [inputYearOrMonth, setInputYearOrMonth] = useState(yearOrMonth);
  const [placeholderInfo, setPlaceholderInfo] = useState(
    listPeriods[yearOrMonth],
  );

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
    setInputYearOrMonth(item);
  });

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.keyCode === 13) {
        handleDispatch(4, 'next');
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [inputValue]);

  return isMobileView ? (
    <Container isMobileView={isMobileView}>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          isMobileView={isMobileView}
        >
          Certo!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1200}
          isMobileView={isMobileView}
        >
          Em quanto tempo você deseja conquistar o seu sonho?
        </MessageFeedbackStyle>

        <ButtonContainer isActiveInput={isActiveInput}>
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
        <BoxInput isMobileView={isMobileView} isActiveInput={isActiveInput}>
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
  ) : (
    <Container isMobileView={isMobileView}>
      <Body>
        <MessageFeedbackStyle
          placing="above"
          animationSpeed={2000}
          animationDelay={900}
          isMobileView={isMobileView}
        >
          Certo!
        </MessageFeedbackStyle>
        <MessageFeedbackStyle
          placing="bellow"
          animationSpeed={2000}
          animationDelay={1200}
          isMobileView={isMobileView}
        >
          Em quanto tempo você deseja conquistar o seu sonho?
        </MessageFeedbackStyle>

        <InputContainer>
          <BoxInput>
          <Input
            state={inputValue}
            setState={setInputValue}
            type="number"
            placeholder={placeholderInfo}
            setIsActiveInput={setIsActiveInput}
          />
          <SelectTime
            options={options}
            components={makeAnimated()}
            placeholder="Selecione"
            isSearchable={false}
            clearable={false}
            onChange={event =>
              setPlaceholderInformation(event?.value?.toLowerCase())
            }
            styles={selectPeriodConfig}
          />
          </BoxInput>
          <BoxButton>
            <Button
              ripple
              variant="beblue"
              glow
              onClick={() => handleDispatch(2, 'previous')}
            >
              <Lefticon width={20} />
            </Button>

            <Button
              ripple
              variant="beorange"
              glow
              onClick={() => handleDispatch(4, 'next')}
            >
              OK <OkIcon />
            </Button>
          </BoxButton>
        </InputContainer>
      </Body>
    </Container>
  );
};

export default StepThree;
