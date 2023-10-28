import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    html, body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
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
        font-size: ${({theme}) => theme.fontClamp(32, 46)};
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
        display: flex;
        align-items: center;
        width: fit-content;
        padding: 0.35rem 0.75rem;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 0.16s;
        &--white {
            color: ${({theme}) => theme.color.darkText};
            background-color: ${({theme}) => theme.color.white};
            &:hover {
                background-color: ${({theme}) => theme.color.offWhite};
            }
        }
        &--icon-right {
            svg {
                margin-left: 0.5rem;
            }
        }
    }
`;
 
export default GlobalStyle;