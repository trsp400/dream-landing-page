import React, { FC, CSSProperties } from 'react';

import SvgDefault from '../../../assets/icons/feedback-icon.svg';
import { TextStyled } from './styles';

interface TextProps {
  children?: string;
  className?: string;
  strong?: 'normal' | 'bold' | 'bolder' | 'italic' | 'lighter';
  image?: JSX.Element[] | JSX.Element;
}

const Text: FC<TextProps> = ({
  strong = 'normal',
  image = <SvgDefault />,
  children,
  ...props
}) => (
  <TextStyled style={{ '--strong': strong } as CSSProperties} {...props}>
    {image} {children}
  </TextStyled>
);

export default Text;
