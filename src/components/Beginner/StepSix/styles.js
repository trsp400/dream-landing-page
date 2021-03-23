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
          @media(max-height: 737px) and (max-width: 415px){
            margin-bottom: 8px;
          }
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
            position: absolute;
            top: 25%;

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
  height: 220px;
  flex-direction: column;

  span {
    font-size: 1.5em;
    line-height: 25px;
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
          width: 100%;
        `}
`;


export const BoxButton = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;

  button {
    display: flex;
    width: 5em;
    justify-content: flex-end;

    svg {
      height: 1em;
      fill: #fff;
    }


    &:first-of-type {
      width: 3em;
      margin-right: 20px;
      justify-content: center;
    }

  }
`

// bottom:  ${props => props.isActiveInput ? "25%" : "15%"};
// height: ${props => props.isActiveInput ? "10%" : "7%"};

export const Footer = styled.div`
  ${props =>
    props?.isMobileView
      ? css`
          position: fixed;
          bottom:  8em;
          width: 100%;
          height:  3.5em;
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
              height: 25px;
            }
          }
          @media(max-height: 737px) and (max-width: 415px){
            height: 3em;
            bottom: 7em;
          }
          @media (max-height: 640px) and (max-width: 360px) {
            bottom: 3.5em;
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


// height: 85%;
//     margin-bottom: 14px;
//     margin-top: 14px;
