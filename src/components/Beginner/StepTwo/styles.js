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

          @media(max-height: 737px) and (max-width: 415px){

            /* height: ${props => props.isActiveInput ? "150vh" : "100vh"}; */
          }

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
  top: 60%;
  width: 100%;
  height: auto;
  padding-left: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    width: 50%;
    text-align: left;

  }
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

export const MessageFeedbackStyle = styled(MessageFeedback)`
  ${props =>
    props?.isMobileView
      ? css`
          /* margin-bottom: 8px; */

          @media(max-height: 737px) and (max-width: 415px){
            &:nth-child(2) {
              margin-top: 14px;
              margin-bottom: 0;
            }
            margin-bottom: 8px;
          }
        `
      : css`
          &:first-child {
            span {
              line-height: 50px;
            }
          }
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
            top: 40%;
          `
    }
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

    @media(max-height: 640px) {
    }
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
    display: flex;
    /* align-items: flex-start; */
    width: 100%;
    position: relative;
    font-size: 18px;

    &:last-child {
      margin-left: 10px;
    }

    svg {
      height: 25px ;
    }
  }

  @media (max-height: 737px) and (max-width: 415px) {
    height: 3em;
    bottom: 7em;
    /* bottom: ${props => props.isActiveInput ? "7em" : "7em"}; */
  }

  @media (max-height: 569px) and (max-width: 321px) {
    height: 3em;
    bottom: ${props => props.isActiveInput ? "3.7em" : "7em"};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
