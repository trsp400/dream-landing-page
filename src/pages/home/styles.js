import styled, { css } from 'styled-components';
import { Container as BootstrapContainer, ButtonGroup } from 'react-bootstrap';

import RippleButton from '../../components/CustomComponents/Button';

import Pattern from '../../images/background-pattern.png';


export const Container = styled(BootstrapContainer)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${props =>
    props?.isMobileView &&
    css`
      max-width: 1024px;
    `}

  ${props =>
    props?.isMobileView &&
    css`
      background: linear-gradient(
        180deg,
        rgba(26, 74, 115, 1) 30%,
        rgba(67, 106, 140, 1) 45%
      );
    `}

  /* background-size: cover;
  object-fit: cover;
  background-position: center; */

  background-position: center;
  background-repeat: no-repeat;

  &::before {
   content: "";
   width: 100%;
   height: 100%;
   background: url('${Pattern}');
   opacity: 0.05;
   filter: invert(100%);
   position: absolute;
   background-repeat: no-repeat;
   object-fit: cover;
   background-size: cover;
   background-position: center;
   z-index: 0;
 }

  > svg {
    position: absolute;
    top: -40px;

    width: auto;
    height: 100%;
    max-width: 20rem;
  }
`;

export const ContainerSteps = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: url('${Pattern}');
    opacity: 0.05;
    filter: invert(100%);
    position: absolute;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

`

export const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  background-size: contain;
  object-fit: contain;
  background-position: center;

  box-shadow: 0px 3px 0px 0px #ea5e45;

  background-color: #1a4a73;
  z-index: 999;

  svg {
    width: ${props => (props?.isMobileView ? '50%' : '20%')};
    filter: drop-shadow(0px 0px 1px #ea5e45) drop-shadow(0px 0px 2px #ea5e45);
  }
`;

export const Background = styled.div`
  position: absolute;

  ${props =>
    props?.isMobileView
      ? css`
          background-image: url('${Pattern}');
        `
      : css``}
  ${props =>
    props?.currentStep > 0
      ? css``
      : css`
          background-color: #1a4a73;
        `}

  opacity: 0.2;
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

export const DesktopContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const DreamMachineContainer = styled.div`
  width: 65%;
`;

export const PresentationSection = styled.section`
  /* width: 40%; */

  ${props =>
    props?.isMobileView
      ? css`
          h1 {
            color: #fff;
            font: 700 34px/36px Trasandina;
          }

          p {
            color: #fff;
            font: 200 15px/16px Trasandina;
          }
        `
      : css`
          h1 {
            color: #fff;
            font: 700 52px/48px Trasandina;
          }

          p {
            color: #fff;
            font: 200 25px/20px Trasandina;
            padding-top: 10px;
          }
        `}
`;

export const ButtonSection = styled(ButtonGroup)`
  flex-direction: ${props => (props?.isMobileView ? 'column' : 'row')};
  width: 100%;
  margin-top: 10px;

  justify-content: space-between;
`;

export const Button = styled(RippleButton)`
  position: relative;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 50%;
    background: rgba(255, 255, 255, 0.03);
  }
`;
