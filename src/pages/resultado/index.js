import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../Layout';
import LineChart from '../../components/LineChart';

import { Container } from './styles';

const Result = () => {
  const { isMobileView } = useSelector(({ settings }) => settings);

  return (
    <Layout>
      <Container>
        <h1>Resultado</h1>
        <LineChart slider isMobileView={isMobileView} theme="white" />
      </Container>
    </Layout>
  );
};

export default Result;
