import React, { forwardRef } from 'react';
import NumberFormat from 'react-number-format';

import { InputWrap, InputText } from './styles';

const Input = forwardRef((props, ref) => (
  <div>
    <InputWrap className="mb-3 d-flex justify-content-center">
      <NumberFormat
        // name={field}
        displayType="input"
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale
        decimalScale={2}
        prefix="R$ "
        placeholder="R$ 0,00"
        customInput={InputText}
        inputRef={ref}
      />
    </InputWrap>
  </div>
));

export default Input;
