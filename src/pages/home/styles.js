import styled from 'styled-components';
import { Container as BootstrapContainer, ButtonGroup } from 'react-bootstrap';

import RippleButton from '../../components/Button';

export const Container = styled(BootstrapContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > svg {
    position: absolute;
    top: -40px;

    width: auto;
    height: 100%;
    max-width: 20rem;
  }

`;

export const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 3px 0px 0px #EA5E45;

  position: absolute;
`;
export const MainHome = styled.main`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 40px;
`;
export const PresentationSection = styled.section`
  width: 80%;
  color: green;

  h1 {
  color: #fff;
  font-size: 1.8rem;
  }


  p {
    color: #fff;
    line-height: 16px;
  }

`;

export const ButtonSection = styled(ButtonGroup)`
  flex-direction: column;
  width: 100%;

  justify-content: space-between;

`;

export const Button = styled(RippleButton)``;
