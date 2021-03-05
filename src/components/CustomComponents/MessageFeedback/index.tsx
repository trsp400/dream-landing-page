import React, { FC, CSSProperties, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import SvgDefault from '../../../assets/icons/feedback-icon.svg';
import { TextStyled } from './styles';

interface TextProps {
  children?: string;
  className?: string;
  strong?: 'normal' | 'bold' | 'bolder' | 'italic' | 'lighter';
  placing: 'above' | 'bellow',
  animationSpeed?: number,
  animationDelay?: number,
  image?: JSX.Element[] | JSX.Element;
}

const Text: FC<TextProps> = ({ strong = 'normal', image = <SvgDefault />, children,animationSpeed, animationDelay ,...props }) => {

  const refText = useRef<HTMLElement>(null)

  useEffect(() => {
    renderAnimationWritingEffect();
  }, [])

  useEffect(() => {
    return () => { console.log(refText.current.innerHTML) }
  })


  const performWritingEffect = (speed : number):void => {

    const dataEtructureText = children.split("");

    dataEtructureText.forEach((letter, index)=> {
      setTimeout(() => {
        if(refText.current){
          refText.current.innerHTML += letter
        }
      }, speed/100 * index)
    })
  }

  const renderAnimationWritingEffect = ():void => {

    if(animationSpeed) {
      setTimeout(() => {
        performWritingEffect(animationSpeed)
      }, animationDelay)
    }
  }

  const clearTimeOutAnimationWriting = () : void => {
    clearTimeout(timeOut)
  }

  return (
    <TextStyled style={{ '--strong': strong } as CSSProperties} {...props}>
      <div>
        {image}
        <span className="text-specific" ref={refText}/>
      </div>
    </TextStyled>
  )
}

export default Text;
