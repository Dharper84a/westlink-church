import styled from 'styled-components'

export const Component = styled.section`
    ${({theme}) => theme.layout.content};
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
    h2 { margin-top: 0;}
    h3 {
        margin-top: 48px;
    }
    aside {
        margin-top: 48px;
        margin-bottom: 16px;
    }
    form {
        label, input, textarea, button {
            /* display: none; */
        }
        .coming-soon {
            font-size: 16px;
            font-style: italic;
        }
    }
    .feedback {
        margin: 8px 0;
        padding: 8px;
        border-radius: 4px;
        text-align: center;
    }
    .state-error {
        color: ${({theme}) => theme.colors.white};
        background: rgba(255,99,71,0.85);
        /* background: ${({theme}) => theme.colors.tomato}; */
        
    }
    @media ${({theme}) => theme.device.largePhones} {
        flex-direction: row;
        form {
            min-width: 325px;
            margin-top: 48px;
            margin-left: 64px;
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        form {
            max-width: 500px;
        }
    }
    @media ${({theme}) => theme.device.smallMacs} {
        aside {
            max-width: 650px;
        }
        form {
            max-width: 500px;
        }
    }
`