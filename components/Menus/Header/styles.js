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
export const MenuContainer = styled.div`
    text-align: center;
    span {
        font-size: ${({theme}) => theme.helpers.fontClamp(26, 32)};
        font-weight: 700;
    }
    nav {
        display: grid;
        justify-content: center;
        gap: 24px;
        padding-top: 32px;
        text-align: center;
        a {
            color: ${({theme}) => theme.colors.text.link};
            font-size: ${({theme}) => theme.helpers.fontClamp(22, 26)};
        }
    }
    header {
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
    }
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
    
    button {
        height: fit-content;
        color: ${({theme}) => theme.colors.text.light};
        font-size: 32px;
        background-color: transparent;
        border: none;
    }
`