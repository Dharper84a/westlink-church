import styled, {css} from "styled-components";

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
    transition: all 0.23s;
    ${props => props.variant === 'solid' ? (
        css`
        background-color: ${({theme}) => theme.color.white};
        span, a {
            color: ${({theme}) => theme.color.darkText};
        }
        
        `
     ):(
        css`
        background-color: rgba(0,0,0,0.3);
        backdrop-filter: blur(3px) brightness(25%);
        span, a {
            color: ${({theme}) => theme.color.white};
        }
        `
    )}
    
    span {
        font-size: ${({theme}) => theme.fontClamp(22, 28)};
        font-weight: 600;
    }
    menu {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    a {
        
        &:hover {
            text-decoration: none;
        }
    }
    button {
        font-weight: 600;
    }
    @media ${({theme}) => theme.device.up1024} {
        ${props => props.variant === 'solid' ? (
            css`
            background-color: ${({theme}) => theme.color.white};
            `
        ):(
            css`
            background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
            backdrop-filter: unset;
            `
        )}
        
    }
`