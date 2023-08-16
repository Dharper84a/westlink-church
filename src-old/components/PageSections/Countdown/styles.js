import styled from 'styled-components'

export const SectionComponent = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 32px;
    padding-bottom: 32px;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    header {
        padding: 1rem;
        margin-bottom: 2rem;
        background: rgba(255,255,255,0.5);
        backdrop-filter: blur(4px);
        border-radius: 0.5rem;
    }
    .countdown {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        max-height: 150px;
        background: ${({theme}) => theme.colors.lightMagicBlue};
        border: 3px solid ${({theme}) => theme.colors.magicBlue};
        border-radius: 0.5rem;
        div {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            background: ${({theme}) => theme.colors.lightMagicBlue};
            p {
                text-align: center;
            }
        }
    }
    
    @media ${({theme}) => theme.device.largePhones} {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        padding-top: 48px;
        padding-bottom: 48px;
        div {
            p {
                padding: 0 0.75rem;
            }
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        gap: 48px;
        padding-top: 64px;
        padding-bottom: 64px;
        div {
            p {
                padding: 0 1rem;
            }
        }
    }
`