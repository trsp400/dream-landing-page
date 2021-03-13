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
    background: #fff;
    font-family: Trasandina;
    width: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.mobileTheme.colors.primary.blue};
    -webkit-font-smoothing: antialiased;
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
