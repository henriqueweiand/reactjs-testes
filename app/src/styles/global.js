import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    * {
      padding: 0;
      margin: 0;
      outline: 0;
      /* box-sizing: border-box; */
    }

    body {
      padding: 0;
      margin: 0;
      font-family: sans-serif;
      background: "#dfdfdf";
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
    }

    html, body, #root {
        height: 100%;
    }
`;
