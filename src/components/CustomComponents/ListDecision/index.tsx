import React, { FC, CSSProperties } from 'react';
import { useSelector, DefaultRootState } from 'react-redux';

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

interface DataSettingsStore {
  isMobileView: boolean,
  screenSize: number,
  notify: (message:string) => void
}

interface DatasStore {
  dreamMachine: Object,
  settings: DataSettingsStore,
  theme: Object,
}

const ListDecision: FC<ListDecisionProps> = ({
  options,
  state,
  setState,
  ...props
}) => {

  const { settings } = useSelector<null, DatasStore>(store => store)

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
              <ListDecisionContainerStyled {...props} isMobileView={settings.isMobileView}>
                <ListDecisionCheckStyled
                  style={{ '--color': color } as CSSProperties}
                  onClick={() => setState(key)}
                  isMobileView={settings.isMobileView}
                />
                <ListDecisionTextStyled
                  isMobileView={settings.isMobileView}
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
