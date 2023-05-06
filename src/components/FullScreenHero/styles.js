import styled from "styled-components";

export const FullScreenHeroBox = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    figure {
        position: relative;
        top: ${props => props.figureTop}%;
        width: 100%;
        height: 100%;
        margin: 0;
    }
    h1 {
        position: absolute;
        top: ${props => props.headingTop}%;
        left: ${({theme}) => theme.paddings.screenEdge};
        margin: 0;
        padding-right: ${({theme}) => theme.paddings.screenEdge};
        color: ${({theme}) => theme.colors.light};
    }   
`