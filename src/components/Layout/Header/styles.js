import styled, { css, keyframes } from 'styled-components';
import {
    fxHideMenuButtonBox,
    fxShowMenuButtonBox,
    fxFlickerIn
} from '../../../styles/globalStyles';

export const SiteIdentity = styled.div`
    display: none;
    @media ${({ theme }) => theme.device.tablets} {
        display: grid;
        grid-template-columns: 48px 1fr;
        align-items: center;
        gap: 32px;
        a {
            color: ${({ theme }) => theme.colors.text.dark};
            font-size: ${({ theme }) => theme.helpers.fontClamp(28, 32)};
            &:hover {
                color: ${({ theme }) => theme.colors.text.dark};
                text-decoration: none;
            }
        }
    }
`;

export const MenuButtonBox = styled.div`
    position: absolute;
    top: -50px;
    display: flex;
    justify-content: center;
    width: 125px;
    height: 100px;
    padding-top: 0.5rem;
    border-top-left-radius: 70%;
    border-top-right-radius: 70%;
    background-color: ${({ theme }) => theme.colors.pastelGreen};
    button {
        height: fit-content;
        color: ${({ theme }) => theme.colors.text.dark};
        font-size: 32px;
        background-color: transparent;
        border: none;
    }
    @media ${({ theme }) => theme.device.tablets} {
        display: none;
    }
`;

export const MenuNavigationBox = styled.nav`
    display: none;
    @media ${({theme}) => theme.device.tablets} {
        display: block;
        ul {
            display: flex;
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                position: relative;
                ul {
                    position: absolute;
                    display: none;
                    width: 100%;
                    height: 100px;
                    background: white;
                }
            }
        }
        a {
            padding: 0 8px;
            color: ${({ theme }) => theme.colors.white};
            font-weight: 300;
        }
    }
`
export const ComponentBox = styled.header`
    position: fixed;
    z-index: ${({ theme }) => theme.layers.overlay};
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.pastelGreen};
    ${(props) =>
        props.transitionState === 'open' &&
        css`
            animation: ${fxHideMenuButtonBox} 0.1s linear both;
        `}
    ${(props) =>
        props.transitionState === 'closing' &&
        css`
            animation: ${fxShowMenuButtonBox} 0.1s linear 0.2s both;
        `}
    @media ${({ theme }) => theme.device.tablets} {
        ${({ theme }) => theme.layout.content};
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        background-color: rgba(144,186,144, 0.75); //rgba(193,225,193,0.75);
        backdrop-filter: blur(6px);
        box-shadow: 0 8px 24px rgba(40,40,43,0.2);
        ${SiteIdentity} {
            padding-right: 16px;
        }
        ${MenuButtonBox} {
            /* grid-area: B; */
        }
    }
`;
