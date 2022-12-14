import styled, {css} from "styled-components";

const cssImageLeft = css`
    grid-template-columns: 0.4fr 0.6fr;
    figure {
        order: 1;
    }
    aside {
        order: 2;
    }
`
const cssImageRight = css`
    grid-template-columns: 0.6fr 0.4fr;
    figure {
        order: 2;
    }
    aside {
        order: 1;
    }
`

export const ComponentBox = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: ${({theme, bgColor}) => theme.colors[bgColor]};
    figure {
        position: relative;
        z-index: 15;
        height: 33vh;
        max-width: 1024px;
        border-radius: 4px;
        span, img {
            border-radius: 4px;
        }
    }
    aside {
        width: 100%;
        max-width: ${({imageOnLeft}) => imageOnLeft ? '650px' : '800px'};
        h2, h3, p {
            color: ${({theme, textColor}) => theme.colors[textColor]};
        }
        h2 {
            margin: 24px 0 16px 0;
        }
        h3 {
            margin: 24px 0 8px 0;
        }
        a {
            color: ${({theme, imageOnLeft}) => imageOnLeft ? theme.colors.matteBlack : theme.colors.magicBlue};
        }
    }
    @media ${({theme}) => theme.device.largePhones} {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        padding-top: 48px;
        padding-bottom: 48px;
        figure {
            height: 33vh;
            min-height: 300px;
        }
        aside {
            h2 {
                margin-top: 0;
            }
        }
        ${props => props.imageOnLeft ? cssImageLeft : cssImageRight};
    }
    @media ${({theme}) => theme.device.tablets} {
        gap: 48px;
        padding-top: 64px;
        padding-bottom: 64px;
        figure {
            min-height: 400px;
        }
    }
`