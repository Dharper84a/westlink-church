import styled, { css, keyframes } from 'styled-components';
import {
    fxHideMenuButtonBox,
    fxShowMenuButtonBox,
    fxFlickerIn,
    fxPulse
} from '../../../styles/globalStyles';


export const _SiteHeader = styled.header`
    position: sticky;
    z-index: ${({theme}) => theme.layers.content + 50};
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 96px;
    background: ${({theme}) => theme.colors.white};
    box-shadow: ${({theme}) => theme.shadows.standard};
    @media ${({theme}) => theme.device.up1024} {
        /* height: 128px; */
    }
`

export const _Inner = styled.div`
    ${({theme}) => theme.layout.containerFull};
    display: flex;
    justify-content: space-between;
    padding: 2rem ${({theme}) => theme.layout.screenEdge};
    figcaption {
        display: none;
    }
    @media ${({theme}) => theme.device.up1024} {
        display: grid;
        grid-template-columns: 275px 1fr;
        gap: 4rem;
        figure {
            a {
                display: flex;
                align-items: center;
                color: ${({theme}) => theme.colors.charcoal};
                &:hover {
                    text-decoration: none;
                }
            }
            figcaption {
                display: block;
                margin-left: 1rem;
            }
        }
    }
`

export const _MobileMenuButton = styled.button`
    width: 48px;
    height: 48px;
    color: ${({theme}) => theme.colors.white};
    font-size: 22px;
    background-color: ${({theme}) => theme.colors.magicBlue};
    border: none;
    border-radius: 4px;
    @media ${({theme}) => theme.device.up1024} {
        display: none;
    }
`

export const SiteIdentity = styled.div`
    display: none;
    @media ${({ theme }) => theme.device.tablets} {
        display: grid;
        grid-template-columns: 48px 1fr;
        align-items: center;
        gap: 32px;
        a {
            color: ${({ theme }) => theme.colors.text.light};
            font-size: ${({theme}) => theme.helpers.fontClampBox(20, 40, 1024, 3840)};
            &:hover {
                color: ${({ theme }) => theme.colors.text.light};
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
    /* background-color: ${({ theme }) => theme.colors.pastelGreen}; */
    background-color: ${({ theme }) => theme.colors.matteBlack};
    /* background: ${({ theme }) => theme.colors.gradients.blues}; */
    cursor: pointer;
    button {
        height: fit-content;
        color: ${({ theme }) => theme.colors.uraniumBlue};
        font-size: 32px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    @media ${({ theme }) => theme.device.tablets} {
        display: none;
    }
`;

export const MenuNavigationBox = styled.nav`
    display: none;
    @media ${({theme}) => theme.device.tablets} {
        display: block;
        menu {
            display: flex;
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                position: relative;
                a {
                    display: inline-block;
                    padding: 8px 24px 8px 16px;
                    color: ${({theme}) => theme.colors.white};
                    font-size: ${({theme}) => theme.helpers.fontClampBox(14, 18, 1024, 1920)};
                    font-weight: 500;

                }
                menu {
                    position: absolute;
                    display: none;
                    flex-direction: column;
                    width: max-content;
                    min-width: 100%;
                    height: 0px;
                    opacity: 0;
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                    box-shadow: 4px 4px 16px rgba(11,11,11,0.25);
                    transition: all 0.3s;
                    a {
                        display: block;
                        width: 100%;
                        color: ${({theme}) => theme.colors.offWhite};
                        border-left: 8px solid transparent;
                        opacity: 0;
                        background: ${({theme}) => theme.colors.matteBlack};
                        &:hover {
                            text-decoration: none;
                        }
                    }
                    li {
                        &:last-of-type {
                            a {
                                border-bottom-left-radius: 4px;
                                border-bottom-right-radius: 4px;
                            }
                        }
                    }
                }
                &:hover {  
                    menu {
                        display: block;
                        height: fit-content;
                        opacity: 1;
                        transition: all 0.3s;
                        a {
                            opacity: 1;
                            
                            &:hover {
                                color: ${({theme}) => theme.colors.matteBlack};
                                background: ${({theme}) => theme.colors.uraniumBlue};
                                border-left: 8px solid ${({theme}) => theme.colors.offWhite};
                            }
                        }
                    }
                }
            }
        }
        a {
            padding: 0 8px;
            color: ${({ theme }) => theme.colors.white};
            font-weight: 300;
        }
    }
    @media ${({theme}) => theme.device.smallMonitor} {
        menu {
            li {
                a {
                    font-size: 18px;
                }
            }
            
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
    /* background-color: ${({ theme }) => theme.colors.pastelGreen}; */
    /* background-color: ${({ theme }) => theme.colors.magicBlue}; */
    background-color: ${({ theme }) => theme.colors.matteBlack};
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
        position: absolute;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        background-color: transparent;
        ${SiteIdentity} {
            padding-right: 16px;
        }
        ${MenuButtonBox} {
            /* grid-area: B; */
        }
        
        &::before {
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 80%;
        }
    }
`;
