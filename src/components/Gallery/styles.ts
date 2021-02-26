import styled from 'styled-components';
import {
  Card,
  Container as BootstrapContainer,
  Row as BootstrapRow,
} from 'react-bootstrap';

export const Container = styled(BootstrapContainer)``;

export const Grid = styled(BootstrapRow)``;

export const CardContainer = styled(Card)``;

export const CardBody = styled(Card.Body)`
  border: none;
  background-color: ${props => props.theme.desktopTheme.colors.primary.blue};
`;

export const CardFooter = styled(Card.Footer)`
  border: none;
  background-color: ${props => props.theme.desktopTheme.colors.primary.blue};
`;
