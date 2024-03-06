import styled, {css, keyframes} from "styled-components";

export const _SideDrawer = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    height: 100vh;
`
export const _Content = styled.div`
    position: absolute;
    z-index: 120;
    width: 100%;
    padding: 0 ${({theme}) => theme.layout.screenEdge};
    transform: translateY(-100%);
    background: rgb(255,255,255);
    transition: transform 0.3s;
    &.open {
        transform: translateY(0);
    }
    header {
        display: flex;
        justify-content: flex-end;
        margin: 1rem 0;
    }
`
export const _Overlay = styled.div`
    position: absolute;
    z-index: 110;
    width: 100%;
    height: 100%;
    background: rgba(220, 220, 220, 0.65); //rgba(0, 132, 68, 0.95);
    backdrop-filter: blur(2px);
`