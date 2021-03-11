import React, { useCallback, useState, useEffect, memo } from 'react';
import { useTransition, animated } from 'react-spring';

import './styles.css';

import Traveler from '../../../images/traveler.png';
import TravelerBackground from '../../../images/traveler_background.png';
import Chef from '../../../images/chef.png';
import Ballet from '../../../images/ballet.png';
import DreamMachine from '../../../images/maquinaDosSonhos.png';

const slides = [
  { id: 0, url: DreamMachine, background: TravelerBackground },
  { id: 1, url: Traveler, background: TravelerBackground },
  { id: 2, url: Chef, background: TravelerBackground },
  { id: 3, url: Ballet, background: TravelerBackground },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(slides[index], item => item.id, {
    from: {
      opacity: 0,
      transform: 'translateX(400px)',
    },

    enter: { opacity: 0.5, transform: 'translateX(-10px)' },
    leave: { opacity: 0, transform: 'translateX(-400px)' },
    config: {
      tension: 1000,
      friction: 600,
      precision: 0.01,
      velocity: 0,
    },
  });

  useEffect(
    () => void setInterval(() => setIndex(state => (state + 1) % 4), 3000),
    [],
  );

  const returnScaleForEachImage = useCallback(imageIndex => {
    const scales = {
      0: {
        scale: '1.8',
        top: '-10%',
      },
      3: {
        top: '5%',
      },
    };
    return scales[imageIndex];
  }, []);

  return transitions.map(({ item, props, key }) => {
    return (
      <animated.div
        className="bg"
        style={{
          ...props,
          backgroundImage: `url(${item.url})`,
          ...returnScaleForEachImage(item.id),
        }}
        key={key}
      />
    );
  });
};

export default memo(Gallery);
