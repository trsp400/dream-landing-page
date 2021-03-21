import styled, { css } from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';

import MessageFeedback from '../../CustomComponents/MessageFeedback';

export const Container = styled(BootstrapContainer)`
  ${props =>
    props?.isMobileView
      ? css`
          display: flex;
          width: 100%;
          height: 100vh;
          flex-direction: column;
          padding: 0;
        `
      : css`
          width: 1024px;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          > div {
            display: flex;
            width: 100%;
            align-content: center;
            justify-content: center;
            flex-direction: column;
          }
        `}
`;

export const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 55%;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: space-around;

  > input {
    width: 500px;
  }
`;

export const MessageFeedbackStyle = styled(MessageFeedback)`
  ${props =>
    props?.isMobileView
      ? css`
          margin-bottom: 8px;
        `
      : css`
          font-size: 48px;

          position: absolute;
          top: 25%;
        `}

  &:nth-child(2) {
    ${props =>
      props?.isMobileView
        ? css`
            margin-bottom: 16px;
          `
        : css`
            position: absolute;
            top: 40%;
          `}
  }
`;

export const BoxInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    !props?.isMobileView &&
    css`
      input {
        width: 500px;
      }
    `}
`;

// bottom:  ${props => props.isActiveInput ? "25%" : "15%"};
// height: ${props => props.isActiveInput ? "10%" : "7%"};

export const Footer = styled.div`
  position: fixed;
  display: flex;
  bottom:  8em;
  width: 100%;
  height:  3.5em;

  justify-content: space-between;
  padding: 0 10%;

  button {
    width: 100%;
    position: relative;

    &:last-child {
      margin-left: 10px;
    }

    svg {
      height: 25px;
    }
  }

  @media(max-height: 737px) and (max-width: 415px){
    height: 3em;
    bottom: 7em;
    /* bottom: ${props => props.isActiveInput ? "6em" : "7em"}; */
  }

  @media (max-height: 569px) and (max-width: 321px) {
    height: 3em;
    bottom: ${props => props.isActiveInput ? "6em" : "7em"};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
