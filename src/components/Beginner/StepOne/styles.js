import styled from 'styled-components';

import { Container as BootstrapContainer } from 'react-bootstrap';
import { Row as RowComponent } from '../../CustomComponents/IconGallery';
import { Modal, Header, Body } from '../../CustomComponents/Modal';
import MessageFeedback from '../../CustomComponents/MessageFeedback';

export const Container = styled(BootstrapContainer)`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  padding: 0;
`;

export const MessageFeedbackStyle = styled(MessageFeedback)`
  margin-bottom: 8px;

  &:nth-child(2){
    margin-bottom: 16px;
  }
`;

export const ModalStyled = styled(Modal)`
  .custom-content {


    background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
    border: 1px solid ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  }

  .custom-dialog {}
`;

export const HeaderModalStyled = styled(Header)`
  border: 0;
  padding: 0;
  padding-top: 1rem;

  button.close {
    color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};
    text-shadow: 1px 1px 2px #000;
    margin: -1rem auto;
  }
`;


export const BodyModalStyled = styled(Body)`

& .content-body {
  margin-bottom: 40px;
  font: normal normal normal 1.4rem Trasandina;
  text-align: center;
}
  color: #fff;
  font: normal normal normal 1.2rem Trasandina;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 20px;


  button {
    height: 60%;

    svg {
      fill: #fff;
      height: 40%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

`;
