import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import Layout from '../../Layout';
import SEO from '../../components/CustomComponents/Seo';
import resultProfile from '../../utils/resultProfile';
import { parseCurrencyFloat } from '../../utils/parseValues';

import {
  Container,
  Button,
  ButtonContainer,
  TextResult,
  ContainerRate,
  ContainerRateTitle,
  ContainerRateSubTitle,
  ContainerRateBox,
  ContainerRateBoxItems,
  ButtonShowGraphic,
  LineChartContainer,
  LineChartStyled,
} from './styles';
import { navigate } from 'gatsby-link';

const Result = () => {
  const [showGraphic, setShowGraphic] = useState(null);
  const [displayGhaphic, setDisplayGhaphic] = useState('none');
  const { isMobileView } = useSelector(({ settings }) => settings);
  const store = useSelector(({ dreamMachine }) => dreamMachine);

  const {
    result: {
      achievedObjectiveCost,
      newPeriod,
      monthlyRate,
      annualRate,
      riskProfile,
      yearlyAverageArray,
    },
    currentStep,
    comingFromLastStep,
    resultSuccess,
  } = store;

  const monthlySupport = parseCurrencyFloat(store.monthlySupport);
  const currentInvestments = parseCurrencyFloat(store.currentInvestments);
  const objectiveCost = parseCurrencyFloat(store.objectiveCost);

  if (!comingFromLastStep) navigate('/');

  const resultRiskProfile = resultProfile(riskProfile);

  const arrayNewPeriod = [];
  let newPeriodChunk = [];

  const yearlyAverageArrayModificad = yearlyAverageArray?.map(y => ({
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

  useEffect(() => {
    console.log(showGraphic, displayGhaphic);
  }, [showGraphic, displayGhaphic]);

  return (
    <Layout>
      <SEO title="Resultado | Máquina dos Sonhos" />
      <Container
        style={{
          // justifyContent: showGraphic ? 'flex-start' : 'center',
          justifyContent: 'center',
        }}
      >
        <ContainerRate
          style={
            showGraphic
              ? {
                  marginTop: '1rem',
                  padding: '18px 35px',
                  animation: 'animateContainerRateUp 1s ease-in-out',
                }
              : {
                  padding: '30px 35px',
                  animation: 'animateContainerRateDown 1s ease-in-out',
                }
          }
        >
          <ContainerRateTitle>Crescimento da Carteira</ContainerRateTitle>
          <ContainerRateSubTitle>
            Para conseguir alcançar seu objetivo,
            <br />o seu patrimônio precisa performar
          </ContainerRateSubTitle>

          <ContainerRateBox>
            {achievedObjectiveCost ? (
              <>
                <ContainerRateBoxItems bg="#c5dee5">
                  AO MÊS: <strong>0,00%</strong>
                </ContainerRateBoxItems>
                <ContainerRateBoxItems bg="#fecfc4">
                  AO ANO: <strong>0,00%</strong>
                </ContainerRateBoxItems>
              </>
            ) : (
              <>
                <ContainerRateBoxItems bg="#c5dee5">
                  AO MÊS: <strong>{monthlyRate}%</strong>
                </ContainerRateBoxItems>
                <ContainerRateBoxItems bg="#fecfc4">
                  AO ANO: <strong>{annualRate}%</strong>
                </ContainerRateBoxItems>
              </>
            )}
          </ContainerRateBox>

          <ButtonShowGraphic
            onClick={() => {
              setShowGraphic(!showGraphic);

              showGraphic
                ? setDisplayGhaphic('block')
                : // : setTimeout(() => setDisplayGhaphic('none'), 1200);
                  setDisplayGhaphic('none');
            }}
          >
            V
          </ButtonShowGraphic>
        </ContainerRate>

        <LineChartContainer
          style={
            showGraphic
              ? {
                  animation: 'animateLineChartVisible 1.2s ease-in-out',
                  opacity: '1',
                  display: 'block',
                }
              : {
                  animation: 'animateLineChartInvisible 1.2s ease-in-out',
                  animationDelay: '2s',
                  opacity: '0',
                  display: displayGhaphic,
                }
          }
        >
          <LineChartStyled
            slider
            isMobileView={isMobileView}
            theme="white"
            height={300}
            data={
              yearlyAverageArrayModificad?.length
                ? yearlyAverageArrayModificad
                : fakeData
            }
          />
        </LineChartContainer>

        <TextResult style={showGraphic ? { margin: '10px 0' } : {}}>
          {achievedObjectiveCost ? (
            <p style={{ marginBottom: '1px' }}>
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
            </p>
          ) : (
            <>
              <p
                style={{
                  fontWeight: 'bolder',
                  marginBottom: '1px',
                }}
              >
                O seu perfil é{' '}
                <span style={{ color: '#e2381a' }}>{riskProfile}</span>
              </p>
              <p>{resultRiskProfile.label1}</p>
            </>
          )}

          <ButtonContainer style={{ marginBottom: '15px' }}>
            <Button onClick={() => {}} ripple glow style={{ margin: '0 10px' }}>
              Ir ao Site
            </Button>

            <Button onClick={() => {}} ripple glow style={{ margin: '0 10px' }}>
              Recalcule seu Sonho
            </Button>
          </ButtonContainer>

          <p>
            Confira mais detalhes sobre a{' '}
            <strong>evolução do seu patrimônio</strong> e
            <strong> composição de carteira ideal</strong> no relatório completo
            que enviamos para o seu e-mail. <br />
            <br /> Quer ajuda para tirar seu planejamento financeiro do papel?
          </p>

          <ButtonContainer>
            <Button onClick={() => {}} ripple glow>
              Baixar PDF
            </Button>
          </ButtonContainer>
        </TextResult>
      </Container>
    </Layout>
  );
};

export default Result;
