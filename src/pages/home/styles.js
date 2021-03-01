import styled from 'styled-components';
import { Container as BootstrapContainer, ButtonGroup } from 'react-bootstrap';

import RippleButton from '../../components/Button';

export const Container = styled(BootstrapContainer)`
  height: 100vh;
`;

export const Header = styled.header``;
export const MainHome = styled.main``;
export const PresentationSection = styled.section``;

export const ButtonSection = styled(ButtonGroup)``;

export const ButtonContainer = styled(ButtonGroup)`
  height: 5rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled(RippleButton)``;
