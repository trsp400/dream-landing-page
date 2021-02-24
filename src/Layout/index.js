import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useWindowSize from '../utils/useWindowSizeHook';
import { screenResize } from '../redux/settings/actions';
import { Main, Container } from './styles';

const Layout = props => {
  const [width] = useWindowSize();
  const dispatch = useDispatch();

  const children = props?.children; // eslint-disable-line

  useEffect(() => {
    dispatch(screenResize(width));
  }, [width, dispatch]);

  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
