import styled from 'styled-components';
import {
  Container as BootstrapContainer,
  Button as BootstrapButton,
} from 'react-bootstrap';

import { Modal, Header, Body } from '../../components/CustomComponents/Modal';

export const Container = styled(BootstrapContainer)``;
export const Button = styled(BootstrapButton)``;

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
  font: normal normal normal 1.2rem Trasandina;
`;
