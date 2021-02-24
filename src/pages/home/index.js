import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const isMobileView = useSelector(({ settings }) => settings.isMobileView);

  console.log(dispatch, store, isMobileView);

  return (
    <Container>
      <input type="text" />
      <button type="button">Salvar</button>
    </Container>
  );
};

export default Home;
