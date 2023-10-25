import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: Open-Sans, Helvetica, Sans-Serif;
        color: ${({theme}) => theme.color.darkText};
        font-size: 16px;
    }
    figure {
        display: flex;
        margin: 0;
    }
    menu {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    img {
        max-width: 100%;
    }
    h1 {
        line-height: 1.25;
    }
    h3 {
        margin: 0.5rem 0 0.75rem;
        font-size: ${({theme}) => theme.fontClamp(28, 38)};
    }
    p {
        font-size: ${({theme}) => theme.fontClamp(16, 20)};
        font-weight: 300;
        line-height: 1.45;
    }

    /** LINKS AND BUTTONS CLASSES */
    .button {
        padding: 0.5rem 1rem;
        color: ${({theme}) => theme.color.white};
        font-size: ${({theme}) => theme.fontClamp(18, 20)};
        background-color: ${({theme}) => theme.color.aqua};
        border: 2px solid ${({theme}) => theme.color.white};
        border-radius: 0.5rem;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.12);
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            text-decoration-thickness: 2px;
        }
    }
`;
 
export default GlobalStyle;