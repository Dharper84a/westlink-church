import styled from "styled-components";

export const _Header = styled.header`
    position: fixed;
    z-index: ${({theme}) => theme.layer.content + 10};
    width: 100%;
    padding: 2rem 0;
    background: ${({theme}) => theme.color.white};
    backdrop-filter: blur(5px);
    box-shadow: ${({theme}) => theme.shadow.standard};
`

export const _Inner = styled.div`
    ${({theme}) => theme.layout.container.normal};
`