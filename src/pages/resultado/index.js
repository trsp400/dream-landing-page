import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import colors from '../../themes/default/colors';

import {
  Container,
  Button,
  BodyStyled,
  HeaderStyled,
  ModalStyled,
} from './styles';

const Result = () => {
  // const dispatch = useDispatch();
  // const store = useSelector(({ dreamMachine }) => dreamMachine);

  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <h1>Resultado</h1>

      <Button onClick={() => setShowModal(true)}>Veja sua descrição</Button>

      <ModalStyled
        state={showModal}
        setState={setShowModal}
        contentClassName="custom-content"
        dialogClassName="custom-dialog"
      >
        <HeaderStyled closeButton />
        <BodyStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BodyStyled>
      </ModalStyled>
    </Container>
  );
};

export default Result;
