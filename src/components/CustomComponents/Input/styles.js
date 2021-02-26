import styled from 'styled-components';

export const InputStyled = styled.input`
  border: 0;
  padding: 0;
  height: calc(1.5em + 0.75rem + 15px);
  width: 17.625rem;
  font: normal normal 400 2.5rem Trasandina;
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
