import styled from 'styled-components'

export const Component = styled.div`
    ${({theme}) => theme.layout.content};
    padding-top: 30px;
    h3 {
        margin: 16px 0;
    }
    figure {
        width: fit-content;
        border-radius: 4px;
        span, img {
            border-radius: 4px;
        }
    }
    aside {
        div {
            display: flex;
        }
        span {
            font-size: 16px;
            margin-right: 8px;
            padding: 2px 6px;
            background-color: ${({theme}) => theme.colors.pastelGreen};
            border-radius: 4px;
        }
    }
`
export const LeadMinister = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0 60px 0;
    figure {
        height: fit-content;
        max-height: 360px;
        box-shadow: 8px 8px 16px rgba(11,11,11,0.3);
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
    margin: 30px 0 0 0;
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