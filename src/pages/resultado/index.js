import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { navigate } from 'gatsby-link';


import Layout from '../../Layout';
import SEO from '../../components/CustomComponents/Seo';
import resultProfile from '../../utils/resultProfile';
import { parseCurrencyFloat } from '../../utils/parseValues';

import { changeFormState } from '../../redux/dream_machine/actions';

import { useSpring, animated } from 'react-spring';

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

const Result = () => {
  const dispatch = useDispatch();

  const [showGraphic, setShowGraphic] = useState(false);
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
    comingFromLastStep,
  } = store;

  const objectiveCost = parseCurrencyFloat(store.objectiveCost);

  if (!comingFromLastStep) navigate('/');

  const resultRiskProfile = resultProfile(riskProfile);

  const arrayNewPeriod = [];
  let newPeriodChunk = [];

  const yearlyAverageArrayModificad = yearlyAverageArray.map(y => ({
    x: y?.Ano,
    y: y?.Media,
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

  const springChartConfig = {
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(-100px)',
    },
  };

  const springChartProps = useSpring({
    opacity: 1,
    config: { tension: 150, friction: 10 },

    reset: showGraphic,
    ...springChartConfig,
  });

  const springRateConfig = {
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(100px)',
    },
  };

  const springRateProps = useSpring({
    opacity: 1,
    config: { tension: 150, friction: 10 },

    reset: showGraphic,
    ...springRateConfig,
  });


  const resetStore = useCallback(() => {
    dispatch(
      changeFormState({
        ...store,
        currentStep: 0,
        resultSuccess: null,
        result: {
          monthlyRate: 0,
          annualRate: 0,
          riskProfile: '',
          email: '',
          yearlyAverageArray: [],
        },
        path: '',
        objective: null,
        objectiveCost: null,
        period: null,
        yearOrMonth: 'anos',
        monthlySupport: null,
        currentInvestments: null,
        decision: null,
        monthlyLifeCost: null,
        monthlyIncome: null,
        investmentsPlacement: [],
        desiredInvestmentsPlacement: [],
        otherInvestments: null,
        currentAssets: [],
      }),
    );
  }, [dispatch, store]);
  return (
    <Layout>
      <SEO title="Resultado | Máquina dos Sonhos" />
      <Container
        style={{
          justifyContent: 'center',
        }}
      >
        <animated.div
          style={{
            ...springRateProps,
          }}
        >
          <ContainerRate
            style={
              showGraphic
                ? {
                    marginTop: '1rem',
                    padding: '18px 35px',
                  }
                : {
                    padding: '30px 35px',
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
              showGraphic={showGraphic}
              onClick={() => setShowGraphic(!showGraphic)}
            >
              V
            </ButtonShowGraphic>
          </ContainerRate>
        </animated.div>

        {showGraphic && (
          <animated.div
            style={{
              ...springChartProps,
            }}
          >
            <LineChartContainer>
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
          </animated.div>
        )}

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
              <p>{resultRiskProfile?.label1 || ""}</p>
            </>
          )}

          <ButtonContainer style={{ marginBottom: '15px' }}>
            <Button onClick={() => {
              // global.window.open('https://be.capital/')
            }} ripple glow style={{ margin: '0 10px' }}>
              Ir ao Site
            </Button>

            <Button onClick={() => {
              resetStore()
              navigate("/")
            }} ripple glow style={{ margin: '0 10px' }}>
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
