import styled from "styled-components";

export const PageHeroComponent = styled.div`
    position: relative;
    width: 100%;
`

export const HeroExcerpt = styled.footer`
    ${({theme}) => theme.layout.content};
    padding-top: 2rem;
    padding-bottom: 2rem;
    @media ${({theme}) => theme.device.ipads} {
        p {
            max-width: 650px;
        }
    }
`