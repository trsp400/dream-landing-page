import styled from 'styled-components';

export const InputStyledNumber = styled.input`
  border: 0;
  border-bottom: 3px solid transparent;
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

export const InputStyledTextContainer = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px 15px;
  width: max-content;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.51);
  background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};

`;

export const InputStyledText = styled.input`
  border: 0;
  padding: 0;
  height: calc(0.4em + 0.75rem + 8px);
  width: 15.625rem;
  font: normal normal 400 1.5rem Trasandina;
  text-align: left;
  color: #979797;
  background-color: transparent;
  transition: color 0.15s ease-in-out;

  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) =>
    theme.mobileTheme.colors.primary.orange};

  &:focus {
    color: #fff;
  }
`;
