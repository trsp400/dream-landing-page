import React, { FC, CSSProperties } from 'react';
import _ from 'lodash';
import colors from '../../../themes/default/colors';

import { ContainerLoading } from './styles';

interface LoadingProps {
  className?: string;
  color?: string;
  size?: string;
  speed?: 'normal' | 'fast';
}

const Loading: FC<LoadingProps> = ({
  color = colors.primary.orange,
  size = '120px',
  speed = 'normal',
}) => {
  const nums = _.range(1, 21);

  const speedValues = {
    normal: '18deg',
    fast: '36deg',
  };

  return (
    <ContainerLoading
      style={
        {
          '--color': color,
          '--size': size,
          '--speed': speedValues[speed],
        } as CSSProperties
      }
    >
      <div className="box-itens">
        {nums.map(n => (
          <span style={{ '--item': n } as CSSProperties} key={n}></span>
        ))}
      </div>
    </ContainerLoading>
  );
};

export default Loading;
