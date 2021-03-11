import styled from 'styled-components';
import { animated } from 'react-spring';

export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card1 = styled(animated.div)`
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;

  min-width: 60ch;
  min-height: 60ch;
  width: 45vw;
  height: 45vw;
  max-width: 100ch;
  max-height: 100ch;

  justify-content: center;
  display: flex;
`;
