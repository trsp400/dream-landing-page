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
}

const Input: FC<InputProps> = ({ state, type, setState, placeholder }) => (
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
      />
    ) : type === 'text' ? (
      <InputStyledTextContainer>
        <InputStyledText
          placeholder="Outros"
          value={state || ''}
          type={type}
          onChange={event => setState(event?.target?.value)}
        />
      </InputStyledTextContainer>
    ) : type === 'email' ? (
      <InputStyledTextContainer>
        <InputStyledText
          placeholder="E-mail"
          value={state || ''}
          type={type}
          onChange={event => {
            console.log(event?.target?.value);
            setState(event?.target?.value);
          }}
          required
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
      />
    ) : (
      <div />
    )}
  </>
);
export default Input;
