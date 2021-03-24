import React, { memo } from 'react';
import { CardProps as BootstrapCardProps } from 'react-bootstrap';

import { Container, CardContainer, CardBody, CardFooter, Grid } from './styles';

export interface CardProps extends BootstrapCardProps {
  icon?: JSX.Element[] | JSX.Element;
  iconSize: number;
  label?: string;
  labelColor?: string;
  backgroundColor?: string;
  onClick?: (event, value: string) => void;
  objectiveValue?: string;
  labelSize?: number;
}

interface GalleryProps {
  objectiveValue?: string;
  onClick?: () => void;
  children: any;
}

interface RowProps {
  children: any;
}

const IconGallery: React.FC<GalleryProps> = ({
  children,
  objectiveValue,
  onClick,
}) => {
  return (
    <Container>
      {children.length > 1
        ? children.map(child => {
            return React.cloneElement(child, {
              objectiveValue,
              onClick,
              key: Math.random(),
            });
          })
        : React.cloneElement(children, {
            objectiveValue,
            onClick,
            key: Math.random(),
          })}
    </Container>
  );
};

export const Row: React.FC<RowProps> = ({ children ,...props }) => {
  return (
    <Grid lonelySon={!children?.length}>
      {children.length > 1
        ? children.map(child => {
            return React.cloneElement(child, {
              ...props,
              key: Math.random(),
            });
          })
        : React.cloneElement(children, {
            ...props,
            key: Math.random(),
          })}
    </Grid>
  );
};

export const Card: React.FC<CardProps> = ({
  icon,
  iconSize,
  label,
  labelColor,
  backgroundColor,
  onClick,
  objectiveValue,
  labelSize,
}) => {

  return (
    <CardContainer onClick={event => (onClick ? onClick(event, label) : null)} >
      <CardBody
        checked={objectiveValue === label}
        iconsize={iconSize}
        backgroundcolor={backgroundColor}
      >
        {icon}
      </CardBody>
      <CardFooter
        labelSize={labelSize || 15}
        color={labelColor}
        checked={objectiveValue === label}
        >
        {label}
      </CardFooter>
    </CardContainer>
  );
};

export default memo(IconGallery);
