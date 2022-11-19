import styled from 'styled-components'

export const Component = styled.div`
    ${({theme}) => theme.layout.content};
    position: relative;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: ${({theme}) => theme.colors.magicBlue};
    h2, h3, h4, p {
        color: ${({theme}) => theme.colors.text.light};
    }
    h3 {
        margin: 16px 0;
    }
    figure {
        width: fit-content;
        border-radius: 4px;
        border: 0.5rem solid ${({theme}) => theme.colors.light};
        box-shadow: ${({theme}) => theme.shadows.image};
        span, img {
            border-radius: 4px;
        }
    }
    @media ${({theme}) => theme.device.largePhones} {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    @media ${({theme}) => theme.device.smallMonitor} {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`
export const LeadMinister = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0 4rem 0;
    figure {
        height: fit-content;
        max-height: 360px;
        border: 0.5rem solid ${({theme}) => theme.colors.light};
        box-shadow: ${({theme}) => theme.shadows.image};
    }
    aside {
        max-width: 650px;
        margin-top: 30px;
        h3 {
            margin-top: 0;
        }
        p {
            margin-top: 16px;
        }
    }
    @media ${({theme}) => theme.device.largePhones} {
        flex-direction: row;
        figure {
            width: 50%;
        }
        aside {
            width: 50%;
            margin-top: 0;
            margin-left: 60px;
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        figure {
            width: fit-content;
        }
    }
`
export const AssistantMinisters = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
    margin: 2rem 0 0 0;
    figure {
        max-width: 360px;
    }
    aside {
        margin: 15px 0;
    }
    @media ${({theme}) => theme.device.largePhones} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${({theme}) => theme.device.tablets} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`