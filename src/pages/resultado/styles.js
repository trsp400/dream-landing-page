import styled, { css, keyframes } from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';

import LineChart from '../../components/CustomComponents/LineChart';
import RippleButton from '../../components/CustomComponents/Button';


export const TitleDesktop = styled.h1`
  text-align: center;
  color: #fff;
`;

export const BoxContentDesktop = styled.div`
  width: 100%;
  height: 100%;
  max-height: 460px;

  display: flex;
  padding-top: 40px;

  color: #fff;
`;

export const BoxContextChart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding-right: 30px;
`;

export const BoxContextProfile = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 18px 30px;

`;

export const TitleContextProfile = styled.div`

  h3 {
    line-height: 12px;

    span {
      color: #ea5e45;
    }
  }

  > span {
    font: italic 20px Trasandina;
  }


`;

export const BoxContextProfileResult = styled.div`
  flex: 1;
  padding-top: 40px;
  font: italic 18px/22px Trasandina;
`;

export const FooterContextProfile = styled.div`
  span {
    font: 200 16px Trasandina;

    strong {
      font-weight: bold;
    }
  }
`;





// -------------------- MOBILE -------------------------

const introAnimateChart = keyframes`
  0% {
    transform: scale(0) translateY(150%);
    /* transform: translate(100%, 50%); */
    opacity: 0;
  }

  100% {
    transform: scale(1) translateY(55%);
    box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.74);
    /* transform: translate(0%, 50%); */
  }
`;

const exitAnimateChart = keyframes`
  0% {
    transform: scale(1) translateY(55%);
    box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.74);
    /* transform: translate(0%, 50%); */
  }

  100% {
    transform: scale(0) translateY(150%);
    /* transform: translate(100%, 50%); */
    opacity: 0;
  }
`;

const messagePressButtonAnimate = keyframes`
  0%, 20%, 35% {
    opacity: 0;
    bottom: -15px;
  }

  100% {
    opacity: 1;
    bottom: -24px;
  }

`;

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px 10px;
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (min-height: 720px) and (min-width: 1280px) {
    margin-top: 70px;
  }

`;

export const ContainerRate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 14px 14px 0 0;
  background-color: #fff;
  font-size: 13px;
  /* margin-bottom: 35px; */

  ${props => props.isMobileView && css`
    position: absolute;
    border-radius: 14px;
    margin-bottom: 18px;
    transform: translateY(30%);
    transition: transform 0.2s cubic-bezier(0.26, 0.87, 0.87, 1.15);
  `}

  ${props =>
    props.isVisibleChart && props.isMobileView
      && css`
          transform: translateY(10%);
        `
    }
`;

export const ContainerRateTitle = styled.p`
  margin-bottom: 10px;

  color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
`;

export const ContainerRateSubTitle = styled.p`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.mobileTheme.colors.primary.black};
  line-height: 15px;
  font-weight: lighter;
`;

export const ContainerRateBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 360px;
`;

export const ContainerRateBoxItems = styled.div`
  width: 100%;
  text-align: center;

  color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
  padding: 5px 10px;

  &:first-child {
    background: #c5dee5;
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    background: #fecfc4;
    border-radius: 0 3px 3px 0;
  }
`;

export const ButtonShowGraphic = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};

  position: absolute;
  bottom: -12px;
  transition: transform 0.3s;
  transform: scale(1) rotate(0deg);

  svg {
    fill: #fff;
    width: 60%;
  }

  ${props =>
    props?.isVisibleChart &&
    css`
      transform: rotate(180deg) scale(0.9);
    `}
`;

export const MessagePressChart = styled.span`
  width: 160px;
  position: absolute;
  opacity: 0;
  bottom: -24px;

  font: normal 14px Trasandina;
  color: #fff;

  transition: 1s;

  ${props =>
    !props.isVisibleChart &&
    css`
      animation: ${messagePressButtonAnimate} 2s infinite 1s alternate-reverse;
    `}
`;

export const LineChartContainer = styled.div`
  width: ${props => (props?.isMobileView ? '94%' : '100%')};
  height: auto;

  div {
    border-radius: 0 0 14px 14px !important;
  }

  ${props => props.isMobileView && css`
    position: absolute;
    transform: scale(0) translateY(55%);
    transition: transform 0.3s;

    div {
      border-radius: 6px !important;
    }
  `}

  /* transform: translate(100%, 50%); */

  &::-webkit-scrollbar {
    display: none;
  }

  ${props =>
    (props.isVisibleChart && props.isMobileView)
      && css`
          animation: ${introAnimateChart} 0.4s
          cubic-bezier(0.11, 0.9, 0.76, 1.12);
          transform: scale(1) translateY(55%);
          /* transform: translate(0%, 50%) ; */
  `}

  ${props =>
      (!props.isVisibleChart && props.isMobileView)
        && css`
          animation: ${exitAnimateChart} 0.2s linear;
        `
  }
`;


export const LineChartStyled = styled(LineChart)`
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const ButtonContainerDesktop = styled.div`
  display: flex;
  margin-top: 15px;

  button:nth-child(even) {
    margin: 0 30px;
  }
`;


export const Button = styled(RippleButton)`
  width: 50%;
  font-size: 12px;
  padding: 3px 1px;
`;

export const TextResult = styled.div`
  text-align: center;
  font: normal normal 400 13px Trasandina;
  color: #fff;
  position: absolute;
  padding-bottom: 12px;

  ${props =>
    props.isVisibleChart
      ? css`
          transform: translateY(520px);
        `
      : css`
          transform: translateY(200px);
        `}

  transition: .2s cubic-bezier(.26,.87,.87,1.15);
`;
