import React, { useCallback, memo, ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ripple?: Boolean;
  onClick(): void;
  children: JSX.Element[] | JSX.Element;
  variant?: 'beorange' | 'beblue' | 'bewhite' | 'begreen';
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { ripple, onClick } = props;

  const rippleEffect = ripple || null;
  const onClickFunction = onClick || null;

  const renderEffect = useCallback(
    event => {
      const button = event.currentTarget;

      const circleEffect = document.createElement('span');

      const proportion = Math.max(button.clientWidth, button.clientHeight);

      circleEffect.style.width = `${proportion}px`;
      circleEffect.style.height = `${proportion}px`;

      circleEffect.classList.add('drop');

      const drop = button.getElementsByClassName('drop')[0];

      if (drop) drop.remove();

      rippleEffect && button.appendChild(circleEffect);
      onClickFunction && onClickFunction();
    },
    [onClickFunction, rippleEffect],
  );

  return (
    <CustomButton {...props} onClick={renderEffect}>
      {children}
    </CustomButton>
  );
};

export default memo(Button);
