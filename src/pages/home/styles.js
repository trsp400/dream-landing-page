import styled from 'styled-components';
import { Container as BootstrapContainer, ButtonGroup } from 'react-bootstrap';

import RippleButton from '../../components/CustomComponents/Button';

import Pattern from '../../images/background-pattern.png';

export const Container = styled(BootstrapContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  max-width: 1024px;

  background-color: #1a4a73;
  background: linear-gradient(
    180deg,
    rgba(26, 74, 115, 1) 30%,
    rgba(67, 106, 140, 1) 45%
  );

  width: 100vw;
  background-size: cover;
  object-fit: cover;
  background-position: center;

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
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  object-fit: cover;
  background-position: center;

  box-shadow: 0px 3px 0px 0px #ea5e45;

  position: absolute;
  background-color: #1a4a73;
  z-index: 999;

  svg {
    width: 50%;
    filter: drop-shadow(0px 0px 1px #ea5e45) drop-shadow(0px 0px 2px #ea5e45);
  }
`;

export const Background = styled.div`
  background-image: url('${Pattern}');
  position: absolute;

  opacity: 0.4;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  object-fit: cover;
`;

export const MainHome = styled.main`
  position: relative;
  opacity: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
`;
export const PresentationSection = styled.section`
  width: 85%;
  color: green;

  h1 {
    color: #fff;
    font: 700 34px/36px Trasandina;
  }

  p {
    color: #fff;
    font: 200 15px/16px Trasandina;
  }
`;

export const ButtonSection = styled(ButtonGroup)`
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  justify-content: space-between;
`;

export const Button = styled(RippleButton)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 50%;
    background: rgba(255, 255, 255, 0.03);
  }

  &:last-child {
    margin-top: 10px;
  }
`;
