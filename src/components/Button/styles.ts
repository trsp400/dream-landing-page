/* eslint-disable no-shadow */
import styled, { keyframes, css, FlattenInterpolation, ThemeProps, ThemeProviderProps } from 'styled-components';
import { darken } from 'polished';

import media from 'styled-media-query';

interface RippleButtonProps {
  ripple?: Boolean;
  disabled?: Boolean;
  glow?: Boolean;
  theme?: String;
  variant?: 'beorange' | 'beblue' | 'bewhite' | 'begreen';
}

interface TypesPropsTheme {
  beblue: FlattenInterpolation<ThemeProps<any>>,
  beorange: FlattenInterpolation<ThemeProps<any>>,
  bewhite: FlattenInterpolation<ThemeProps<any>>,
  begreen: FlattenInterpolation<ThemeProps<any>>,
}


const themeType: TypesPropsTheme = {
  beblue: css`
    background: #1A4A73;
    color: #fff;

    ${(props: RippleButtonProps) =>
      props?.glow &&
      css`
        box-shadow: 0 5px 15px rgba(85, 119, 150, 0.5);
      `}

    &:hover {
      background: ${(props: RippleButtonProps) =>
        darken(0.1, "#1a4a73")};
    }

    span.drop {
      background: #1a4a73;
    }
  `,

  beorange: css`
    background: #EA5E45;
    color: #fff;
    ${(props: RippleButtonProps) =>
      props?.glow &&
      css`
        box-shadow: 0 5px 15px rgba(239, 134, 115, 0.47);
      `}

    &:hover {
      background: ${(props: RippleButtonProps) =>
        props.disabled
          ? "#ea5e45"
          : darken(0.1, "#ea5e45")};
      cursor: ${(props: RippleButtonProps) =>
        props.disabled ? 'not-allowed' : 'pointer'};
    }

    span.drop {
      background: #ea5e45;
    }
  `,

  bewhite: css`
    background: #fff;
    color: #ea5e45;
    border: 1px #ea5e45 solid;

    ${(props: RippleButtonProps) =>
      props?.glow &&
      css`
        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.5);
      `}

    span.drop {
      background: #ea5e45;
    }
  `,

  begreen: css`
    background: #3ABE00;
    color: #fff;

    ${(props: RippleButtonProps) =>
      props?.glow &&
      css`
        box-shadow: 0 5px 15px rgba(58, 190, 0, 0.5);
      `}

    &:hover {
      background: ${(props: RippleButtonProps) =>
        props.disabled
          ? "#3ABE00"
          : darken(0.1, "#3ABE00")};
      cursor: ${(props: RippleButtonProps) =>
        props.disabled ? 'not-allowed' : 'pointer'};
    }

    opacity: ${(props: RippleButtonProps) => (props.disabled ? 0.5 : 1)};

    span.drop {
      background: #8cd671;
    }
  `,
};

const drop = keyframes`
  to {
    transform: scale(1);
    opacity: 0;
  }
`;

export const CustomButton = styled.button<RippleButtonProps>`
  /* fixar ripple no meio do botão */
  display: flex;
  justify-content: center;
  align-items: center;
  /* ------------------------------- */

  position: relative;
  overflow: hidden;
  transition: background 400ms;
  outline: 0;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  padding: 10px 0;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  /* padding: 15px 30px;

  ${media.greaterThan('1577px')`
    height: 2.8rem;
  `}

  ${media.lessThan('1577px')`
    height: 2.5rem;
  `}

  ${media.lessThan('480px')`
    height: 40px;
    width: 260px;
  `}

  ${media.lessThan('248px')`
    padding: 12px 0 12px;
  `} */

  font: normal normal bold 20px/26px Trasandina;

  ${(props: RippleButtonProps) => themeType[props?.variant || 'beorange']}

  span.drop {
    position: absolute;

    border-radius: 50%;
    transform: scale(0);
    animation: ${drop} 0.4s linear;
    background: rgba(255, 255, 255, 8);
  }
`;
