import styled, { css } from 'styled-components';
import {
  Container as ContainerBootstrap,
  Row as RowBootstrap,
  Col as ColBootstrap,
} from 'react-bootstrap';

interface PropsListDecision {
  isMobileView: boolean
}

export const Container = styled(ContainerBootstrap)`
  padding: 0;
`;
export const Row = styled(RowBootstrap)`

`;
export const Col = styled(ColBootstrap)`
`;

export const ListDecisionContainerStyled = styled.section<PropsListDecision>`
  height: auto;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin: 20px 0;
  padding: 10px 12px;
  position: relative;
  background-color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  border-radius: 10px;
  box-shadow: 0px 0px 6px 1px
    ${({ theme }) => theme.mobileTheme.colors.primary.orange};

  ${props => !props.isMobileView && css`
    width: 100% !important;
    height: 90% !important;
    flex-direction: column;

    margin-top: .7em;

    transition: all .6s cubic-bezier(0,1.13,1,1.45);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 20px 22px 3px rgba(0, 0, 0, 0.22);
      z-index: 999;
    }
  `}


  @media(max-height: 737px) and (max-width: 415px){
    height: 85%;
    margin-bottom: 14px;
    margin-top: 14px;
  }

  @media (max-height: 569px) and (max-width: 321px) {
    height: 70%;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const ListDecisionCheckStyled = styled.div<PropsListDecision>`
  height: 15px;
  width: 15px;
  margin-right: 12px;

  background-color: var(--color);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 50%;

  ${props => !props.isMobileView && css`
    margin-right: 0px;
    padding: 8px 0;
  `}

  /* @media (min-height: 640px) {
    height: 814px;
    width: 814px;
  } */

`;

export const ListDecisionTextStyled = styled.div<PropsListDecision>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  font: 400 1em Trasandina;

  color: #fff;
  /* height: max-content; */

  ${props => !props.isMobileView && css`
    font: 400 .8em/8px Trasandina !important;
    align-items: flex-start;

  `}

  @media(max-height: 737px) and (max-width: 415px){

  }

`;
