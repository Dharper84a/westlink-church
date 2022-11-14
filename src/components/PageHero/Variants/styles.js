import styled, {css} from "styled-components";

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
    green_crosses: css` background: ${({theme}) => theme.colors.gradients.bluesUpDown}; `,
    dark_crosses: css` background: ${({theme}) => theme.colors.gradients.bluesUpDown}; `,
    gray_crosses: css` background: ${({theme}) => theme.colors.gradients.bluesUpDown}; `,
}

export const ColorHero = styled.div`
    ${HeroBase};
    ${ColorBase};
    ${props => ColorStyle[props.backgroundStyle]};
`