import styled, {css, keyframes} from "styled-components";

const HeroBase = css`
    position: relative;
    height: 25vh;
    max-height: 480px;
    h1{
        position: absolute;
        top: 25%;
        transform: translateY(-50%);
        margin: 0;
        padding-top: 1rem;
        padding-right: ${({theme}) => theme.layout.pagePadding.right};
        padding-left: ${({theme}) => theme.layout.pagePadding.left};
        color: ${({theme}) => theme.colors.text.light};
    }

    @media ${({theme}) => theme.device.ipads} {
        height: 35vh;
        h1 {
            top: 50%;
        }
    }
`

const ColorBase = css`
    max-height: 325px;
    &:after {
        content: ' ';
        position: absolute;
        bottom: 0;
        right: ${({theme}) => theme.layout.pagePadding.right};
        width: 131px;
        height: 125px;
        background-image: url('/images/three-crosses.png');
        background-repeat: no-repeat;
        background-position: 94% 100%;
        background-size: 131px 125px;
    }
    @media ${({theme}) => theme.device.iphones} {
        &:after {   
            width: 175px;
            height: 167px;         
            background-size: 175px 167px;
        }
    }
`

const ColorStyle = {
    blue_crosses: css` background: ${({theme}) => theme.colors.gradients.bluesUpDown}; `,
    green_crosses: css` background: ${({theme}) => theme.colors.gradients.greensUpDown}; `,
    dark_crosses: css` background: ${({theme}) => theme.colors.gradients.darksUpDown}; `,
    gray_crosses: css` background: ${({theme}) => theme.colors.gradients.graysUpDown}; `,
}

export const ColorHero = styled.div`
    ${HeroBase};
    ${ColorBase};
    ${props => ColorStyle[props.backgroundStyle]};
`

export const MobileTitle = styled.div`
    ${({theme}) => theme.layout.content};
    padding-top: 2rem;
    padding-bottom: 2rem;
`

export const CarouselHero = styled.div`
    ${HeroBase};
    height: 50vh;
    max-height: 100%;
    background: gray;
    figure {
        img {
            object-fit: cover;
            object-position: center;
        }
    }
    @media ${({theme}) => theme.device.ipads} {
        height: 60vh;
        h1 {
            top: 50%;
        }
    }
`

export const TrackPath = styled.div`
    background: red;
    overflow: hidden;
    width: 100%;
    height: 100%;
`

export const Track = styled.div`
    background: green;
    position: relative;
    transform: translateX(0px);
    display: inline-flex;
    width: calc(${props => props.screenWidth * props.slideCount}px);
    height: 100%;
    &.transitions {
        transition: transform 0.5s ease-in;
    }
    
`

export const TrackItem = styled.div`
    background: blue;
    width: 100%;
    height: 100%;
    figure {
        position: relative;
        width: 100%;
        height: 100%;
    }
`

/** LARGE HERO */

const fxOnLoaded = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const LargeImageHero = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 65vh;
    max-height: 800px;
    ${props => props.imageLoaded && css`
    animation: ${fxOnLoaded} 0.15s ease both;
    `}
    section {
        position: absolute;
        z-index: ${({theme}) => theme.layers.content};
        width: 100%;
        padding: ${({theme}) => theme.layout.pagePadding.css};
        padding-bottom: 4rem;
        h1, p {
            max-width: 768px;
            color: ${({theme}) => theme.colors.text.light};
        }
        
    }
    figure {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 65vh;
        max-height: 800px;
        background: ${({theme}) => theme.colors.magicBlue};
        &::after {
            content: ' ';
            position: absolute;
            z-index: ${({theme}) => theme.layers.base + 1};
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            mix-blend-mode: multiply;
            background: ${({theme}) => theme.colors.gradients.largeHeroContentOverlayMobile};
        }
        img {
            object-fit: cover;
            object-position: center;
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        section {
            padding-bottom: 2rem;
        }
        figure {
            &::before {
                content: ' ';
                position: absolute;
                z-index: ${({theme}) => theme.layers.base + 1};
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                mix-blend-mode: multiply;
                background: ${({theme}) => theme.colors.gradients.darkOverlayUD};
            }
            &::after {
                background: ${({theme}) => theme.colors.gradients.largeHeroContentOverlayTablet};
            }
        }
    }
`
/** END - LARGE HERO */