import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue}; */
  position: relative;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 18px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
`;
