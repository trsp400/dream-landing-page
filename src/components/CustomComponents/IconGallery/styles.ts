import styled, { css } from 'styled-components';
import {
  Card,
  Container as BootstrapContainer,
  Row as BootstrapRow,
  CardProps as BootstrapCardProps
} from 'react-bootstrap';


interface PropsCardBody {
  checked: boolean,
  iconsize: number,
  backgroundcolor: string
}

interface PropsGrid {
  lonelySon?: boolean;
}

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.section<PropsGrid>`
  display: flex;
  position: relative;

  justify-content: ${props => props.lonelySon ? "center" : "space-between"} ;
`;

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 38%;
  height: 27%;

  position: relative;


  align-items: center;
  border: none;


  background-color: transparent;
  cursor: pointer;

`;

export const CardBody = styled(Card.Body)<PropsCardBody>`
  position: relative;
  border: none;
  background-color: ${props => props?.backgroundcolor};
  border-radius: 6px;
  margin: 0;
  padding: 15px;
  box-shadow: 1px 1px 5px 1px ${props => props?.backgroundcolor};

  ${props =>
    props.checked &&
    css`
      box-shadow: 1px 1px 10px 1px #000;
    `}

  svg {
    height: ${props => props.iconsize}px;
    fill: #fff;
  }
`;

export const CardFooter = styled(Card.Footer)`
  display: flex;
  /* height: 100%; */
  border: none;
  color: ${props => props.color};
  font-weight: 600;
  font-size: ${props => props.labelSize}px;
  text-align: center;

`;
