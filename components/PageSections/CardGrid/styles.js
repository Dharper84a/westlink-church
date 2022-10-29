import styled from "styled-components";

export const CardGridContainer = styled.div`
    ${({theme}) => theme.layout.container};
    padding: 4rem 0;
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    header {
        max-width: 650px;
        margin-bottom: 32px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    &.layout {
        &--50 {
            grid-template-columns: 1fr 1fr;
        }
        &--33 {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media ${({theme}) => theme.devices.ipads} {
        &.layout {
            &--50 {
                grid-template-columns: 1fr;
                figure {
                    margin: 0 auto;    
                }
            }
            &--33 {
                grid-template-columns: 1fr 1fr;
            }
        }
    }
`