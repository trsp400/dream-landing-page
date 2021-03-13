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

export const BoxCheck = styled.div`
padding-right: 20px;
`


export const MessageFeedbackStyle = styled(MessageFeedback)`
`;

export const BoxInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  padding: 0 25px;

  span {
    font: 400 1em Trasandina;
    color: #fff;
    align-self: flex-start;
  }
`;


export const Footer = styled.div`
  position: fixed;
  bottom: 10%;
  width: 100%;
  height: 8%;
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
      height: 90%;
    }

  }

`;
