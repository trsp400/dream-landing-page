import React from 'react';

import { SelectStyled, OptionStyled } from './styles';

export const Select = ({
  name,
  inputValue,
  multiple,
  setInputValue,
  children,
}) => (
  <div>
    <SelectStyled
      name={name}
      value={inputValue}
      onChange={event => {
        if (inputValue.includes(event.target.value)) {
          return setInputValue(
            inputValue.filter(value => value !== event.target.value),
          );
        }

        return setInputValue([...inputValue, event.target.value]);
      }}
      multiple={multiple}
    >
      {children}
    </SelectStyled>
  </div>
);

export const Option = ({ value, children }) => (
  <OptionStyled value={value}>{children}</OptionStyled>
);
