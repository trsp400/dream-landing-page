import styled from 'styled-components';

export const CheckStyled = styled.input`
  opacity: 0;
  width: 2em;
  height: 2em;

  &:focus + .checkbox__control {
    box-shadow: 0 0 0 0.01em #fff,
      0 0 0.15em 0.1em ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  }

  &:checked + .checkbox__control svg {
    transform: scale(1);
  }

  &:disabled + .checkbox__control {
    color: #959495;
  }
`;

export const LabelStyled = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font: normal normal 400 15px Trasandina;
  /* margin-bottom: 3rem; */

`;

export const SpanInputStyled = styled.span`
  display: grid;
  grid-template-areas: 'checkbox';
  justify-content: center;
  align-content: center;

  > * {
    grid-area: checkbox;
  }

  input {
    opacity: 0;
    width: 2em;
    height: 2em;

    &:focus + .checkbox__control {
      box-shadow: 0 0 0 0.05em
          ${({ theme }) => theme.mobileTheme.colors.primary.blue},
        0 0 0.15em 0.1em
          ${({ theme }) => theme.mobileTheme.colors.primary.orange};
    }

    &:checked + .checkbox__control svg {
      transform: scale(1);
    }

    &:disabled + .checkbox__control {
      color: #959495;
    }
  }
`;

export const SpanControlStyled = styled.span`
  display: inline-grid;
  width: 2em;
  height: 2em;
  border-radius: 0.25em;
  border: 0.15em solid ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};

  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
`;

export const FormStyled = styled.div`
  display: grid;
  place-content: center;
  grid-gap: 2rem;
  /* padding: 2rem 0; */
  line-height: 1;
`;

export const RadioLabelStyled = styled.span`
  display: grid;
  justify-content: flex-start;
  align-content: center;
  color: #fff;
`;
