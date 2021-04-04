import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #EEE;
    color: #0A100D;
  }
`;