import React, { FC } from 'react';
import { ModalProps as ModalPropsForCustom } from 'react-bootstrap';

import {
  ModalStyled,
  BodyStyled,
  HeaderStyled,
  TitleStyled,
  FooterStyled,
} from './styles';

interface ModalProps extends ModalPropsForCustom {
  children?: JSX.Element[] | JSX.Element | any;
  className?: string;
  contentClassName?: string;
  dialogClassName?: string;
  visible: boolean;
  setVisible(value: any): void;
}

interface ChildrenProps {
  children?: JSX.Element[] | JSX.Element | any;
}

export const Header: FC<ChildrenProps> = ({ children, ...props }) => (
  <HeaderStyled {...props}>{children}</HeaderStyled>
);
export const Title: FC<ChildrenProps> = ({ children, ...props }) => (
  <TitleStyled {...props}>{children}</TitleStyled>
);
export const Footer: FC<ChildrenProps> = ({ children, ...props }) => (
  <FooterStyled {...props}>{children}</FooterStyled>
);

export const Body: FC<ChildrenProps> = ({ children, ...props }) => (
  <BodyStyled {...props}>{children}</BodyStyled>
);

export const Modal: FC<ModalProps> = ({
  visible,
  children,
  contentClassName,
  dialogClassName,
  setVisible,
  ...props
} : ModalProps) => (
  <ModalStyled
    size="sm"
    show={visible}
    onHide={() => setVisible(false)}
    animation
    centered
    contentClassName={contentClassName}
    dialogClassName={dialogClassName}
    {...props}
  >
    {children}
  </ModalStyled>
);
