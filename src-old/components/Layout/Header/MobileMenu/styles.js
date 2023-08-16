import styled, {keyframes} from 'styled-components';

const fxOpen = keyframes`
    0% {
        transform: translateX(100vw);
    }
    100% {
        transform: translateX(0vw);
    }
`

const fxClose = keyframes`
    0% {
        transform: translateX(0vw);
    }
    100% {
        transform: translateX(100vw);
    }
`

const fxSlideIn = keyframes`
    0% {
        transform: translateX(150%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`

export const _MobileMenu = styled.div`
    overflow: hidden;
    position: fixed;
    z-index: ${({theme}) => theme.layers.overlay + 50};
    top: 0;
    right: 0;
    transform: translateX(100vw);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr max-content;
    width: 80vw;
    max-width: 400px;
    height: 100vh;
    background: ${({theme}) => theme.colors.white};
    box-shadow: -4px 0px 10px hsla(0, 0%, 0%, 0.35),
    -16px 0px 24px hsla(0, 0%, 35%, 0.65);
    
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 24px 24px 12px 24px;
      animation: ${fxSlideIn} 0.15s ease 0.3s both;
      button {
        width: 32px;
        height: 32px;
        color: ${({theme}) => theme.colors.white};
        font-size: 22px;
        background-color: ${({theme}) => theme.colors.tomato};
        border: none;
        border-radius: 4px;
      }
    }
    nav {
        overflow-y: scroll;
        margin: 12px 24px 24px 24px;
        animation: ${fxSlideIn} 0.15s ease 0.3s both;
        &::-webkit-scrollbar {
            width: 1em;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.colors.uraniumBlue};
            border-radius: 1rem;
        }
        menu {
            li {
                border-bottom: 1px solid ${({theme}) => theme.colors.darkWhite};
                &:first-of-type {
                    border-top: 1px solid ${({theme}) => theme.colors.darkWhite};
                }
            }
            a {
                display: block;
                width: 100%;
                padding: 1rem;
                font-weight: 600;
            }
            menu {
                li {
                    border: none;
                    &:first-of-type {
                        border: none;
                    }
                    &:last-of-type {
                        margin-bottom: 1rem;
                    }
                }
                a {
                    padding: 0.5rem 0.5rem 0.5rem 2rem;
                    font-size: 16px;
                    font-weight: 400;
                }
            }
        }
    }
    
    &.open {
        animation: ${fxOpen} 0.3s ease-in both;
    }
    &.close {
        animation: ${fxClose} 0.15s both;
    }
`

export const _SocialMenu = styled.menu`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 24px 24px;
    li {
        padding: 0 1rem;
    }
    a {
        font-size: 26px;
    }
`