import styled from "styled-components";

export const _Modal = styled.div`
    position: fixed;
    z-index: ${({theme}) => theme.layers.overlay};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

export const _Backdrop = styled.div`
    position: absolute;
    z-index: ${({theme}) => theme.layers.overlay + 1};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(44, 76, 96, 0.65);
    backdrop-filter: blur(15px);
`

export const _Dialog = styled.div`
    position: relative;
    z-index: ${({theme}) => theme.layers.overlayContent};
    top: 50%;
    transform: translateY(-50%);
    width: 85%;
    max-width: 768px;
    margin: 0 auto;
    background: ${({theme}) => theme.colors.white};
    border-radius: 1rem;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        h2 {
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0 1rem;
            font-size: 16px;
            span {
                font-size: 14px;
                font-weight: 600;
            }
        }
        button {
            width: 48px;
            height: 48px;
            color: ${({theme}) => theme.colors.white};
            font-weight: 600;
            background: ${({theme}) => theme.colors.tomato};
            border: 0;
            border-top-right-radius: 1rem;
        }
    }
    ul {
        margin: 0;
        padding: 1rem;
        list-style: none;
        li {
            margin: 1rem 0;
        }
        span {
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.colors.magicBlue};
            div {
                position: relative;
                width: 32px;
                height: 32px;
                margin-right: 0.5rem;
                border-radius: 1rem;
                & * {
                    border-radius: 1rem;
                }
            }
        }
    }
`