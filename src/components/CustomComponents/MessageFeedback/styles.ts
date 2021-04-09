import styled, { css, CSSProp } from 'styled-components';

interface PropsTextStyled {
  placing: 'above' | 'bellow';
  largeLowSpace?: boolean;
  isMobileView: boolean
}

interface PropsObjFormatTextPerPlacing {
  above: (props: PropsTextStyled) => CSSProp<PropsTextStyled>;
  bellow: (props: PropsTextStyled) => CSSProp<PropsTextStyled>;
}

const formatTextPerPlacing: PropsObjFormatTextPerPlacing = {
  above: props =>
    props.placing === 'above' &&
    css`
      font: normal normal lighter 1.4em Trasandina;
      @media (max-height: 640px) and (max-width: 320px){
        font: normal normal lighter 16px Trasandina;
      }

    `,

  bellow: props =>
    props.placing === 'bellow' &&
    css`
      font: normal normal bold 1.7em Trasandina;
      @media (max-height: 640px) and (max-width: 320px){
        font: normal normal bold 19px Trasandina;
      }
    `,

};

export const TextStyled = styled.div<PropsTextStyled>`
  display: flex;
  width: 100%;
  height: ${props => props.largeLowSpace ? "16%" : "8%"};
  /* margin-left: 20px; */

  @media (max-height: 640px) and (max-width: 320px){
    height: ${props => props.largeLowSpace ? "14%" : "8%"};
  }


  &:nth-child(2) {
    /* height: auto; */

    @media(max-height: 640px) and (max-width: 320px){
      height: 6%;
    }
  }

  position: relative;

  ${props => formatTextPerPlacing[props.placing]}

  div {
    width: 95%;
    height: 100;
    padding: 0 0 0 26px;
    line-height: 26px;
    display: inline-block;


    @media(max-height: 640px) and (max-width: 320px){
      line-height: 23px;
    }

    svg {
      position: absolute;
      height: 1rem;
      top: 10px;
      left: 0;
      fill: #EA5E45;
    }

    ${props => !props.isMobileView && css`
      padding: 0 8px 0 50px;
      line-height: 46px;


      height: auto;

      svg {
        bottom: 0px;
        height: 2rem;
        object-fit: cover;
      }
   `}

    span {
      color: #fff;
    }
  }
`;
