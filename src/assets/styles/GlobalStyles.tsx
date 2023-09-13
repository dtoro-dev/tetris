import { createGlobalStyle } from "styled-components";
import { BgTetrisPunk } from "../images";

const GlobalStyles = createGlobalStyle`  
  body {
    background: url(${BgTetrisPunk}) #000;
    margin: 0;
    padding: 0;
    background-size: cover;
    background-position: center;
  }
`;

export default GlobalStyles;