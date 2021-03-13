import React, { useCallback, useState, useEffect, memo } from 'react';
import { useTransition, animated } from 'react-spring';
import { useSelector } from 'react-redux';

import './styles.css';

import Traveler from '../../../images/traveler.png';
import Chef from '../../../images/chef.png';
import Ballet from '../../../images/ballet.png';
import DreamMachine from '../../../images/maquinaDosSonhos.png';

const slides = [
  { id: 0, url: DreamMachine },
  { id: 1, url: Traveler },
  { id: 2, url: Chef },
  { id: 3, url: Ballet },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const { screenSize } = useSelector(({ settings }) => settings);

  const isChrome =
    !!window.chrome &&
    (!!window.chrome.webstore ||
      navigator.vendor.toLowerCase().indexOf('google inc.') !== -1);

  const transitions = useTransition(slides[index], item => item.id, {
    from: {
      opacity: 0,
      transform: screenSize > 600 ? 'translateX(800px)' : 'translateX(400px)',
    },

    enter: { opacity: 0.5, transform: 'translateX(-10px)' },
    leave: {
      opacity: 0,
      transform: screenSize > 600 ? 'translateX(-800px)' : 'translateX(-400px)',
    },
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
      0: isChrome
        ? {
            zoom: '1.5',
            top: screenSize <= 1024 && screenSize >= 860 ? '-20%' : '-40%',
          }
        : {
            scale: '1.5',
            top: screenSize <= 1024 && screenSize >= 860 ? '-3%' : '-10%',
          },
      1: isChrome && {
        top: screenSize <= 1024 && screenSize >= 860 ? '5%' : '-5%',
        zoom: screenSize <= 1024 && screenSize >= 860 ? '1.3' : '1.5',
      },
      2: isChrome && {
        top: '5%',
      },
      3: {
        top: isChrome ? '-20%' : '5%',
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
          zoom: 1.5,
          left: isChrome && '-25%',
          backgroundImage: `url(${item.url})`,
          ...returnScaleForEachImage(item.id),
        }}
        key={key}
      />
    );
  });
};

export default memo(Gallery);
