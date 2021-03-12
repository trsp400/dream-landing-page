import styled, { css } from 'styled-components';
import {
  Card,
  Container as BootstrapContainer,
  Row as BootstrapRow,
} from 'react-bootstrap';

export const Container = styled(BootstrapContainer)`
  margin: 0 auto;
`;

export const Grid = styled(BootstrapRow)``;

export const CardContainer = styled(Card)`
  border: 0;
  outline: 0;
  margin: 0 auto;
  padding: 2px;
  background: none;
  cursor: pointer;
`;

export const CardBody = styled(Card.Body)`
  border: none;
  background-color: ${props => props?.backgroundcolor};
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 5px;

  flex: none;

  box-shadow: 1px 1px 5px 1px ${props => props?.backgroundcolor};

  ${props =>
    props.checked &&
    css`
      box-shadow: 1px 1px 10px 1px #000;
    `}

  svg {
    height: ${props => props.iconsize}px;
    fill: #fff;
    margin: 0;
  }
`;

export const CardFooter = styled(Card.Footer)`
  color: ${props => props.color};
  background: none;
  border: none;

  font-size: ${props => props.labelsize}px;
  text-align: center;
  width: 140px;
`;
