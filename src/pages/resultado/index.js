import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import Layout from '../../Layout';
import LineChart from '../../components/CustomComponents/LineChart';

import {
  Container,
  Button,
  ButtonContainer,
  BodyStyled,
  HeaderStyled,
  ModalStyled,
} from './styles';

const Result = () => {
  const [showModal, setShowModal] = useState(false);
  const { isMobileView } = useSelector(({ settings }) => settings);
  const store = useSelector(({ dreamMachine }) => dreamMachine);

  const {
    result: { yearlyAverageArray, achievedObjectiveCost, newPeriod },
    objectiveCost,
  } = store;

  const arrayNewPeriod = [];
  let newPeriodChunk;

  if (newPeriod) {
    for (let i = 1; i < newPeriod; i++) {
      arrayNewPeriod.push(i);
    }

    arrayNewPeriod.push(newPeriod);

    newPeriodChunk = _.chunk(arrayNewPeriod, 12);
  }

  const countYearNewPeriod = (() => {
    const isYear = newPeriodChunk.filter(n => n.length === 12);

    return isYear.length;
  })();

  const countMonthNewPeriod =
    newPeriodChunk[newPeriodChunk.length - 1].length < 12 &&
    newPeriodChunk[newPeriodChunk.length - 1].length;

  const [data] = useState(yearlyAverageArray);

  const fakeData = [
    {
      x: 2020,
      y: objectiveCost || 1000,
    },
  ];

  return (
    <Layout>
      <Container>
        <h1>Resultado</h1>
        <LineChart
          slider
          isMobileView={isMobileView}
          theme="white"
          height={400}
          data={data.length ? data : fakeData}
        />

        <ButtonContainer>
          <Button onClick={() => setShowModal(true)} ripple glow>
            Veja sua descrição
          </Button>
        </ButtonContainer>

        {achievedObjectiveCost && (
          <p style={{ color: '#fff', marginTop: '2rem' }}>
            Você conseguiria alcaçar este valor em{' '}
            {countYearNewPeriod
              ? countYearNewPeriod > 1
                ? `${countYearNewPeriod} anos`
                : `${countYearNewPeriod} ano`
              : ''}{' '}
            {countYearNewPeriod && countMonthNewPeriod ? `e` : ''}{' '}
            {countMonthNewPeriod
              ? countMonthNewPeriod > 1
                ? `${countMonthNewPeriod} meses`
                : `${countMonthNewPeriod} mês`
              : ''}{' '}
          </p>
        )}

        <ModalStyled
          state={showModal}
          setState={setShowModal}
          contentClassName="custom-content"
          dialogClassName="custom-dialog"
        >
          <HeaderStyled closeButton />
          <BodyStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </BodyStyled>
        </ModalStyled>
      </Container>
    </Layout>
  );
};

export default Result;
