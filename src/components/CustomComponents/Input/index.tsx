import React, { FC, InputHTMLAttributes } from 'react';
import NumberFormat from 'react-number-format';

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

const Input: FC<InputProps> = ({ state, type, setState, placeholder, setIsActiveInput, ...props }) => {

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
      <InputStyledTextContainer>
        <InputStyledText
          placeholder="Outros"
          value={state || ''}
          type={type}
          onChange={event => setState(event?.target?.value)}
          onBlur={event => checkFunction(event, setIsActiveInput,false)}
          onFocus={event => checkFunction(event, setIsActiveInput,true)}
          {...props}
        />
      </InputStyledTextContainer>
    ) : type === 'email' ? (
      <InputStyledTextContainer>
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
    ) : (
      <div />
    )}
  </>
  )
};
export default Input;
