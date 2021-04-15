import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { navigate } from 'gatsby-link';
import { animated, useTransition } from 'react-spring';

import { changeFormState } from '../../redux/dream_machine/actions';

import Layout from '../../Layout';
import SEO from '../../components/CustomComponents/Seo';
import resultProfile from '../../utils/resultProfile';
import Loading from '../../components/CustomComponents/Loading';

import DownArrow from '../../assets/icons/down-arrow.svg';

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
  MessagePressChart,
  TitleDesktop,
  BoxContentDesktop,
  BoxContextChart,
  TitleContextProfile,
  BoxContextProfile,
  BoxContextProfileResult,
  ButtonContainerDesktop,
  FooterContextProfile,
} from './styles';

const LoadingComponent = ({
  resultSuccess,
  loading,
  setLoading,
  comingFromLastStep,
}) => {
  useEffect(() => {
    setTimeout(() => {
      if (!comingFromLastStep) navigate('/');
      setLoading(false);
    }, 1400);
  }, [resultSuccess]);
  return loading && <Loading />;
};

const Result = () => {
  const dispatch = useDispatch();

  const [isVisibleChart, setIsVisibleChart] = useState(false);
  const [loading, setLoading] = useState(true);

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
      fileUrl,
    },
    comingFromLastStep,
    finishSimulation,
  } = store;

  const { resultSuccess } = store;

  console.log(resultSuccess);

  const urls = fileUrl?.urls || '';

  const objectiveCost = store.objectiveCost;

  if (!comingFromLastStep) navigate('/');

  const resultRiskProfile = resultProfile(riskProfile, monthlyRate);

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
        decision: {
          first: '',
          second: '',
          third: '',
        },
        monthlyLifeCost: null,
        monthlyIncome: null,
        investmentsPlacement: [],
        desiredInvestmentsPlacement: [],
        otherInvestments: null,
        currentAssets: [],
      }),
    );
  }, [dispatch, store]);

  const toogleIsVisibleChart = useCallback(
    () => setIsVisibleChart(!isVisibleChart),
    [isVisibleChart],
  );

  const transitionWallet = useTransition(1, p => p, {
    config: { mass: 5, tension: 2000, friction: 200 },
    transform: isVisibleChart ? 'translateY(10%)' : 'translateY(0%)',

    from: { transform: 'translateY(50%)' },
  });

  const transitionTextResult = useTransition(1, p => p, {
    config: { mass: 5, tension: 2000, friction: 200 },
    transform: isVisibleChart ? 'translateY(-50%)' : 'translateY(0%)',

    from: { transform: 'translateY(0%)' },
  });

  const footerTitleResultProfile = result => {
    const lowerCaseResult = result.toLowerCase();

    const resultPhraseStructure = {
      conservador: 'Prefiro ganhar pouco, mas ganhar sempre!',
      moderado: 'Quem não arrisca não petisca!',
      arrojado: 'Maior risco, maior retorno.',
    };

    return resultPhraseStructure[lowerCaseResult];
  };

  const formatProfileFemale = profile => {
    const lowerCaseProfile = profile.toLowerCase();

    const femaleProfileStructure = {
      conservador: 'Conservadora',
      moderado: 'Moderada',
      arrojado: 'Arrojada',
    };

    return femaleProfileStructure[lowerCaseProfile];
  };

  return loading ? (
    <LoadingComponent
      resultSuccess={resultSuccess}
      loading={loading}
      setLoading={setLoading}
      comingFromLastStep={comingFromLastStep}
    />
  ) : (
    <Layout finishSimulation={finishSimulation}>
      <SEO title="Resultado | Máquina dos Sonhos" />
      <Container isVisibleChart={isVisibleChart}>
        {isMobileView ? (
          <>
            {transitionWallet.map(({ item, props, key }) => (
              <animated.div style={props}>
                <ContainerRate
                  isVisibleChart={isVisibleChart}
                  isMobileView={isMobileView}
                >
                  <ContainerRateTitle>
                    Crescimento da Carteira
                  </ContainerRateTitle>
                  <ContainerRateSubTitle>
                    Para conseguir alcançar seu objetivo,
                    <br />o seu patrimônio precisa performar
                  </ContainerRateSubTitle>

                  <ContainerRateBox>
                    {achievedObjectiveCost ? (
                      <>
                        <ContainerRateBoxItems>
                          AO MÊS: <strong>0,00%</strong>
                        </ContainerRateBoxItems>
                        <ContainerRateBoxItems>
                          AO ANO: <strong>0,00%</strong>
                        </ContainerRateBoxItems>
                      </>
                    ) : (
                      <>
                        <ContainerRateBoxItems>
                          AO MÊS: <strong>{monthlyRate}%</strong>
                        </ContainerRateBoxItems>
                        <ContainerRateBoxItems>
                          AO ANO: <strong>{annualRate}%</strong>
                        </ContainerRateBoxItems>
                      </>
                    )}
                  </ContainerRateBox>

                  <ButtonShowGraphic
                    isVisibleChart={isVisibleChart}
                    onClick={() => toogleIsVisibleChart()}
                  >
                    <DownArrow />
                    <MessagePressChart isVisibleChart={isVisibleChart}>
                      Abrir gráfico
                    </MessagePressChart>
                  </ButtonShowGraphic>
                </ContainerRate>
              </animated.div>
            ))}

            <LineChartContainer
              isVisibleChart={isVisibleChart}
              isMobileView={isMobileView}
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

            {transitionTextResult.map(({ item, props }) => (
              <animated.div style={props}>
                <TextResult isVisibleChart={isVisibleChart}>
                  {achievedObjectiveCost ? (
                    <p style={{ marginBottom: '1px' }}>
                      Você conseguiria alcaçar este valor em
                      {countYearNewPeriod
                        ? countYearNewPeriod > 1
                          ? ` ${countYearNewPeriod} anos`
                          : ` ${countYearNewPeriod} ano`
                        : ''}
                      {countYearNewPeriod && countMonthNewPeriod ? ` e` : ''}
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
                      {/* <p
                  style={{
                    fontWeight: 'bolder',
                    marginBottom: '1px',
                  }}
                >
                  O seu perfil é{' '}
                  <span style={{ color: '#e2381a' }}>{riskProfile}</span>
                </p> */}
                      <p>{resultRiskProfile || ''}</p>
                    </>
                  )}

                  <ButtonContainer style={{ marginBottom: '15px' }}>
                    <Button
                      onClick={() => {
                        window.open('https://be.capital/');
                      }}
                      ripple
                      glow
                      style={{ margin: '0 10px' }}
                    >
                      Ir ao Site
                    </Button>

                    <Button
                      onClick={() => {
                        resetStore();
                        navigate('/');
                      }}
                      ripple
                      glow
                      style={{ margin: '0 10px' }}
                    >
                      Recalcule seu Sonho
                    </Button>
                  </ButtonContainer>

                  <p>
                    Confira mais detalhes sobre a{' '}
                    <strong>evolução do seu patrimônio</strong> e
                    <strong> composição de carteira ideal</strong> no relatório
                    completo que enviamos para o seu e-mail. <br />
                    <br /> Quer ajuda para tirar seu planejamento financeiro do
                    papel?
                  </p>

                  <ButtonContainer>
                    <Button
                      onClick={() => urls && window.open(urls[0])}
                      ripple
                      glow
                    >
                      Baixar PDF
                    </Button>
                  </ButtonContainer>
                </TextResult>
              </animated.div>
            ))}
          </>
        ) : (
          <>
            <TitleDesktop>Invista ou invista</TitleDesktop>

            <BoxContentDesktop>
              <BoxContextChart>
                <ContainerRate
                  isVisibleChart={isVisibleChart}
                  isMobileView={isMobileView}
                >
                  <ContainerRateTitle>
                    Crescimento da Carteira
                  </ContainerRateTitle>
                  <ContainerRateSubTitle>
                    Para conseguir alcançar seu objetivo,
                    <br />o seu patrimônio precisa performar
                  </ContainerRateSubTitle>

                  <ContainerRateBox>
                    {achievedObjectiveCost ? (
                      <>
                        <ContainerRateBoxItems>
                          AO MÊS: <strong>0,00%</strong>
                        </ContainerRateBoxItems>
                        <ContainerRateBoxItems>
                          AO ANO: <strong>0,00%</strong>
                        </ContainerRateBoxItems>
                      </>
                    ) : (
                      <>
                        <ContainerRateBoxItems>
                          AO MÊS: <strong>{monthlyRate}%</strong>
                        </ContainerRateBoxItems>
                        <ContainerRateBoxItems>
                          AO ANO: <strong>{annualRate}%</strong>
                        </ContainerRateBoxItems>
                      </>
                    )}
                  </ContainerRateBox>

                  {isMobileView && (
                    <ButtonShowGraphic
                      isVisibleChart={isVisibleChart}
                      onClick={() => toogleIsVisibleChart()}
                    >
                      <DownArrow />
                      <MessagePressChart isVisibleChart={isVisibleChart}>
                        Abrir gráfico
                      </MessagePressChart>
                    </ButtonShowGraphic>
                  )}
                </ContainerRate>
                <LineChartContainer isMobileView={isMobileView}>
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
              </BoxContextChart>

              <BoxContextProfile>
                <TitleContextProfile>
                  <h3>
                    Sua carteira é{' '}
                    <span>{formatProfileFemale(riskProfile)}!</span>
                  </h3>
                  <span className="footer-title">
                    {footerTitleResultProfile(riskProfile)}
                  </span>
                </TitleContextProfile>
                <BoxContextProfileResult>
                  {achievedObjectiveCost ? (
                    <p style={{ marginBottom: '1px' }}>
                      Você conseguiria alcaçar este valor em
                      {countYearNewPeriod
                        ? countYearNewPeriod > 1
                          ? ` ${countYearNewPeriod} anos`
                          : ` ${countYearNewPeriod} ano`
                        : ''}
                      {countYearNewPeriod && countMonthNewPeriod ? ` e` : ''}
                      {countMonthNewPeriod
                        ? countMonthNewPeriod > 1
                          ? ` ${countMonthNewPeriod} meses`
                          : ` ${countMonthNewPeriod} mês`
                        : ''}
                      <br />
                      <br />
                    </p>
                  ) : (
                    <span>{resultRiskProfile}</span>
                  )}
                </BoxContextProfileResult>
                <FooterContextProfile>
                  <span>
                    Confira mais detalhes sobre a{' '}
                    <strong>evolução do seu patrimônio</strong> e
                    <strong> composição de carteira ideal</strong> no relatório
                    completo que enviamos para o seu e-mail. <br />
                    <br /> Quer ajuda para tirar seu planejamento financeiro do
                    papel?
                  </span>
                  <ButtonContainerDesktop isMobileView={isMobileView}>
                    <Button
                      onClick={() => {
                        window.open('https://be.capital/');
                      }}
                      ripple
                      glow
                    >
                      Ir ao Site
                    </Button>

                    <Button
                      onClick={() => {
                        resetStore();
                        navigate('/');
                      }}
                      ripple
                      glow
                    >
                      Recalcule seu Sonho
                    </Button>
                    <Button
                      onClick={() => urls && window.open(urls[0])}
                      ripple
                      glow
                    >
                      Baixar PDF
                    </Button>
                  </ButtonContainerDesktop>
                </FooterContextProfile>
              </BoxContextProfile>
            </BoxContentDesktop>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Result;
