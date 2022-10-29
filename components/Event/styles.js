import styled from 'styled-components'

export const EventComponent = styled.section`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 20px;
    padding-bottom: 60px;
    header {
        p {
            margin-top: 32px;
        }
        div {
            p {
                margin-top: 0;
                margin-bottom: 0;
                font-size: 18px;
            }
            time {
                font-weight: 600;
            }
        }
    }
    aside {
        padding: 30px 0;
        figure {
            position: relative;
            width: 100%;
            height: 300px;
        }
    }
    @media ${({theme}) => theme.device.largePhones} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        padding-top: 60px;
        aside {
            padding: 0;
            figure {
                height: 500px;
                box-shadow: 8px 8px 24px rgba(11,11,11,0.2);
                border-radius: 8px;
                span, img {
                    border-radius: 8px;
                }
            }
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        gap: 90px;
        padding-top: 90px;
        padding-bottom: 90px;
    }
`