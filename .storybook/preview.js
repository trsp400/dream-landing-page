
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configureActions } from '@storybook/addon-actions'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

import { mobileTheme, desktopTheme } from '../src/themes/default';

import GlobalStyle from '../src/themes/globalStyles';

import { action } from "@storybook/addon-actions"

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"


window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}


configureActions({
  depth: 5,
  clearOnStoryChange: true,
  limit: 20
})

// .storybook/preview.js

export const decorators = [
  (Story) => (
    <ThemeProvider
    theme={{
      desktopTheme,
      mobileTheme,
    }}
    >
      <>
      <GlobalStyle/>
      <Story />
      </>
    </ThemeProvider>
  ),
];

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};
