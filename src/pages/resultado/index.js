import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../Layout';
import LineChart from '../../components/CustomComponents/LineChart';

import handleGraphData, {
  generateChunks,
  generateGraphDataObject,
} from '../../utils/handleGraphData';

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
  const [data, setData] = useState([]);
  const { isMobileView } = useSelector(({ settings }) => settings);
  const store = useSelector(({ dreamMachine }) => dreamMachine);

  const { result } = store;

  const storeObj = {
    currentInvestments: 'R$ 3.000,55',
    monthlyPayment: 'R$ 2.000,79',
    objectiveCost: 'R$ 40.000,87',
    period: '10',
    yearOrMonth: 'anos',
  };

  const period = parseInt(storeObj.period);
  const monthlyRate = parseFloat(result.monthlyRate);
  const yearOrMonth = storeObj.yearOrMonth;
  const monthlyPayment = parseFloat(
    storeObj.monthlyPayment
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.'),
  );
  const currentInvestments = parseFloat(
    storeObj.currentInvestments
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.'),
  );
  const objectiveCost = parseFloat(
    storeObj.objectiveCost
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.'),
  );

  const months = yearOrMonth === 'anos' ? period * 12 : period;

  const fakeData = [
    {
      x: 2020,
      y: objectiveCost || 1000,
    },
  ];

  console.log(
    currentInvestments,
    monthlyPayment,
    monthlyRate,
    objectiveCost,
    months,
    period,
  );

  useEffect(() => {
    console.log(
      currentInvestments,
      monthlyPayment,
      monthlyRate,
      objectiveCost,
      months,
      period,
    );
    const averageArray = handleGraphData(
      generateChunks,
      currentInvestments || 0,
      monthlyPayment || 0,
      monthlyRate || 0,
      objectiveCost || 0,
      months || 0,
    );

    const initialAverageArray = generateGraphDataObject(
      averageArray,
      months,
      objectiveCost,
    );

    const finalAverageArray = initialAverageArray.map(item => ({
      x: item.x,
      y: item.y,
    }));

    if (finalAverageArray.length > 1) {
      finalAverageArray.pop();
    }

    // console.log(averageArray, initialAverageArray, finalAverageArray);

    if (finalAverageArray.length < 1) setData(fakeData);
    else setData(finalAverageArray);
  }, []);

  return (
    <Layout>
      <Container>
        <h1>Resultado</h1>
        <LineChart
          slider
          isMobileView={isMobileView}
          theme="white"
          height={400}
          data={data}
        />

        <ButtonContainer>
          <Button onClick={() => setShowModal(true)} ripple glow>
            Veja sua descrição
          </Button>
        </ButtonContainer>

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
