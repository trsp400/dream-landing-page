import React, { FC, CSSProperties } from 'react';

import colors from '../../../themes/default/colors';

import {
  Container,
  Row,
  Col,
  ListDecisionContainerStyled,
  ListDecisionTextStyled,
  ListDecisionCheckStyled,
} from './styles';

interface ListDecisionProps {
  children?: JSX.Element[] | JSX.Element | any;
  className?: string;
  options: object | any;
  state: string;
  setState(value: any): void;
}
const ListDecision: FC<ListDecisionProps> = ({
  options,
  state,
  setState,
  ...props
}) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {Object.keys(options).map((key, index) => {
          const color =
            state === key ? colors.primary.blue : colors.primary.orange;

          return (
            <Col
              md={4}
              xl={4}
              className="d-flex justify-content-center"
              onClick={() => setState(key)}
              key={options[key]}
            >
              <ListDecisionContainerStyled {...props}>
                <ListDecisionCheckStyled
                  style={{ '--color': color } as CSSProperties}
                  onClick={() => setState(key)}
                />
                <ListDecisionTextStyled
                  dangerouslySetInnerHTML={{
                    __html: options[key],
                  }}
                />
              </ListDecisionContainerStyled>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ListDecision;
