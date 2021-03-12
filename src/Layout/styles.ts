import styled from 'styled-components';

import Pattern from '../images/background-pattern.png';

export const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
`;

export const Background = styled.div`
  background-image: url('${Pattern}');
  position: absolute;

  opacity: 0.3;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  object-fit: cover;
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
  max-width: 1024px;
`;
