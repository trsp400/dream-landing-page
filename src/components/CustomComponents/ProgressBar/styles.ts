import styled, { css } from 'styled-components';

interface BarProps {
  currentStep?: Boolean;
  barColor?: string;
}

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.span<BarProps>`
  width: 70%;
  max-width: 10vh;
  height: 5px;
  z-index: 999;
  transition: background-color 0.3s ease-in-out;
  ${props =>
    props?.currentStep
      ? css<BarProps>`
          background-color: ${props => props?.barColor};
        `
      : css`
          background-color: rgba(255, 255, 255, 0.5);
        `}

  margin: 15px 4px 0px 4px;
`;
