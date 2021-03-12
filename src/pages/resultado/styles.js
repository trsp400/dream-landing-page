import styled from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';

import { Modal, Header, Body } from '../../components/CustomComponents/Modal';
import RippleButton from '../../components/CustomComponents/Button';

export const Container = styled(BootstrapContainer)`
  height: 100vh;
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
  z-index: 999;
  position: relative;
`;

export const ModalStyled = styled(Modal)`
  .custom-content {
    background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
    border: 1px solid ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  }

  .custom-dialog {
    top: 20%;
  }
`;
export const HeaderStyled = styled(Header)`
  border: 0;
  padding: 0;
  padding-top: 1rem;

  button.close {
    color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};
    text-shadow: 1px 1px 2px #000;
    margin: -1rem auto;
  }
`;
export const BodyStyled = styled(Body)`
  color: #fff;
  font: normal normal normal 14px Trasandina;
  text-align: center;
`;
