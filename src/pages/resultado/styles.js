import styled from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';

import RippleButton from '../../components/CustomComponents/Button';

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100vh;

  @keyframes up {
    0% {
      /* transform: translateY(100%); */
      top: 0;
    }
    100% {
      /* transform: translateY(0); */
      top: 30%;
    }
  }

  @keyframes down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

export const ContainerRate = styled.div`
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin-bottom: 2rem;

  position: relative;
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
`;

export const ContainerRateBoxItems = styled.p`
  background-color: ${({ bg }) => bg};
  color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
  margin: 0;
  padding: 5px 15px;
`;

export const ButtonShowGraphic = styled.button`
  color: ${({ theme }) => theme.mobileTheme.colors.primary.white};
  background-color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  font: normal normal bolder 17px Trasandina;

  position: absolute;
  border-radius: 50px;
  padding: 2px 8px;
  bottom: -8%;
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
`;
