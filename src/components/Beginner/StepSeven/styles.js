import styled, { keyframes, css } from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';
import { Modal, Header } from '../../CustomComponents/Modal';

import MessageFeedback from '../../CustomComponents/MessageFeedback';

const animateErrorinformation = keyframes`
  0% { bottom: 45%; opacity: 0; transform: scale(0.4)}
  18% { opacity: 0; }
  50%, 100% { bottom: 20%; opacity: 1; transform: scale(1);}

`;

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

  padding: 50px;
`;

export const ErrorInformation = styled.span`
  position: absolute;
  top: 65%;

  color: #fff200;
  font-weight: bold;

  animation: ${animateErrorinformation} 1.3s cubic-bezier(0.17, 0.89, 1, 1.27);
`;

export const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;

  ${props =>
    props?.isMobileView
      ? css`
          > span {
            padding: 0 30px;
            text-align: center;
            line-height: 18px;
            color: #fff;
          }
        `
      : css`
          > span {
            margin-top: 25%;
            padding: 0 10%;
            text-align: center;
            line-height: 40px;
            font-size: 35px;
            color: #fff;
          }
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

export const Footer = styled.div`
  position: fixed;
  bottom: 15%;
  width: 100%;
  height: 7%;
  display: ${props => props.isActiveInput ? "none" : "flex"};

  justify-content: space-between;
  padding: 0 10%;

  button {
    width: 100%;
    position: relative;
  }
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
