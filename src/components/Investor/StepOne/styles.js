import styled from 'styled-components';

import { Container as BootstrapContainer } from 'react-bootstrap';

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
`;



export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
