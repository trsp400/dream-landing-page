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
          height: auto;
          flex-direction: column;
          padding: 0;

        `
      : css`
          width: 1024px;
          height: 100%;
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
  /* height: auto; */
  flex-direction: column;
`;

export const BoxMessageFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  padding-left: 20px;
  margin-bottom: 74px;

  @media(max-width: 320px) {
   height: 5rem;
   margin-bottom: 16px;
  }
`


export const ListDecisionStyled = styled(ListDecision)`
  width: 200px;
  height: 220px;
  flex-direction: column;

  span {
    font-size: 1.5em;

    ${props => !props.isMobileView && css`
      line-height: 25px !important;
    `}
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
          display: flex;
          position: fixed;
          bottom:  5em;
          width: 100%;
          height:  3.5em;
          justify-content: space-between;
          padding: 0 10%;


          button {
            width: 100%;

            &:last-child {
              margin-left: 10px;
            }

            svg {
              height: 25px;
            }
          }

          @media(max-width: 375px) {
            position: relative;
            width: 100%;
            height: 3.5em;
            bottom: 0;
            display: flex;
            /* position: absolute; */
            justify-content: space-between;
            padding: 0 10%;
            margin: 30px 0 10px 0;

          }


          /* }
          @media(max-height: 737px) and (max-width: 415px){
            height: 3em;
            bottom: 7em;
          }
          @media (max-height: 640px) and (max-width: 360px) {
            bottom: 3.5em;
          } */
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
