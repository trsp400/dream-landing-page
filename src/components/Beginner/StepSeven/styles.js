import styled, { css } from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';

import MessageFeedback from '../../CustomComponents/MessageFeedback';
import ListDecision from '../../CustomComponents/ListDecision';

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
        `}
`;

export const MessageFeedbackStyle = styled(MessageFeedback)`
  ${props =>
    props?.isMobileView
      ? css`
          /* margin-bottom: 8px; */
          @media(max-height: 480px) and (max-width: 320px) {
            margin-bottom: 8px;
          }
        `
      : css`
          font-size: 48px;

          position: absolute;
          top: 15%;
        `}
`;

export const BoxInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  margin-top: 25px;

  padding: 50px;


  @media(max-height: 640px) {
  }
`;

export const ErrorInformation = styled.span`
  position: absolute;
  top: 65%;

  &:nth-child(2) {
    ${props =>
      props?.isMobileView
        ? css`
            margin-bottom: 16px;
          `
        : css`
            position: absolute;
            top: 30%;

            span {
              line-height: 50px;
          }
        `}
  }
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

export const ListDecisionStyled = styled(ListDecision)`
  width: 200px;
  height: 200px;
  flex-direction: column;
  span {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const BoxListDecision = styled.div`
  ${props =>
    props?.isMobileView
      ? css`
          margin-top: 25px;
          padding: 0 16px;
        `
      : css`
          position: absolute;
          top: 50%;
        `}
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 35%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    width: 700px;
  }

  button {
    width: 30%;
    margin-top: 2.5%;
  }
`;


// bottom:  ${props => props.isActiveInput ? "25%" : "15%"};
// height: ${props => props.isActiveInput ? "10%" : "7%"};

// export const Footer = styled.div`
//   position: fixed;
//   bottom: 15%;
//   width: 100%;
//   height: 7%;
//   display: ${props => props.isActiveInput ? "none" : "flex"};

//   justify-content: space-between;
//   padding: 0 10%;

//   button {
//     width: 100%;
//     position: relative;
//   }

//   @media (max-height: 640px) {
//     height: 9%;
//     bottom: 22%;

//   }
// `;

export const Footer = styled.div`
  ${props =>
    props?.isMobileView
      ? css`
          position: fixed;
          bottom: 8em;
          width: 100%;
          height: 4em;
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

          @media (max-height: 640px) and (max-width: 320px){
            height: 3em;
            bottom: 6em;

            button {
              svg {
                height: 25px;
              }
            }

          }
        `
      : css`
          position: absolute;
          width: 100%;
          top: 90%;

          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          padding: 0 10%;

          button {
            height: 50px;
          }
        `}
`;
