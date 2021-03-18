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

  const checkFunction = (fn:Function, value:boolean):Function => {
    if(!fn) return null

    return fn(value)
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
        onBlur={() => checkFunction(setIsActiveInput ,false)}
        onFocus={() => checkFunction(setIsActiveInput, true)}
        {...props}
      />
    ) : type === 'text' ? (
      <InputStyledTextContainer>
        <InputStyledText
          placeholder="Outros"
          value={state || ''}
          type={type}
          onChange={event => setState(event?.target?.value)}
          onBlur={() => checkFunction(setIsActiveInput,false)}
          onFocus={() => checkFunction(setIsActiveInput,true)}
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
          onBlur={() => checkFunction(setIsActiveInput,false)}
          onFocus={() => checkFunction(setIsActiveInput,true)}
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
        onBlur={() => checkFunction(setIsActiveInput,false)}
          onFocus={() => checkFunction(setIsActiveInput,true)}
        {...props}
      />
    ) : (
      <div />
    )}
  </>
  )
};
export default Input;
