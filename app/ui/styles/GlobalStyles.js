import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: Open-Sans, Helvetica, Sans-Serif;
        font-size: 16px;
    }
    menu {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    h1 {
        line-height: 1.25;
    }
    p {
        font-size: ${({theme}) => theme.fontClamp(16, 20)};
        font-weight: 300;
        line-height: 1.45;
    }
`;
 
export default GlobalStyle;