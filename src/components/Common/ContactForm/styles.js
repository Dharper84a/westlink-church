import styled, {css, keyframes} from "styled-components";

const fxSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const fxOverlayPop = keyframes`
    0% {
        transform: scale(0);
    }
    10% {
        transform: scale(1);
    }
    95% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`
const fxOverylayOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`
const overlay = css`
    position: relative;
    &:before {
        content: ' ';
        position: absolute;
        z-index: 10;
        top: -16px;
        left: -16px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 16px;
        color: ${({theme}) => theme.colors.offWhite};
        font-size: ${({theme}) => theme.helpers.fontClampBox(32, 48, 325, 500)};
        font-weight: 700;
        background: rgba(35,213,171,0.95);
        border-radius: 8px;
        animation: ${fxOverlayPop} 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

    }
`
const sendingState = css`
    button {
        svg {
            animation: ${fxSpin} 0.7s linear infinite;
        }
    }
`

const okState = css`
    ${overlay};
    &:before {
        content: 'Got It!';
        color: ${({theme}) => theme.colors.offWhite};
        font-size: ${({theme}) => theme.helpers.fontClampBox(32, 48, 325, 500)};
        background: rgba(35,213,171,0.95);
    }
`

const errorState = css`
    ${overlay};
    &:before {
        content: 'Well that did not work...';
        text-align: center;
        color: ${({theme}) => theme.colors.offWhite};
        font-size: ${({theme}) => theme.helpers.fontClampBox(26, 40, 325, 500)};
        background: rgba(255,99,71,0.95); //rgba(255,99,71,0.95);
    }
`

export const FormComponent = styled.form`
    position: relative;
    ${props => props.formState === 'SENDING' && sendingState};
    ${props => props.formState === 'OK' && okState};
    ${props => props.formState === 'ERROR' && errorState};
`

export const FormInput = styled.div``

export const FormError = styled.p`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    color: ${({theme}) => theme.colors.offWhite};
    font-size: ${({theme}) => theme.helpers.fontClampBox(18, 15, 325, 500)};
    background-color: ${({theme}) => theme.colors.tomato};
    border-radius: 4px;
    svg {
        padding-right: 0.5rem;
    }
`