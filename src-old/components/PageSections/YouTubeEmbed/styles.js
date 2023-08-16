import styled, {css} from "styled-components";

export const ComponentBox = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 32px;
    padding-bottom: 32px;
    figure {
        order: 1;
        position: relative;
        z-index: 15;
        height: ${props => props.iframeHeight}px;
        max-height: 480px;
        max-width: 1024px;
        border-radius: 4px;
        iframe {
            max-width: 100%;
            height: ${props => props.iframeHeight}px;
            max-height: 480px;
            border-radius: 4px;
        }
    }
    aside {
        order: 0;
        width: 100%;
        padding-bottom: 30px;
        h2 {
            margin: 24px 0 16px 0;
        }
        h3 {
            margin: 24px 0 8px 0;
        }
    }
    @media ${({theme}) => theme.device.largePhones} {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        padding-top: 48px;
        padding-bottom: 48px;
        aside {
            order: 2;
            h2 {
                margin-top: 0;
            }
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        gap: 48px;
        padding-top: 64px;
        padding-bottom: 64px;
    }
`