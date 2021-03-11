import styled from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';

import MessageFeedback from '../../CustomComponents/MessageFeedback';

export const Container = styled(BootstrapContainer)`
  display: flex;
  width: 100%;
  height: 93vh;
  flex-direction: column;
  padding: 0;
`;

export const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const MessageFeedbackStyle = styled(MessageFeedback)`

  &:nth-child(2){
    margin-bottom: 16px;

  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
