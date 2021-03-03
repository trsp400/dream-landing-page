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

interface ListDecicionProps {
  children?: JSX.Element[] | JSX.Element | any;
  className?: string;
  options: string[];
  state: number;
  setState(value: any): void;
}
const ListDecicion: FC<ListDecicionProps> = ({ options, state, setState }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {options.map((option, index) => {
          const color =
            state === index ? colors.primary.blue : colors.primary.orange;

          return (
            <Col md={4} xl={4} className="d-flex justify-content-center">
              <ListDecisionContainerStyled>
                <Row style={{ width: '100%' }}>
                  <Col
                    className="col-1 d-flex justify-content-center"
                    style={{ margin: 'auto 0' }}
                    md={12}
                  >
                    <ListDecisionCheckStyled
                      style={{ '--color': color } as CSSProperties}
                      onClick={() => setState(index)}
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

export default ListDecicion;
