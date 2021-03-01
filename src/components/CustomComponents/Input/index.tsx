import React, { FC } from 'react';
import NumberFormat from 'react-number-format';

import {
  InputStyledCurrency,
  InputStyledText,
  InputStyledTextContainer,
} from './styles';

interface InputProps {
  children: JSX.Element[] | JSX.Element | any;
  className?: string;
  type: 'currency' | 'mail' | 'text';
  state: number;
  setState(value: any): void;
}

const Input: FC<InputProps> = ({ state, type, setState }) => (
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
        customInput={InputStyledCurrency}
        value={state}
        onChange={event => setState(event.target.value)}
      />
    ) : type === 'text' ? (
      <InputStyledTextContainer>
        <InputStyledText
          placeholder="Outros"
          value={state || ''}
          onChange={event => setState(event.target.value)}
        />
      </InputStyledTextContainer>
    ) : (
      <div />
    )}
  </>
);
export default Input;
