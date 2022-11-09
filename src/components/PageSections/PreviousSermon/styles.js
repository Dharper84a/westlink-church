import styled from 'styled-components'

export const ComponentBase = styled.section`
    ${({theme}) => theme.layout.content};
    padding-top: 30px;
    padding-bottom: 30px;
    header {
        margin-bottom: 16px;
    }
    @media ${({theme}) => theme.device.tablets} {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`

export const VideoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 30px;
    aside {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 30px;
        a {
            display: inline-block;
            width: 100%;
            padding: 1rem 2rem;
            color: ${({theme}) => theme.colors.matteBlack};
            background: ${({theme}) => theme.colors.lightPastelGreen};
            border-radius: 4px;
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            "h h"
            "v l";
        gap: 0px 60px;
        h3 {
            grid-area: h;
        }
        div {
            grid-area: v;
        }
        aside {
            grid-area: l;
            margin-top: 0;
            background: ${({theme}) => theme.colors.lightPastelGreen};
            a {
                display: inline;
                padding: 0;
                background: transparent;
                border-radius: 0;
                text-decoration: underline;
            }
        }
    }
`