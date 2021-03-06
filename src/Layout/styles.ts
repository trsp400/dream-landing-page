import styled, { css, ThemeProps } from 'styled-components';

import Pattern from '../images/background-pattern.png';
import Background1 from '../images/bg_1.png';

interface Props {
  isMobileView?: Boolean;
  currentStep?: Number;
  yearlyAverageArray?: Number[];
  finishSimulation?: Boolean;
}

interface ThemeProp extends ThemeProps<any> {
  currentStep?: Number;
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 100%;

  /* overflow-x: hidden; */
  position: relative;

  ${props => props.isMobileView && css`
    overflow: auto;
  `}


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

                  background: rgb(128,121,121);
                  background: linear-gradient(28deg, rgba(128,121,121,1) 4%, rgba(244,154,138,1) 27%, rgba(180,174,173,1) 36%, rgba(150,165,179,1) 41%, rgba(113,150,182,1) 45%, rgba(86,126,161,1) 50%, rgba(70,112,149,1) 56%, rgba(26,74,115,1) 96%);

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
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  opacity: 0.1;

  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export const ProgressBarContainer = styled.div`
  height: 25px;
  top: 0;
  right: 0;
  left: 0;
  position: absolute;

  display: flex;

`;

export const Main = styled.main<Props>`
  position: relative;
  padding-top: 60px;

  ${props =>
    props?.finishSimulation &&
    css`
      width: 100%;
      padding-top: 0;
    `}
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
