import React, { FC, CSSProperties, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import SvgDefault from '../../../assets/icons/feedback-icon.svg';
import { TextStyled } from './styles';

interface TextProps {
  children?: string;
  className?: string;
  strong?: 'normal' | 'bold' | 'bolder' | 'italic' | 'lighter';
  placing: 'above' | 'bellow';
  largeLowSpace?: boolean;
  animationSpeed?: number;
  animationDelay?: number;
  icon?: JSX.Element[] | JSX.Element;
}

interface DataSettingsStore {
  isMobileView: boolean,
  screenSize: number,
}

interface RootState {
  dreamMachine: Object,
  settings: DataSettingsStore,
  theme: Object
}

const Text: FC<TextProps> = ({
  icon = <SvgDefault />,
  children,
  animationSpeed,
  animationDelay,
  placing,
  largeLowSpace = false,
  ...props
}) => {
  const refText = useRef<HTMLElement>(null);
  const isMobileView = useSelector((store: RootState) => store.settings.isMobileView)

  useEffect(() => {
    renderAnimationWritingEffect();
  }, []);

  const performWritingEffect = (speed: number): void => {
    // const highlightedWord = children.split(" "). ;
    const dataEtructureText = children.split('');

    dataEtructureText.forEach((letter, index) => {
      setTimeout(() => {
        if (refText.current) {
          refText.current.innerHTML += letter;
        }
      }, (speed / 100) * index);
    });
  };

  const renderAnimationWritingEffect = (): void => {
    if (animationSpeed) {
      setTimeout(() => {
        performWritingEffect(animationSpeed);
      }, animationDelay);
    }
  };

  return (
    <TextStyled
      placing={placing}
      largeLowSpace={largeLowSpace}
      isMobileView={isMobileView}
      {...props}
    >
      <div>
        {icon}
        <span className="text-specific" ref={refText} />
      </div>
    </TextStyled>
  );
};

export default Text;
