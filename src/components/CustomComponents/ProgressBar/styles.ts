import styled, { css } from 'styled-components';

interface BarProps {
  currentStep?: Boolean;
  barColor?: string;
  barSize?: number;
}

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.span<BarProps>`
  width: ${props => props.barSize}px;
  max-width: 10vh;
  height: 2px;
  ${props =>
    props?.currentStep
      ? css<BarProps>`
          background-color: ${props => props?.barColor};
        `
      : css`
          background-color: rgba(255, 255, 255, 0.5);
        `}

  margin: 10px;
`;
