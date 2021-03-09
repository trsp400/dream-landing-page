import styled, { css, CSSProp } from 'styled-components';

interface PropsTextStyled {
  placing: 'above' | 'bellow',
}

interface PropsObjFormatTextPerPlacing {
  above: (props : PropsTextStyled)  => CSSProp<PropsTextStyled>,
  bellow: (props : PropsTextStyled)  => CSSProp<PropsTextStyled>,
}

const formatTextPerPlacing:PropsObjFormatTextPerPlacing = {
  above: props => props.placing === "above" && css`
    font: normal normal lighter 19px Trasandina;
  ` ,

  bellow: props => props.placing === "bellow" && css`
    font: normal normal bold 22px Trasandina;
  `
}

export const TextStyled = styled.div<PropsTextStyled>`
  display: flex;
  width: 100%;
  height: 30px;
  margin: 0 20px 0;

  &:nth-child(2) {
    height: 60px;
    line-height: 26px;
  }

  position: relative;

  ${ props =>  formatTextPerPlacing[props.placing]}

  div {
    padding-left: 24px;
    position: relative;
  }

  svg {
    position: absolute;
    top: 8px;
    left: 0;
  }

  span {
    color: #fff;
  }

`;

