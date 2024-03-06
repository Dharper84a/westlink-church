import styled, {css} from "styled-components";

export const _ImageHero = styled.div`
    position: relative;
    figure {
        position: relative;
        width: 100%;
        height: 65vh;
        display: flex;
    }
    img {
        object-fit: cover;
    }
    section {
        position: absolute;
        top: 50%;
        transform: translateY(-75%);
        margin: 0 ${({theme}) => theme.layout.screenEdge};
    }
    @media ${({theme}) => theme.device.up1024} {
        max-height: 400px;
    }
`