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
  height: 100%;

  display: flex;
  flex-direction: column;

`;

export const Grid = styled.section<PropsGrid>`
  display: flex;
  position: relative;
  align-items: baseline;

  justify-content: ${props => props.lonelySon ? "center" : "space-between"} ;
`;

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 32%;

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
  padding: 15px;
  box-shadow: 1px 1px 5px 1px ${props => props?.backgroundcolor};

  @media (max-height: 640px) {
    padding: 8px;
  }


  ${props =>
    props.checked &&
    css`
      transform: scale(1.3);
      box-shadow: none;
      filter: drop-shadow(2px 2px 0 #9E402E);

      svg {
        transform: scale(1.3);
        filter: drop-shadow(2px 2px 0 #9E402E);
      }

  `}

  svg {
    height: ${props => props.iconsize}px;
    fill: #fff;

    @media (max-height: 640px) {
      height: 28px;
    }
  }
`;

export const CardFooter = styled(Card.Footer)`
  display: flex;
  border: none;

  padding-right: 0;
  padding-left: 0;

  color: ${props => props.color};
  background: transparent;
  font-weight: 600;
  font-size: ${props => props.labelSize}px;
  text-align: center;


`;
