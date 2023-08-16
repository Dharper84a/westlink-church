import styled from "styled-components";

export const _FullWidthHero = styled.div`
    background: ${({theme}) => theme.color.aquaGray};
    height: 100vh;
`

export const _Inner = styled.div`
    ${({theme}) => theme.layout.container.normal};
    padding-top: 9rem;
    h1,p {
        color: ${({theme}) => theme.color.white};
    }
`