import styled, { css } from 'styled-components';

interface ContainerProps {
  background?: any;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
