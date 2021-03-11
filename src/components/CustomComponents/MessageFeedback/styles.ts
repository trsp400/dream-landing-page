import styled, { css, CSSProp } from 'styled-components';

interface PropsTextStyled {
  placing: 'above' | 'bellow',
  largeLowSpace?: boolean,
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
  height: ${props => props.largeLowSpace ? "18%" : "10%"};
  margin: 0 20px 0;

  line-height: 5px;

  &:nth-child(2) {
    height: 12%;
  }

  position: relative;

  ${ props =>  formatTextPerPlacing[props.placing]}

  div {
    width: 95%;
    padding-left: 24px;

    overflow: hidden;

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

