import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import Layout from '../../Layout';
import LineChart from '../../components/CustomComponents/LineChart';
import SEO from '../../components/CustomComponents/Seo';

import resultProfile from '../../utils/resultProfile';

import {
  Container,
  Button,
  ButtonContainer,
  BodyStyled,
  HeaderStyled,
  ModalStyled,
  TextResult,
} from './styles';

const Result = () => {
  const [showModal, setShowModal] = useState(false);
  const { isMobileView } = useSelector(({ settings }) => settings);
  const store = useSelector(({ dreamMachine }) => dreamMachine);

  const {
    result: {
      yearlyAverageArray,
      achievedObjectiveCost,
      newPeriod,
      monthlyRate,
      annualRate,
      riskProfile,
    },
    objectiveCost,
  } = store;

  const resultRiskProfile = resultProfile(riskProfile);

  const arrayNewPeriod = [];
  let newPeriodChunk = [];

  const yearlyAverageArrayModificad = yearlyAverageArray.map(y => ({
    x: y.Ano,
    y: y.Media,
  }));

  if (newPeriod) {
    for (let i = 1; i < newPeriod; i++) {
      arrayNewPeriod.push(i);
    }

    arrayNewPeriod.push(newPeriod);

    newPeriodChunk = _.chunk(arrayNewPeriod, 12);
  }

  const countYearNewPeriod = (() => {
    if (!newPeriodChunk.length) return 0;

    const isYear = newPeriodChunk.filter(n => n.length === 12);

    return isYear.length;
  })();

  const countMonthNewPeriod = (() => {
    if (!newPeriodChunk.length) return 0;

    if (newPeriodChunk[newPeriodChunk.length - 1].length < 12)
      return newPeriodChunk[newPeriodChunk.length - 1].length;
  })();

  const fakeData = [
    {
      x: 2020,
      y: objectiveCost || 1000,
    },
  ];

  return (
    <Layout>
      <SEO title="Resultado | Máquina dos Sonhos" />
      {yearlyAverageArray?.length ? (
        <Container>
          <h1>Resultado</h1>
          <LineChart
            slider
            isMobileView={isMobileView}
            theme="white"
            height={400}
            data={
              yearlyAverageArrayModificad?.length
                ? yearlyAverageArrayModificad
                : fakeData
            }
          />

          <TextResult>
            {achievedObjectiveCost ? (
              <p style={{ marginTop: '2rem' }}>
                Você conseguiria alcaçar este valor em
                {countYearNewPeriod
                  ? countYearNewPeriod > 1
                    ? ` ${countYearNewPeriod} anos`
                    : ` ${countYearNewPeriod} ano`
                  : ''}
                {countYearNewPeriod && countMonthNewPeriod ? `e` : ''}
                {countMonthNewPeriod
                  ? countMonthNewPeriod > 1
                    ? ` ${countMonthNewPeriod} meses`
                    : ` ${countMonthNewPeriod} mês`
                  : ''}
                <br />
                <br />
                Taxa Mensal: 0,00 % Taxa Anual: 0,00 %
              </p>
            ) : (
              <>
                <p
                  style={{
                    marginTop: '2rem',
                    fontWeight: 'bolder',
                  }}
                >
                  O seu perfil é{' '}
                  <span style={{ color: '#e2381a' }}>{riskProfile}</span>
                </p>
                <p>{resultRiskProfile.label1}</p>
                <p style={{ marginTop: '2rem' }}>
                  Taxa Mensal: {monthlyRate} % Taxa Anual: {annualRate} %
                </p>
              </>
            )}

            <ButtonContainer>
              <Button onClick={() => setShowModal(true)} ripple glow>
                Veja sua descrição
              </Button>
            </ButtonContainer>

            <p style={{ marginTop: '2rem' }}>
              Confira mais detalhes sobre a evolução do seu patrimônio e
              composição de carteira ideal no relatório completo que enviamos
              para o seu e-mail. <br />
              <br /> Quer ajuda para tirar seu planejamento financeiro do papel?
            </p>
          </TextResult>

          <ModalStyled
            state={showModal}
            setState={setShowModal}
            contentClassName="custom-content"
            dialogClassName="custom-dialog"
          >
            <HeaderStyled closeButton />
            <BodyStyled>
              {resultRiskProfile.label1}
              <br />
              <br />
              {resultRiskProfile.label2}
              <br />
              <br />
              {resultRiskProfile.label3}
            </BodyStyled>
          </ModalStyled>
        </Container>
      ) : null}
    </Layout>
  );
};

export default Result;
