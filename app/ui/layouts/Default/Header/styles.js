import styled from "styled-components";

export const _Header = styled.header`
    position: fixed;
    z-index: ${({theme}) => theme.layer.content + 90};
    top: 0;
    width: 100vw;
`

export const _Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem ${({theme}) => theme.layout.screenEdge};
    span {
        color: ${({theme}) => theme.color.white};
        font-size: ${({theme}) => theme.fontClamp(22, 28)};
        font-weight: 600;
    }
    menu {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    a {
        color: ${({theme}) => theme.color.white};
        &:hover {
            text-decoration: none;
        }
    }
    button {
        font-weight: 600;
    }
`