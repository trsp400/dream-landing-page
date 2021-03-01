import React, { FC, CSSProperties } from 'react';
import _ from 'lodash';
import colors from '../../../themes/default/colors';

import { ContainerLoading } from './styles';

let nums = _.range(1, 21);

interface LoadingProps {
  className?: string;
  color?: string;
}

const Loading: FC<LoadingProps> = ({ color = colors.primary.orange }) => (
  <ContainerLoading style={{ '--color': color } as CSSProperties}>
    <div className="box-itens">
      {nums.map(n => (
        <span style={{ '--item': n } as CSSProperties} key={n}></span>
      ))}
    </div>
  </ContainerLoading>
);
export default Loading;
