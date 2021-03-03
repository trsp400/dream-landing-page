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
  background-color: ${props => props.theme.desktopTheme.colors.primary.blue};
  cursor: pointer;
`;

export const CardBody = styled(Card.Body)`
  border: none;
  background-color: ${props => props?.backgroundcolor};
  border-radius: 10px;
  margin: 0 auto;

  margin-bottom: 5px;

  flex: none;

  ${props =>
    props.checked &&
    css`
      box-shadow: 2px -10px 25px 2px ${props.backgroundcolor};
    `}

  svg {
    height: ${props => props.iconsize}px;
    fill: #fff;
    margin: 0;
  }
`;

export const CardFooter = styled(Card.Footer)`
  border: none;
  background-color: ${props => props.theme.desktopTheme.colors.primary.blue};
  color: ${props => props.color};

  text-align: center;
  width: 150px;
`;
