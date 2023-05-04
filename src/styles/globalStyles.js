import {keyframes,createGlobalStyle} from 'styled-components';
const fxSimpleFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const fxButtonBackground = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`
export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    html,
    body {
        width: 100%;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background: ${({theme}) => theme.colors.background.light};
    }

    body {
        font-family: ${({theme}) => theme.fonts.bodyFont};
        font-size: ${({theme}) => theme.fonts.bodyFontSize};
        font-weight: 400;
        animation: ${fxSimpleFadeIn} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }

    menu {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 0.5rem 0;
        color: ${({theme}) => theme.colors.text.dark};
        font-family: ${({theme}) => theme.fonts.headerFont};
        font-weight: 600;
        line-height: 1.25;
    }
    h1 {
        font-size: ${({theme}) => theme.helpers.fontClamp(42, 56)};
    }
    h2 {
        /* margin-top: 2rem; */
        font-size: ${({theme}) => theme.helpers.fontClamp(26, 36)};
    }
    h3 {
        font-size: ${({theme}) => theme.helpers.fontClamp(24, 30)};
    }
    h4 {
        font-size: ${({theme}) => theme.helpers.fontClamp(22, 24)};
    }
    p {
        margin: 0.25rem 0 1rem 0;
        padding: 0;
        font-family: ${({theme}) => theme.fonts.bodyFont};
        color: ${({theme}) => theme.colors.text.dark};
        font-size: ${({theme}) => theme.helpers.fontClamp(18,20)};
        line-height: 1.75;
    }
    ul, figure {
        margin: 0;
        padding: 0;
    }
    figure {
        display: flex;
        border-radius: 4px;
        * {
            /* border-radius: 0.5rem; */
        }
    }
    a {
        position: relative;
        font-family: ${({theme}) => theme.fonts.bodyFont};
        color: ${({theme}) => theme.colors.text.link};
        text-decoration: none;
        transition: all 0.17s ease-in;
        &:hover {
            color: ${({theme}) => theme.colors.blue};
            text-decoration: underline;
            text-underline-offset: 5px;
        }
    }
    button {
        font-family: ${({theme}) => theme.fonts.bodyFont};
        font-size: ${({theme}) => theme.helpers.fontClamp(18,20)};
    }
    
    article {
        max-width: 800px;
    }

    table {
      width: 100%;
      margin: 0;
      border-spacing: 0;
      th, td {
        border: 1px solid #d0d0d0;
        p {
          margin: 0 !important;
          padding: 0.75rem 1rem;
        }
      }

      th {
        text-align: left;
        background-color: #e4e4e4;
        &:first-of-type {
          border-radius: 0.5rem 0 0 0;
        }
        &:last-of-type {
          border-radius: 0 0.5rem 0 0;
        }
      }
     
      
    }

    /** Form */
    label[aria-hidden] {
        position: absolute;
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0,0,0,0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }
    input, textarea, select {
        width: 100%;
        margin: 8px 0;
        padding: 8px 8px;
        font-family: ${({theme}) => theme.fonts.bodyFont};
        color: ${({theme}) => theme.colors.onyx};
        font-size: ${({theme}) => theme.helpers.fontClamp(18,20)};
        border: solid 2px ${({theme}) => theme.colors.magicBlue};
        border-radius: 4px;
        &::placeholder {
            color: ${({theme}) => theme.colors.darkGray};
        }
    }
    form {
        button {
            width: 100%;
            margin: 8px 0;
            padding: 12px;
            cursor: pointer;
            color: ${({theme}) => theme.colors.offWhite};
            font-weight: 400;
            background: ${({theme}) => theme.colors.lightMagicBlue};
            background: ${({theme}) => theme.colors.gradients.blues};
            font-size: ${({theme}) => theme.helpers.fontClamp(20,22)};
            border: none;// solid 3px ${({theme}) => theme.colors.lightMagicBlue};
            border-radius: 4px;
            box-shadow: rgba(17, 17, 26, 0) 0px 4px 16px, rgba(17, 17, 26, 0) 0px 8px 32px;
            transition: all 0.2s;
            &:hover {
                box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
                transition: all 0.2s;
            }
        }
    }

`

export const fxPulse = keyframes`
0%, 100% {
  border-color: ${({theme}) => theme.colors.matteBlack};
}
50% {
  border-color: ${({theme}) => theme.colors.matteBlack};
}
`
export const fxOverlayBGMountEvent = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}

`;
export const fxCloseDrawer = keyframes`
0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(500px);
    opacity: 0;
  }
`
export const fxOpenDrawer = keyframes`
0% {
    transform: translateY(500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
`
export const fxHideMenuButtonBox = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(75px);
    }
`
export const fxShowMenuButtonBox = keyframes`
    0% {
        transform: translateY(75px);
    }
    100% {
        transform: translateY(0);
    }
`
export const fxFlickerIn = keyframes`
0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    opacity: 1;
  }
  30.5% {
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;