import styled, { css } from 'styled-components';
import Select from 'react-select';

import MessageFeedback from '../../CustomComponents/MessageFeedback';

import { Container as BootstrapContainer } from 'react-bootstrap';

export const Container = styled(BootstrapContainer)`
  ${props =>
    props?.isMobileView
      ? css`
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          padding: 0;
        `
      : css`
          width: 1024px;
          height: 100%;
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
          /* margin-bottom: 8px; */
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

export const SelectTime = styled(Select)`
`;

export const BoxMessageFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding-left: 20px;
  margin-bottom: 74px;

  @media(max-width: 320px) {
   height: 4rem;
   margin-bottom: 44px;
  }

`

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
          padding: 23px;

          /* @media(max-height: 737px) and (max-width: 415px){
            padding: ${props => props.isActiveInput && "1px"};
          } */
        `
      : css`
          display: flex;
          align-items: center;
          width: 100%;

          input {
            width: 50%;
            text-align: left;
            margin-right: 35px;
           }
        `}
`;


export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 60%;
  height: auto;
  padding-left: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;

export const BoxButton = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;

  button {
    display: flex;
    width: 5em;
    justify-content: flex-end;;

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
  position: fixed;
  bottom:  5em;
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

  /* @media(max-height: 737px) and (max-width: 415px){
    height: 3em;
    bottom: ${props => props.isActiveInput ? "5em" : "7em"};

    button {
      svg {
        height: 25px;
      }
    }
  }

  @media (max-height: 569px) and (max-width: 321px) {
    height: 3em;
    bottom: ${props => props.isActiveInput ? "1em" : "7em"};
  } */
`;
export const ButtonContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 15px;
  /* margin-top: ${props => props.isActiveInput ? "15px" : "60px"}; */
  /* margin-top: 60px; */

  button {
    width: 5em;

    &:last-child {
      margin-left: 14px;
    }
  }

  /* @media(max-height: 737px) and (max-width: 415px){
    button {
      padding: 4px 0;
      font-size: 16px;
    }
  } */
`;
