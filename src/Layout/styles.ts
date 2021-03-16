import styled from 'styled-components';

import Pattern from '../images/background-pattern.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  /* background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue}; */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  /* object-fit: cover; */
  /* background-position: center; */
`;


export const Background = styled.div`
  background-image: url('${Pattern}');
  position: absolute;
  width: 100%;
  height: 90vh;

  opacity: 0.3;

  background-size: cover;
  object-fit: cover;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 18px;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* max-width: 1024px; */

`;


