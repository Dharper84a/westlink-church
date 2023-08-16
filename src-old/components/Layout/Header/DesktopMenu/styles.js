import styled from "styled-components";

export const _DesktopMenu = styled.nav`
    display: none;
    @media ${({theme}) => theme.device.up1024} {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        menu {
            display: flex;
            justify-content: space-around;
            gap: 2.25rem;
        }
        li {
            position: relative;
            menu {
                display: none;
            }
            &:hover {
                menu {
                    position: absolute;
                    display: block;
                    width: max-content;
                    border-radius: 0 0 4px 4px;
                    li {
                        &:last-of-type {
                            border-radius: 0 0 4px 4px;
                            a {
                                border-radius: 0 0 4px 4px;
                            }
                        }
                    }
                    a {
                        display: block;
                        padding: 0.75rem 1.5rem;
                        color: ${({theme}) => theme.colors.charcoal};
                        background-color: ${({theme}) => theme.colors.white};
                        border-left: 8px solid ${({theme}) => theme.colors.veryLightBlue};
                        transition: all 0.2s;
                        &:hover {
                            color: ${({theme}) => theme.colors.dark};
                            text-decoration: none;
                            background-color: ${({theme}) => theme.colors.veryLightBlue};
                            border-color: ${({theme}) => theme.colors.lightBlue};
                        }
                        
                    }
                    &:hover {
                        
                    }
                }
            }
        }
        a {
            color: ${({theme}) => theme.colors.charcoal};
            text-decoration-color: ${({theme}) => theme.colors.white};
            &:hover {
                color: ${({theme}) => theme.colors.grayBlue};
                text-underline-offset: 0.5rem;
                text-decoration-thickness: 0.25rem;
                text-decoration-color: ${({theme}) => theme.colors.veryLightBlue};
            }
        }
    }

`