import styled, { keyframes, css } from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';
import { Modal, Header } from '../../CustomComponents/Modal';

import MessageFeedback from '../../CustomComponents/MessageFeedback';

const animateErrorinformation = keyframes`
  0% { opacity: 0; transform: scale(0.4)}
  18% { opacity: 0; }
  50%, 100% {opacity: 1; transform: scale(1);}

`;

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
          margin-bottom: 5px;
        `
      : css`
          font-size: 48px;

          position: absolute;
          top: 25%;

          span {
            line-height: 45px;
          }
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

  padding: 25px;

  ${props =>
    props?.isMobileView
      ? css`
          > span[class="box-input_warning"] {
            color: #fff;
            font: lighter 1.1em/18px Trasandina;
            text-align: center;
            margin-bottom: 45px;
            padding: 0 8px;



            /* @media(max-height: 737px) and (max-width: 415px){
              margin-bottom: 8px;
              font-size: 13px;
              line-height: 12px;
            } */

          }

          div {
            width: 100%;
            height: 100%;

            input {
              width: 100%;
              padding: 22px 0;
            }


            @media(max-width: 375px) {
              input {
                padding: 20px 10px;
              }

            }
          }
        `
      : css`
          flex-direction: row;
          justify-content: start;
          padding: 0 0 25px 0;

          div {
            width: 50%;

          }


          input {
            width: 100%;
          }

        `}

  @media(max-width: 375px) {
    margin-top: 0px;
    padding-top: 0px;
  }

`;

export const ErrorInformation = styled.span`
  position: absolute;
  bottom: 4px;
  font-weight: bold;
  color: #fed330;

  animation: ${animateErrorinformation} 1.3s cubic-bezier(0.17, 0.89, 1, 1.27);
`;

export const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const BoxMessageFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  padding-left: 20px;
  margin-bottom: 74px;
`

export const InputContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: auto;
  padding-left: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    width: 50%;
    color: #fff;
    font: lighter 1em/16px Trasandina;
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
    align-items: baseline;

    padding-left: 6px;


    svg {
      height: .7em;
      fill: #fff;
      margin-left: 4px;
    }
  }
`

export const Footer = styled.div`
  position: fixed;
  bottom: 5em;
  width: 100%;
  height: 3.5em;
  display: flex;

  justify-content: space-between;
  padding: 0 10%;

  button {
    width: 100%;
    position: relative;
  }


  @media(max-width: 375px) {
    bottom: 1.5em;
  }

  /* @media(max-height: 737px) and (max-width: 415px){
    height: 3em;
    bottom: 7em;
  }

  @media (max-height: 569px) and (max-width: 321px) {
    height: 3em;
    bottom: ${props => props.isActiveInput ? "1.7em" : "7em"};
  } */
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalStyled = styled(Modal)`
  .custom-content {
    background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
    border: 1px solid ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  }
`;

export const HeaderStyled = styled(Header)`
  border: 0;
  padding: 0;
  padding-top: 1rem;

  padding: 10px;

  button.close {
    color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};
    text-shadow: 1px 1px 2px #000;
    margin: -1rem auto;
  }
`;

export const BodyStyled = styled(Body)`
  color: #fff;
  font: normal normal normal 1.2rem Trasandina;
  padding: 10px;
`;
