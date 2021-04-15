import React, { FC, InputHTMLAttributes } from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

import {
  InputStyledNumber,
  InputStyledTextContainer,
  InputStyledText,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: JSX.Element[] | JSX.Element | any;
  className?: string;
  type: 'currency' | 'email' | 'text' | 'number';
  state: number;
  setState(value: any): void;
  placeholder?: string;
  setIsActiveInput?: (value: boolean) => void;
}

interface DataSettingsStore {
  isMobileView: boolean,
  screenSize: number,
}

interface RootState {
  dreamMachine: Object,
  settings: DataSettingsStore,
  theme: Object
}

const Input: FC<InputProps> = ({ state, type, setState, placeholder, setIsActiveInput, ...props }) => {

  const isMobileView = useSelector((store: RootState) => store.settings.isMobileView)

  function checkFunction (event:Event, fn:Function, value:boolean):Function  {
    const { type } = event;

    if(!fn) return null

    if(type === "focus") return fn(value);

    setTimeout(() => {
      return fn(value)
    }, 200)
  }


  return (
  <>
    {type === 'currency' ? (
      <NumberFormat
        // name={field}
        displayType="input"
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale
        decimalScale={2}
        maxLength={16}
        prefix="R$ "
        placeholder="R$ 0,00"
        customInput={InputStyledNumber}
        value={state}
        onChange={event => setState(event?.target?.value)}
        onBlur={event => checkFunction(event, setIsActiveInput ,false)}
        onFocus={event => checkFunction(event, setIsActiveInput, true)}
        {...props}
      />
    ) : type === 'text' ? (
      <InputStyledTextContainer isMobileView={isMobileView}>
        <InputStyledText
          placeholder={placeholder || "Outros"}
          value={state || ''}
          type={type}
          onChange={event => setState(event?.target?.value)}
          onBlur={event => checkFunction(event, setIsActiveInput,false)}
          onFocus={event => checkFunction(event, setIsActiveInput,true)}
          {...props}
        />
      </InputStyledTextContainer>
    ) : type === 'email' ? (
      <InputStyledTextContainer isMobileView={isMobileView}>
        <InputStyledText
          placeholder="E-mail"
          value={state || ''}
          type={type}
          onChange={event => {
            setState(event?.target?.value);
          }}
          required
          onBlur={event => checkFunction(event, setIsActiveInput,false)}
          onFocus={event => checkFunction(event, setIsActiveInput,true)}
          {...props}
        />
      </InputStyledTextContainer>
    ) : type === 'number' ? (
      <NumberFormat
        // name={field}
        displayType="input"
        allowNegative={false}
        decimalSeparator={false}
        pattern="[0-9]*"
        placeholder={placeholder}
        customInput={InputStyledNumber}
        value={state || ''}
        onChange={event => setState(event?.target?.value)}
        onBlur={event => checkFunction(event, setIsActiveInput,false)}
          onFocus={event => checkFunction(event, setIsActiveInput,true)}
        {...props}
      />
    ) : type === "phone" ? (
      <InputStyledTextContainer isMobileView={isMobileView}>
          <NumberFormat
            format="(##) # #### ####"
            displayType="input"
            allowNegative={false}
            placeholder={placeholder || "Telefone"}
            customInput={InputStyledText}
            value={state || ''}
            onChange={event => setState(event?.target?.value)}
            {...props}
          />
       </InputStyledTextContainer>
    ) : (
      <div />
    )}
  </>
  )
};
export default Input;
