import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const { Control, Group } = Form;

export const InputWrap = styled(Group)``;

const InputStyled = styled(Control).attrs({
  custom: true,
})`
  border: 0;
  padding: 0;
  height: calc(1.5em + 0.75rem + 2px);
  width: 70%;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: #979797;
  background-color: transparent;
  transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:focus {
    color: #fff;
    outline: none;
    border: 0;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-bottom-color: ${({ theme }) =>
      theme.mobileTheme.colors.primary.orange};
  }
`;

export const InputText = ({ inputRef }) => <InputStyled ref={inputRef} />;
