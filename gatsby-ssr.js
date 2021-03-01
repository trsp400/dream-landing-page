import './static/fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import {
  mobileTheme,
  desktopTheme,
} from "./src/themes/default"
import GlobalStyle from "./src/themes/globalStyles"

import store from "./src/redux/store"

export const wrapPageElement = ({ element }) => {
  return (
    <Provider store={store}>
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
  )
}
