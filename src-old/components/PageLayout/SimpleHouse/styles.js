import styled from 'styled-components'

export const LayoutSimpleHouse = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    figure {
        display: block;
    }
    section {
        order: 2;
    }
    @media ${({theme}) => theme.device.iphones} {
        aside {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px 30px;
        }
    }
    @media ${({theme}) => theme.device.ipads} {
        grid-template-columns: 1fr 1fr;
        gap: 60px 60px;
        padding-top: 60px;
        padding-bottom: 60px;
        section {
            order: 0;
        }
        aside {
            grid-template-columns: 1fr;
            height: fit-content;
            figure {
                order: 2;
            }
        }
    }
`