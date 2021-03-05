import styled from 'styled-components';
import {
  Container as ContainerBootstrap,
  Row as RowBootstrap,
  Col as ColBootstrap,
} from 'react-bootstrap';

export const Container = styled(ContainerBootstrap)``;
export const Row = styled(RowBootstrap)``;
export const Col = styled(ColBootstrap)``;

export const ListDecisionContainerStyled = styled.div`
  min-height: 85%;
  height: 85%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.mobileTheme.colors.primary.orange};
  border-radius: 10px;
  box-shadow: 0px 0px 6px 1px
    ${({ theme }) => theme.mobileTheme.colors.primary.orange};

`;

export const ListDecisionCheckStyled = styled.div`
  height: 14px;
  width: 14px;

  margin: 0 auto;
  position: absolute;

  background-color: var(--color);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ListDecisionTextStyled = styled.p`
  width: 100%;
  font: normal normal 400 16px Trasandina;
  margin: auto 0;
  color: #fff;
  height: max-content;
`;
