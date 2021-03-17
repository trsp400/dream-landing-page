import styled from 'styled-components';

import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container as BootstrapContainer } from 'react-bootstrap';

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

export const BoxInput = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 15px;
`;

// bottom:  ${props => props.isActiveInput ? "25%" : "15%"};
// height: ${props => props.isActiveInput ? "11%" : "8%"};
export const Footer = styled.div`
  position: fixed;
  bottom:  ${props => props.isActiveInput ? "25%" : "15%"};
  width: 100%;
  height: ${props => props.isActiveInput ? "10%" : "7%"};
  display: flex;

  justify-content: space-between;
  padding: 0 10%;

  button {
    width: 100%;
    position: relative;

    &:last-child {
      margin-left: 10px;
    }


    svg {
      height: 25px ;
    }

  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
