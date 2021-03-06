import styled, { css } from 'styled-components';

import { Container as BootstrapContainer } from 'react-bootstrap';
import { Modal, Header, Body } from '../../CustomComponents/Modal';
import MessageFeedback from '../../CustomComponents/MessageFeedback';

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

export const BoxIconGallery = styled.div`
  height: auto;
  flex: 1;
`

export const BoxMessageFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding-left: 20px;
  margin-bottom: 36px;

  @media(max-width: 375px) {
   height: 4rem;
   margin-bottom: 44px;
  }
`

export const DesktopGalleryContainer = styled.div`
  position: absolute;
  top: 55%;
  width: 100%;
  height: auto;
  flex-direction: column;
  padding: 0;


  div{
    transition: transform .3s cubic-bezier(.15,1.01,1,1.09);
    section {
      > div{
        &:hover {
            transform: translateY(-6px);
        }
      }
    }
}


`;

export const MessageFeedbackStyle = styled(MessageFeedback)`
  ${props =>
    props?.isMobileView
      ? css`
          /* margin-bottom: 28px; */
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
            margin-bottom: 20px;
          `
        : css`
            position: absolute;
            top: 30%;
          `}
  }
`;

export const ModalStyled = styled(Modal)`

  .custom-content {
    background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
    border: 1px solid ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  }

  .custom-dialog {
  }
`;

export const HeaderModalStyled = styled(Header)`
  border: 0;
  padding: 0;
  padding-top: 1rem;

  button.close {
    color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};
    text-shadow: 1px 1px 2px #000;
    margin: -1rem auto;
  }
`;

export const BodyModalStyled = styled(Body)`

  display: flex;
  flex-direction: column;
  align-items: center;

  & .content-body {
    margin-bottom: 40px;
    font: normal normal normal 1.4rem Trasandina;
    text-align: center;
  }

  color: #fff;
  font: normal normal normal 1.2rem Trasandina;

  & .content-body {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    font: normal normal normal 1.4rem Trasandina;
    text-align: center;
  }

  .body-modal__input_desktop {
    display: flex;
    justify-content: center;
  }

  .boxInput_input {
    position: relative;
    width: 100%;
    height: 100%;
  }

`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 20px;

  button {
    height: 60%;
    width: 100%;

    &:first-child {
      margin-right: 10px;
    }

    svg {
      fill: #fff;
      height: 40%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
