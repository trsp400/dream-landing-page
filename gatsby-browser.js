import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { mobileTheme, desktopTheme } from './src/themes/default';
import GlobalStyle from './src/themes/globalStyles';

import SEO from './src/components/CustomComponents/Seo';

import store from './src/redux/store';

export const wrapPageElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <SEO lang="pt-BR" />
      <ThemeProvider
        theme={{
          desktopTheme,
          mobileTheme,
        }}
      >
        <React.Fragment>
          <GlobalStyle />
          {element}
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );
};
