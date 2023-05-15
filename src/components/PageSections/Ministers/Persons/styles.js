import styled from "styled-components";

export const PersonBox = styled.div`
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