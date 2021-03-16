import styled, { css, ThemeProps } from 'styled-components';

import Pattern from '../images/background-pattern.png';
import Background1 from '../images/bg_1.png';

interface Props {
  isMobileView?: Boolean;
  currentStep?: Number;
}

interface ThemeProp extends ThemeProps<any> {
  currentStep?: Number;
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  ${props =>
    !props?.isMobileView &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s;
  -ms-animation: fadein 2s;
  -o-animation: fadein 2s;
  animation: fadein 2s;

  transition: opacity 2s;
  transition: background-image 2s;
  -webkit-transition: opacity 2s;
  -webkit-transition: background-image 2s;

  ${props =>
    props?.isMobileView
      ? css``
      : css`
          ${(props: ThemeProp) =>
            props?.currentStep > 0
              ? css``
              : css`
                  background-image: url('${Background1}');
                `}
          background-repeat: no-repeat;
          background-size: cover;
          object-fit: cover;
        `}

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Background = styled.div<Props>`
  background-image: url('${Pattern}');
  filter: invert(100%);
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;

  opacity: 0.1;

  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 18px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
