import React from 'react';
import _ from 'lodash';

import {
  FormStyled,
  CheckStyled,
  LabelStyled,
  SpanInput,
  SpanControl,
  RadioLabel,
} from './styles';

const CheckBox = ({ options, inputValue, setInputValue }) => {
  const chunkedData = _.chunk(options, 2);

  const handleInputChange = (e, option) => {
    if (inputValue.includes(option)) {
      return setInputValue(inputValue.filter(value => value !== option));
    }
    return setInputValue([...inputValue, option]);
  };

  return (
    <FormStyled className="d-flex col-12">
      {chunkedData.map((row, rowIndex) => (
        <div key={rowIndex} className="row col-6">
          {row.map(col => (
            <LabelStyled>
              <SpanInput>
                <CheckStyled
                  name={col}
                  type="checkbox"
                  checked={inputValue.find(inputV => inputV === col)}
                  onChange={e => handleInputChange(e, col)}
                />
                <SpanControl className="checkbox__control">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </SpanControl>
              </SpanInput>
              <RadioLabel className="radio__label">{col}</RadioLabel>
            </LabelStyled>
          ))}
        </div>
      ))}
    </FormStyled>
  );
};

export default CheckBox;
