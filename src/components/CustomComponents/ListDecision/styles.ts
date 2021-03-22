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
  height: 70%;
  width: 100%;
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
    margin-top: .7em;

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

export const ListDecisionCheckStyled = styled.div`
  height: 16px;
  width: 16px;
  margin-right: 12px;

  background-color: var(--color);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 50%;

  @media (max-height: 640px) {
    height: 14px;
    width: 14px;
  }
`;

export const ListDecisionTextStyled = styled.div<PropsListDecision>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font: 400 1em Trasandina;

  color: #fff;
  /* height: max-content; */

  ${props => !props.isMobileView && css`
    font: 400 .8em/8px Trasandina !important;
  `}

  @media(max-height: 737px) and (max-width: 415px){

  }

`;
