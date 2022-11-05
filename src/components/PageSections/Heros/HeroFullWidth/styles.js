import styled, {css,keyframes} from "styled-components";

const fxSimpleFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const HeroFullWidthContainer = styled.div`
    figure {
        position: relative;
        display: flex;
        margin: 0;
        width: 100%;
        height: ${props => props.heroHeight};
        /* min-height: 400px; */
        max-height: 45vh;
        &::after {
            content: ' ';
            display: block;
            position: absolute;
            z-index: ${({theme}) => theme.layers.overlay};
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            mix-blend-mode: multiply;
            background: rgb(54,69,79);
            background: linear-gradient(180deg, rgba(30,30,30,0) 0%, rgba(30,30,30,0.95) 100%);
            ${props => props.includeOverlayGradient === false && css`
            background: transparent;
            `}
        }
        h1 {
            position: absolute;
            z-index: ${({theme}) => theme.layers.overlayContent};
            top: 65%;
            left: 7%;
            transform: translateY(-50%);
            color: ${({theme}) => theme.colors.text.light};
            font-size: ${({theme}) => theme.helpers.fontClamp(64, 86)};
            animation: ${fxSimpleFadeIn} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
    }
`

export const BackgroundImage = styled.figure`
    
`