import styled from "styled-components";

export const TextWithGraphicContainer = styled.div`
    ${({theme}) => theme.layout.container};
    padding: 4rem 0;
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-columns: 3fr 7fr;
    gap: 8rem;
    figure {
        box-shadow: -0.5rem -0.5rem 0 #C1E1C1, -1rem -1rem 0 #4682B4, 1rem 1rem 1.5rem rgba(0,0,0,.15);
    }
`