import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle=createGlobalStyle`
${reset}
body{
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0 auto;
    padding:0;
    list-style: none;
    box-sizing: border-box;
}
`