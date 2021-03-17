import styled, { css, keyframes } from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';

import LineChart from '../../components/CustomComponents/LineChart';
import RippleButton from '../../components/CustomComponents/Button';


const introAnimateChart = keyframes`
  0% {
    transform: scale(0) translateY(50%);
    /* transform: translate(100%, 50%); */
  }

  100% {
    transform: scale(1) translateY(50%);
    /* transform: translate(0%, 50%); */
  }
`

const exitAnimateChart = keyframes`
  0% {
    transform: scale(1) translateY(50%);
    /* transform: translate(0%, 50%); */
  }

  100% {
    transform: scale(0) translateY(50%);
    /* transform: translate(100%, 50%); */
    opacity: 0;
  }
`

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
`;

export const ContainerRate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 12px;
  border-radius: 14px;

  background-color: #fff;
  font-size: 13px;
  margin-bottom: 18px;
  transition: transform .2s cubic-bezier(.26,.87,.87,1.15);


  ${props => props.isVisibleChart ? css`
    transform: translateY(10%);
  ` :
    css`
      transform: translateY(90%);
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
  transition: transform .3s;
  transform: scale(1);

  svg {
    fill: #fff;
    width: 60%;
  }

  ${props =>
    !props?.isVisibleChart &&
    css`
      transform: rotate(180deg) scale(0.9);
    `}
`;

export const LineChartContainer = styled.div`
  width: 94%;
  height: auto;
  position: absolute;
  transform: scale(0) translateY(50%);
  /* transform: translate(100%, 50%); */

  transition: transform .3s;

${props => props.isVisibleChart ?
  css`
    animation: ${introAnimateChart} .4s cubic-bezier(.11,.9,.76,1.12);
    transform: scale(1) translateY(50%);
    /* transform: translate(0%, 50%) ; */
  ` :
  css`
    animation: ${exitAnimateChart} .2s linear;
  `
}



`

export const LineChartStyled = styled(LineChart)`

`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
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

  ${props => props.isVisibleChart ?
    css`
      transform: translateY(160%);
    `
    : css`
      transform: translateY(90%);
    `
}

  transition: .2s cubic-bezier(.26,.87,.87,1.15);
`;
