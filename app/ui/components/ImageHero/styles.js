import styled from "styled-components";

export const _ImageHero = styled.div`
    position: relative;
    height: 100vh;
    &:before {
        content: '';
        position: absolute;
        z-index: ${({theme}) => theme.layer.content};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 10%, rgba(35,43,43,0) 100%);
        mix-blend-mode: multiply;
    }
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    section {
        position: absolute;
        z-index: ${({theme}) => theme.layer.content + 1};
        top: 25%;
        transform: translateY(-25%);
        padding: 0 ${({theme}) => theme.layout.screenEdge};
        h1 {
            color: ${({theme}) => theme.color.white};
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
                    line-clamp: 2; 
            -webkit-box-orient: vertical;
        }
        p {
            color: ${({theme}) => theme.color.white};
            font-size: ${({theme}) => theme.fontClamp(20, 24)};
            line-height: 1.6;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5; /* number of lines to show */
                    line-clamp: 5; 
            -webkit-box-orient: vertical;
        }
        
    }
    @media ${({theme}) => theme.device.up1024} {
        section {
            max-width: 768px;
        }
    }
`