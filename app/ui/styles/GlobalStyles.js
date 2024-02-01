import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    html, body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: var(--font-monserrat);
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
        height: fit-content;
        /* object-fit: contain; */
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0.5rem 0 0.75rem;
        font-family: var(--font-poppins);
        font-weight: 600;
        line-height: 1.2;
    }

    h1 {
        font-size: ${({theme}) => theme.fontClamp(40, 52)};
    }
    h2 {
        font-size: ${({theme}) => theme.fontClamp(34, 40)};
    }
    h3 {
        font-size: ${({theme}) => theme.fontClamp(26, 37)};
    }
    h4 {
        font-size: ${({theme}) => theme.fontClamp(22, 34)};
    }
    h5 {
        font-size: ${({theme}) => theme.fontClamp(20, 30)};
    }
    h6 {
        font-size: ${({theme}) => theme.fontClamp(18, 26)};
    }
    p {
        font-size: ${({theme}) => theme.fontClamp(16, 20)};
        font-weight: 400;
        line-height: 1.55;
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