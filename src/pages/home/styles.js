import styled from 'styled-components';
import { Container as BootstrapContainer, ButtonGroup } from 'react-bootstrap';

import RippleButton from '../../components/CustomComponents/Button';

export const Container = styled(BootstrapContainer)`
  height: 100vh;
`;

export const ButtonContainer = styled(ButtonGroup)`
  height: 5rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled(RippleButton)``;
