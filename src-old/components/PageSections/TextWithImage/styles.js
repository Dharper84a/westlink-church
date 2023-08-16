import styled, {css} from "styled-components";

const cssImageLeft = css`
    
    background-color: ${({theme}) => theme.colors.mediumBlue};
    h2, p, a {
        color: ${({theme}) => theme.colors.white};
    }
    a {
        text-decoration: underline;
        text-decoration-color: ${({theme}) => theme.colors.veryLightBlue};
        text-underline-offset: 0.5rem;
        text-decoration-thickness: 0.15rem;
        &:hover {            
            text-underline-offset: 0.65rem;
            text-decoration-color: ${({theme}) => theme.colors.bluePurple};
        }
    }
    @media ${({theme}) => theme.device.up1024} {
        grid-template-columns: 0.4fr 0.6fr;
        figure {
            order: 1;
        }
        aside {
            order: 2;
        }
    }
    @media ${({theme}) => theme.device.up1600} {
        grid-template-columns: 0.5fr 0.5fr;
    }

`
const cssImageRight = css`
    
    @media ${({theme}) => theme.device.up1024} {
        grid-template-columns: 0.6fr 0.4fr;
        figure {
            order: 2;
        }
        aside {
            order: 1;
        }
    }
    @media ${({theme}) => theme.device.up1600} {
        grid-template-columns: 0.5fr 0.5fr;
    }
`
export const _TextWithImage = styled.div`
    ${({theme}) => theme.layout.containerFull};
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem 0;
    img {
        width: fit-content;
        max-width: 100%;
        object-fit: contain;
        
    }
    figure {
        order: 1;
        display: flex;
        justify-self: center;
        align-self: center;
        height: max-content;
    }
    aside {
        order: 0;
        margin: 2rem ${({theme}) => theme.layout.screenEdge};
    }
    ${props => props.imageOnLeft === true ? cssImageLeft : cssImageRight}
    @media ${({theme}) => theme.device.up1024} {
        gap: 6rem;
        padding: 3rem ${({theme}) => theme.layout.screenEdge};
        figure, img {
            border-radius: 0.5rem;
        }
        
        aside {
            margin: 0;
        }
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
        img {
            object-fit: cover;
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