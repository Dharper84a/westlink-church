import styled, {keyframes} from "styled-components";

const fxFigureBG = keyframes`
    0%, 100% {
        background-size: 100%;
    }
    50% {
        background-size: 800%
    }
`
export const IDCard = styled.div`
    display: grid;
    grid-template-columns: 128px 1fr;
    column-gap: 2rem;
    width: 100%;
    max-width: 768px;
    padding: 0.5rem;
    border-radius: 0.5rem;
    figure {
        position: relative;
        display: flex;
        width: 128px;
        height: 128px;
        background: ${({theme}) => theme.colors.mediumGray};
        background: linear-gradient(45deg, rgba(238,242,243,0.25), rgba(211,211,211,0.5));
        border-radius: 0.5rem;
        & > * {
            border-radius: 0.25rem;
        }
        img {
            object-fit: cover;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        span {
            font-size: 16px;
            &.person-name {
                padding-bottom: 0.5rem;
                font-size: ${({theme}) => theme.helpers.fontClamp(26, 32)};
                font-weight: 600;
            }
            &.group-heading {
                padding-top: 1rem;
                font-size: ${({theme}) => theme.helpers.fontClamp(18, 20)};
                font-weight: 600;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            margin: 0.25rem 0;
            padding: 0;
            list-style: none;
            li {
                margin: 0.5rem 0.25rem 0.5rem 0;
            }
        }
    }
    @media ${({theme}) => theme.device.iphones} {
        grid-template-columns: 256px 1fr;
    }
`