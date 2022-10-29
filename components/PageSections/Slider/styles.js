import styled, {keyframes,css} from 'styled-components';

const fxScaleOutCenter = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.85);
        opacity: 0.5;
    }
`
const fullScreenNav = css`
    position: absolute;
    z-index: ${({theme}) => theme.layers.content + 1};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    button {
        width: 25%;
        max-width: 350px;
        height: 100%;
        max-height: 450px;
        padding: 0 3rem;
        mix-blend-mode: multiply;
        background: rgba(0,0,0,0.5);         
        color: ${({theme}) => theme.colors.offWhite};
        font-size: 48px;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        &:first-of-type {
            text-align: left;
            background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }
        &:last-of-type {
            text-align: right;
            background: linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }
        &:hover {
            font-size: 72px;
        }
    }
`

const cardNav = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    button {
        padding: 1rem 1.5rem;
        color: ${({theme}) => theme.colors.matteBlack};
        font-size: 24px;
        border: 3px solid ${({theme}) => theme.colors.pastelGreen};
        border-radius: 8px;
        background: ${({theme}) => theme.colors.pastelGreen};
        transition: all 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000);
        &:disabled {
            color: ${({theme}) => theme.colors.darkGray};
            background: ${({theme}) => theme.colors.mediumGray};
            border-color: ${({theme}) => theme.colors.gray};
            animation: ${fxScaleOutCenter} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
            transform: none;
            box-shadow: none;
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        position: absolute;
        z-index: ${({theme}) => theme.layers.content + 1};
        bottom: 0;
        right: 0;
    }
    @media ${({theme}) => theme.device.smallMonitors} {
        button {
            cursor: pointer;
            &:hover {
                background: ${({theme}) => theme.colors.lightPastelGreen};
                transform: scale(1.025) translateZ(50px);
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
            }
            &:disabled {
                cursor: default;
            }
        }
    }
`
export const ComponentBox = styled.section`
    ${({theme}) => theme.layout.content};
    position: relative;
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: ${({theme, bgColor}) => theme.colors.background[bgColor]};
    header {
        position: relative;
        margin: 0 0 24px 0;
        h2, p {
            max-width: 650px;
        }
        h2 {
            margin-top: 0;
        }
        nav {
            &.full_screen {
                ${fullScreenNav}
            }
            &.card {
                ${cardNav}
            }
        }
    }
    @media ${({theme}) => theme.device.largePhones} {
        padding-top: 48px;
        padding-bottom: 48px;
    }
    @media ${({theme}) => theme.device.largePhones} {
        padding-top: 64px;
        padding-bottom: 64px;
    }
    
`