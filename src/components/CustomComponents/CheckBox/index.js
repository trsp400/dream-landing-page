import React from 'react';

import { FormStyled, CheckStyled, LabelStyled } from './styles';

const CheckBox = ({ options, inputValue, setInputValue }) => {
  const handleInputChange = (e, option) => {
    if (inputValue.includes(option)) {
      return setInputValue(inputValue.filter(value => value !== option));
    }
    return setInputValue([...inputValue, option]);
  };

  return (
    <FormStyled>
      {options.map(option => (
        <LabelStyled>
          <CheckStyled
            name={option}
            type="checkbox"
            checked={inputValue.find(inputV => inputV === option)}
            onChange={e => handleInputChange(e, option)}
          />
          {option}
        </LabelStyled>
      ))}
    </FormStyled>
  );
};

export default CheckBox;
