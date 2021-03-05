import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../Layout';
import LineChart from '../../components/CustomComponents/LineChart';

import SEO from '../../components/CustomComponents/Seo';

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

  return (
    <Layout>
      <SEO title="Resultado | Máquina dos Sonhos" />
      <Container>
        <h1>Resultado</h1>

        <LineChart
          slider
          isMobileView={isMobileView}
          theme="white"
          height={400}
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
