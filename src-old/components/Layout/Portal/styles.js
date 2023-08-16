import styled from 'styled-components';

export const _Overlay = styled.div`
    position: fixed;
    z-index: ${({theme}) => theme.layers.overlay};
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: hsla(203, 100%, 75%, 0.25);
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: opacity 0.5s;
    &.open {
        opacity: 1;
    }
    &.close {
        opacity: 0;
    }
`