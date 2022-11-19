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
    grid-template-columns: 96px 1fr;
    column-gap: 1rem;
    width: 100%;
    max-width: 350px;
    padding: 0.5rem;
    border-radius: 0.5rem;
    figure {
        position: relative;
        display: flex;
        width: 96px;
        height: 96px;
        background: ${({theme}) => theme.colors.mediumGray};
        background: linear-gradient(45deg, rgba(238,242,243,0.25), rgba(211,211,211,0.5));
        border-radius: 0.5rem;
        /* box-shadow: 4px 4px 10px rgba(0,0,0,0.15); */
        & > * {
            border-radius: 0.25rem;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        span {
            font-size: 14px;
            &:first-of-type {
                padding-bottom: 0.5rem;
                font-size: 22px;
                font-weight: 600;
            }
        }
    }
    
`