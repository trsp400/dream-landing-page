import React, { FC } from 'react';
import NumberFormat from 'react-number-format';

import {
  InputStyledNumber,
  InputStyledTextContainer,
  InputStyledText,
} from './styles';

interface InputProps {
  children: JSX.Element[] | JSX.Element | any;
  className?: string;
  type: 'currency' | 'email' | 'text' | 'number';
  state: number;
  setState(value: any): void;
  placeholder?: string;
  setIsActiveInput: (value: boolean) => void;
}

const Input: FC<InputProps> = ({ state, type, setState, placeholder, setIsActiveInput, ...props }) => (
  <>
    {type === 'currency' ? (
      <NumberFormat
        // name={field}
        displayType="input"
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale
        decimalScale={2}
        prefix="R$ "
        placeholder="R$ 0,00"
        customInput={InputStyledNumber}
        value={state}
        onChange={event => setState(event?.target?.value)}
        onBlur={() => setIsActiveInput(false)}
        onFocus={() => setIsActiveInput(true)}
        {...props}
      />
    ) : type === 'text' ? (
      <InputStyledTextContainer>
        <InputStyledText
          placeholder="Outros"
          value={state || ''}
          type={type}
          onChange={event => setState(event?.target?.value)}
          onBlur={() => setIsActiveInput(false)}
          onFocus={() => setIsActiveInput(true)}
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
          onBlur={() => setIsActiveInput(false)}
          onFocus={() => setIsActiveInput(true)}
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
        onBlur={() => setIsActiveInput(false)}
        onFocus={() => setIsActiveInput(true)}
        {...props}
      />
    ) : (
      <div />
    )}
  </>
);
export default Input;
