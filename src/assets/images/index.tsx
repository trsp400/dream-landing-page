import React, { useCallback, useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import './styles.css';

import Traveler from '../../../images/traveler.png';
import TravelerBackground from '../../../images/traveler_background.png';
import Chef from '../../../images/chef.png';
import Ballet from '../../../images/Ballet.png';

const slides = [
  { id: 0, url: '../../../images/traveler.png' },
  { id: 1, url: '../../../images/chef.png' },
  { id: 2, url: '../../../images/Ballet.png' },
  { id: 3, url: '../../assets/logo/svg/maquinaDosSonhos.svg' },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  // console.log(slides[index]);

  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: config.molasses,
  });

  useEffect(
    () => void setInterval(() => setIndex(state => (state + 1) % 4), 10000),
    [],
  );

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg"
      style={{
        ...props,
        backgroundImage: `url(../../../images/Ballet.png)`,
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // width: '100vw',
        // height: '100vh',
        // opacity: 1,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // willChange: 'opacity',
      }}
    />
  ));
};

export default Gallery;
