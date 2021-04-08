import { createGlobalStyle } from 'styled-components';
import '../../static/fonts/fonts.css';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Trasandina;
  }

  *:focus{
    outline: 0;
  }


  html, body {
    height: 100%;
    font-family: Trasandina;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    /* @media(max-height: 569px) {
      min-height: 569px;
    }

    @media(max-height: 640px) {
      min-height: 640px;
    }

    @media(max-height: 854px) {
      min-height: 854px;
    } */
  }

  #___gatsby {
    height: 100vh;
    background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
    -webkit-font-smoothing: antialiased;
  }

  #gatsby-focus-wrapper {
    height: 100%;
  }

  body, button, input, p, footer, div, li {
    font-family: Trasandina;
    outline: 0;
    border: 0;
  }

  button{
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #fff
  }

`;

export default GlobalStyle;
