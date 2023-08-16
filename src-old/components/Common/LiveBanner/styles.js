import styled from 'styled-components'

export const CommonComponent = styled.aside`
    position: fixed;
    z-index: 1000;
    top: 25%;
    width: 15vw;
    min-width: 250px;
    background: ${({theme}) => theme.colors.white};
    box-shadow: 4px 4px 32px rgba(25,25,25,0.15);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: 1.5rem solid ${({theme}) => theme.colors.tomato};
    border-top: 0.25rem solid ${({theme}) => theme.colors.tomato};
    border-bottom: 0.25rem solid ${({theme}) => theme.colors.tomato};
    a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 1rem 2rem;
        color: ${({theme}) => theme.colors.white};
        background: ${({theme}) => theme.colors.matteBlack};
        svg {
            padding-left: 0.5rem;
        }
        &:hover {
            background: ${({theme}) => theme.colors.magicBlue}
        }
    }
`   