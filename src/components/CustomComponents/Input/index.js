import React from 'react';
import NumberFormat from 'react-number-format';

import { InputStyled } from './styles';

const Input = ({ value, type, setInputValue }) => (
  <div>
    {type === 'currency' && (
      <NumberFormat
        // name={field}
        displayType="input"
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale
        decimalScale={2}
        prefix="R$ "
        placeholder="R$ 0,00"
        customInput={InputStyled}
        value={value}
        onChange={event => setInputValue(event.target.value)}
      />
    )}
  </div>
);
export default Input;
