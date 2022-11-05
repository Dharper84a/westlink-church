import styled, {css,keyframes} from "styled-components";

const fxSimpleFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const optionIncludeOverlayGradient = css`
    figure {
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
            background: linear-gradient(0deg, rgba(30,30,30,0) 0%, rgba(30,30,30,0.95) 100%);
            @media ${({theme}) => theme.device.tablets} {
                background: linear-gradient(180deg, rgba(30,30,30,0) 0%, rgba(30,30,30,0.95) 100%);
            }
        }
    }

`
export const HeroFullWidthContainer = styled.div`
    width: 100%;
    height: 30vh;
    max-height: 500px;
    figure {
        position: relative;
        display: flex;
        margin: 0;      
        height: 100%;
        h1 {
            position: absolute;
            z-index: ${({theme}) => theme.layers.overlayContent};
            top: 1.5rem;
            left: 7%;
            margin: 0;
            padding-right: 7%;
            color: ${({theme}) => theme.colors.text.light};
            /* font-size: ${({theme}) => theme.helpers.fontClamp(64, 86)}; */
            font-size: ${({theme}) => theme.helpers.fontClampBox(28, 58, 350, 1024)};
            animation: ${fxSimpleFadeIn} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
    }

    /** Options */
    ${props => props.includeOverlayGradient !== false && optionIncludeOverlayGradient }

    @media ${({theme}) => theme.device.tablets} {
        figure {
            h1 {
                top: unset;
                bottom: 5rem;
            }
        }
    }
`

export const BackgroundImage = styled.figure`
    
`