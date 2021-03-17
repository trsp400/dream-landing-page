import styled, { css } from 'styled-components';

import MessageFeedback from '../../CustomComponents/MessageFeedback';

import { Container as BootstrapContainer } from 'react-bootstrap';

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

export const MessageFeedbackStyle = styled(MessageFeedback)`
  ${props =>
    props?.isMobileView
      ? css`
          margin-bottom: 8px;
        `
      : css`
          font-size: 48px;

          position: absolute;
          top: 15%;
        `}

  &:nth-child(2) {
    ${props =>
      props?.isMobileView
        ? css`
            margin-bottom: 16px;
          `
        : css`
            span {
              line-height: 50px;
            }
            position: absolute;
            top: 30%;
          `}
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BoxInput = styled.div`
  ${props =>
    props?.isMobileView
      ? css`
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: auto;
          padding: 20px;
        `
      : css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20%;

          input {
            width: 500px;
          }
        `}
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
export const ButtonContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 15px;
  margin-top: 50px;

  button {
    width: 5em;

    &:last-child {
      margin-left: 14px;
    }
  }
`;
