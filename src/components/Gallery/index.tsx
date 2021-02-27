import React, { memo } from 'react';
import { CardProps as BootstrapCardProps } from 'react-bootstrap';

import { Container, CardContainer, CardBody, CardFooter, Grid } from './styles';

interface CardProps extends BootstrapCardProps {
  icon?: JSX.Element[] | JSX.Element;
  iconSize: number;
  label?: string;
  labelColor?: string;
  backgroundColor?: string;
  onClick(event, value): void;
}

interface GalleryProps {
  store?: object;
  onClick(): void;
  children: any;
}

interface RowProps {
  children: any;
}

const Gallery: React.FC<GalleryProps> = ({ children, store, onClick }) => {
  return (
    <Container>
      {children.length > 1
        ? children.map(child => {
            return React.cloneElement(child, {
              store,
              onClick,
              key: Math.random(),
            });
          })
        : React.cloneElement(children, {
            store,
            onClick,
            key: Math.random(),
          })}
    </Container>
  );
};

export const Row: React.FC<RowProps> = ({ children, ...props }) => {
  return (
    <Grid>
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
  ...props
}) => {
  return (
    <CardContainer onClick={event => onClick(event, label)}>
      <CardBody iconSize={iconSize} backgroundcolor={backgroundColor}>
        {icon}
      </CardBody>
      <CardFooter color={labelColor}>{label}</CardFooter>
    </CardContainer>
  );
};

export default memo(Gallery);
