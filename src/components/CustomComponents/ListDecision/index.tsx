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
  options: string[];
  state: number;
  setState(value: any): void;
}
const ListDecision: FC<ListDecisionProps> = ({ options, state, setState }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {options.map((option, index) => {
          const color =
            state === index + 1 ? colors.primary.blue : colors.primary.orange;

          return (
            <Col
              md={4}
              xl={4}
              className="d-flex justify-content-center"
              onClick={() => setState(index + 1)}
              key={index + 1}
            >
              <ListDecisionContainerStyled>
                <Row style={{ width: '100%' }}>
                  <Col
                    className="col-1 d-flex justify-content-center"
                    md={12}
                  >
                    <ListDecisionCheckStyled
                      style={{ '--color': color } as CSSProperties}
                      onClick={() => setState(index + 1)}
                    />
                  </Col>
                  <Col
                    style={{
                      display: 'flex',
                      alingContent: 'center',
                      margin: '5px 0',
                    }}
                  >
                    <ListDecisionTextStyled>{option}</ListDecisionTextStyled>
                  </Col>
                </Row>
              </ListDecisionContainerStyled>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ListDecision;
