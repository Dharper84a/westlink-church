import styled, {keyframes} from 'styled-components'
const fxCloseOut = keyframes`
    0% {
        transform: scale(1.4) rotate(90deg);
    }
    100% {
        transform: scale(1) rotate(0deg);
    }
`

const fxOpen = keyframes`
0% {
    transform: translateY(2000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const fxSubMenuOpen = keyframes`
0% {
    transform: translateX(200%);
}
100% {
    transform: translateX(0%);
}
`

const fxSubMenuClose = keyframes`
0% {
    transform: translateX(0%);
}
100% {
    transform: translateX(200%);
}
`
export const MenuContainer = styled.div`
    header {
        padding: 1rem;
        background: ${({theme}) => theme.colors.magicBlue};
        a {
            color: ${({theme}) => theme.colors.offWhite};
            font-size: ${({theme}) => theme.helpers.fontClamp(26, 32)};
            font-weight: 300;
            &:hover {
                text-decoration: none;
            }
        }
    }
    menu {
        display: grid;
        width: 100%;
        li {
            background: ${({theme}) => theme.colors.uraniumBlue};
            a {
                color: ${({theme}) => theme.colors.matteBlack};
            }   
            a, button {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 0.75rem 1rem;
                text-align: left;
                border: none;
                cursor: pointer;
            }
            button {
                svg {
                    transition: transform 0.3s;
                }
                &:hover {
                    background: ${({theme}) => theme.colors.mediumGray};
                }
            }
            menu {
                position: absolute;
                z-index: 10;
                display: none;
                height: 100%;
                background: ${({theme}) => theme.colors.uraniumBlue};
                a {
                    padding-left: 2rem;
                }
            }
            &.not-open {
                menu {
                    display: block;
                    animation: ${fxSubMenuClose} cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s both;
                }
            }
            //193, 225,193
            &.open {
                background: rgb(255,255,255);
                button {
                    background: ${({theme}) => theme.colors.matteBlack};
                    color: ${({theme}) => theme.colors.offWhite};
                    svg {
                        color: ${({theme}) => theme.colors.tomato};
                        transform: rotate(180deg);
                    }
                }
                menu {
                    display: block;
                    animation: ${fxSubMenuOpen} cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s both;
                }
            }
        }
    }
    /* header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            font-size: 24px;
            font-weight: 500;
        }
        svg {
            color: ${({theme}) => theme.colors.rubyRed};
            font-size: 32px;
            cursor: pointer;
            &:hover {
                animation: ${fxOpen} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
            &:not(:hover) {
                animation: ${fxCloseOut} 0.3s forwards;
            }
        }
    } */
`

export const MenuCloseBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,45%);
    display: flex;
    justify-content: center;
    width: 125px;
    height: 100px;
    padding-top: 0.5rem;
    border-top-left-radius: 70%;
    border-top-right-radius: 70%;
    background-color: ${({ theme }) => theme.colors.tomato};
    cursor: pointer;
    button {
        height: fit-content;
        color: ${({theme}) => theme.colors.text.light};
        font-size: 32px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`