import styled, { css, CSSProp } from 'styled-components';

interface PropsTextStyled {
  placing: 'above' | 'bellow';
  largeLowSpace?: boolean;
}

interface PropsObjFormatTextPerPlacing {
  above: (props: PropsTextStyled) => CSSProp<PropsTextStyled>;
  bellow: (props: PropsTextStyled) => CSSProp<PropsTextStyled>;
}

const formatTextPerPlacing: PropsObjFormatTextPerPlacing = {
  above: props =>
    props.placing === 'above' &&
    css`
      font: normal normal lighter 19px Trasandina;

      @media (max-height: 640px) and (max-width: 320px){
        font: normal normal lighter 16px Trasandina;
      }

    `,

  bellow: props =>
    props.placing === 'bellow' &&
    css`
      font: normal normal bold 22px Trasandina;

      @media (max-height: 640px) and (max-width: 320px){
        font: normal normal bold 19px Trasandina;
      }

    `,
};

export const TextStyled = styled.div<PropsTextStyled>`
  display: flex;
  width: 100%;
  height: ${props => props.largeLowSpace ? "10%" : "8%"};
  margin: 0 20px 0;

  @media (max-height: 640px) and (max-width: 320px){
    height: ${props => props.largeLowSpace ? "14%" : "8%"};
  }


  &:nth-child(2) {
    height: 12%;

    @media(max-height: 640px) and (max-width: 320px){
      height: 6%;
    }
  }

  position: relative;

  ${props => formatTextPerPlacing[props.placing]}

  div {
    width: 95%;
    padding: 0 8px 0 26px;
    line-height: 26px;
    display: inline-block;


    @media(max-height: 640px) and (max-width: 320px){
      line-height: 23px;
    }

    svg {
      position: absolute;
      top: 8px;
      left: 0;
    }

    span {
      color: #fff;
    }
  }
`;
