import React, { FC, StyleHTMLAttributes } from 'react';
import { useSpring } from 'react-spring';

import { ContainerCard, Card1 } from './styles';

interface SpringInterpolateProps {
  children: JSX.Element[] | JSX.Element;
  styles: StyleHTMLAttributes<any>;
}

const SpringInterpolate: FC<SpringInterpolateProps> = ({
  children,
  styles,
}) => {
  const calc = (x?: any, y?: any) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x?: any, y?: any) => `translate3d(${x/70}px,${y/70}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <ContainerCard
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Card1
        style={{
          transform: props.xy.interpolate(trans1),
        }}
      >
        {children}
      </Card1>
    </ContainerCard>
  );
};

export default SpringInterpolate;
