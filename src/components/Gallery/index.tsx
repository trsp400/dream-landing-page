import React, { memo } from 'react';
import { CardProps as BootstrapCardProps } from 'react-bootstrap';

import { Container, CardContainer, CardBody, CardFooter, Grid } from './styles';

interface CardProps extends BootstrapCardProps {
  icon?: JSX.Element[] | JSX.Element;
  label?: string;
}

const Gallery: React.FC<CardProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export const Card: React.FC<CardProps> = ({ icon: Icon, label, ...props }) => {
  return (
    <CardContainer {...props}>
      <CardBody>{Icon}</CardBody>
      <CardFooter>{label}</CardFooter>
    </CardContainer>
  );
};

export default memo(Gallery);
