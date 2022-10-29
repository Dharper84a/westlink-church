import styled, {keyframes} from "styled-components";

const fxSimpleFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const HeroFullWidthContainer = styled.div`
    ${({theme}) => theme.layout.container}
`

export const BackgroundImage = styled.figure`
    position: relative;
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 55vh;
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
        background: linear-gradient(180deg, rgba(54,69,79,0) 0%, rgba(53,57,53,1) 100%);
    }
    h1 {
        position: absolute;
        z-index: ${({theme}) => theme.layers.overlayContent};
        top: 50%;
        left: 15%;
        transform: translateY(-50%);
        color: ${({theme}) => theme.colors.text.light};
        font-size: ${({theme}) => theme.helpers.fontClamp(64, 86)};
        animation: ${fxSimpleFadeIn} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
`