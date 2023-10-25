import styled from "styled-components";

export const _FullWidthHero = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    img {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 150vh;
        transform: translate(${props => props.imageOffset}px);
    }
    /* background: url("/images/pink-purple-mirage-4k.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; */
`

export const _Inner = styled.div`
    ${({theme}) => theme.layout.container.normal};
    position: relative;
    z-index: 10;
    padding-top: 9rem;
    h1,p {
        color: ${({theme}) => theme.color.white};
    }
`