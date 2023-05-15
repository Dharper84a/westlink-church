import styled from 'styled-components'

export const NavigationBox = styled.nav`
    ${({theme}) => theme.layout.content};
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    button {
        padding: 1rem 1.5rem;
        color: ${({theme}) => theme.colors.text.light};
        font-size: 24px;
        border: 3px solid ${({theme}) => theme.colors.magicBlue};
        border-radius: 8px;
        background: ${({theme}) => theme.colors.gradients.blues};
        transition: all 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000);
        &:disabled {
            color: ${({theme}) => theme.colors.darkGray};
            background: ${({theme}) => theme.colors.mediumGray};
            border-color: ${({theme}) => theme.colors.gray};
            transform: none;
            box-shadow: none;
        }
       
    }
    @media ${({theme}) => theme.device.smallMonitors} {
        button {
            cursor: pointer;
            &:hover {
                transform: scale(1.025) translateZ(50px);
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
            }
            &:disabled {
                cursor: default;
                &:hover {
                    color: ${({theme}) => theme.colors.darkGray};
                    background: ${({theme}) => theme.colors.mediumGray};
                    border-color: ${({theme}) => theme.colors.gray};
                    transform: none;
                    box-shadow: none;
                }
            }
        }
    }
`