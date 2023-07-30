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
        &::before {
            content: ' ';
            display: block;
            position: absolute;
            z-index: ${({theme}) => theme.layers.overlay};
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            mix-blend-mode: multiply;
            background: linear-gradient(270deg, rgba(30,30,30,0) 0%, rgba(30,30,30,1) 100%);
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        figure {
            &::before {
                background: linear-gradient(0deg, rgba(30,30,30,0) 0%, rgba(30,30,30,1) 100%);
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
            top: 50%;
            left: 7%;
            transform: translateY(-50%);
            margin: 0;
            padding-right: 7%;
            color: ${({theme}) => theme.colors.text.light};
            font-size: ${({theme}) => theme.helpers.fontClampBox(34, 72, 350, 1920)};
            animation: ${fxSimpleFadeIn} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
        img {
            object-fit: cover;
            object-position: top;
        }
    }

    

    @media ${({theme}) => theme.device.tablets} {
        min-height: 400px;
        figure {
            &::before {
                content: ' ';
                display: block;
                position: absolute;
                z-index: ${({theme}) => theme.layers.overlay};
                top: 0;
                left: 0;
                width: 100%;
                height: 80px;
                mix-blend-mode: multiply;
                background: linear-gradient(0deg, rgba(30,30,30,0) 0%, rgba(30,30,30,1) 100%);
            }
        }
    }

    /** Options */
    ${props => props.includeOverlayGradient !== false && optionIncludeOverlayGradient }
`

export const BackgroundImage = styled.figure`
    
`