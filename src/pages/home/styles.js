import styled from 'styled-components';
import { Container as BootstrapContainer, ButtonGroup } from 'react-bootstrap';

import RippleButton from '../../components/Button';

export const Container = styled(BootstrapContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background: rgb(26,74,115);
  background: linear-gradient(180deg, rgba(26,74,115,1) 52%, rgba(67,106,140,1) 65%);

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

  box-shadow: 0px 3px 0px 0px #EA5E45;

  position: absolute;

  svg {
    width: 50%;
    filter: drop-shadow(0px 0px 1px #ea5e45)
            drop-shadow(0px 0px 2px #ea5e45);
  }
`;
export const MainHome = styled.main`
  position: relative;
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
      content: "";
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
