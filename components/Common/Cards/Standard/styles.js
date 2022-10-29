import styled, {keyframes} from 'styled-components';

const fxLoading = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
`

export const CardComponent = styled.div`
    display: grid;
    align-content: space-between;
    width: 300px;
    height: 575px;
    min-height: fit-content;
    margin: 0 4rem 0 0;
    overflow: hidden;
    transition: all 0.27s ease;
    figure {
        position: relative;
        width: 100%;
        aspect-ratio: 1.5;
        border-radius: 4px;
        span {
            border-radius: 4px;
        }
    }
    h3, p {
        padding: 0;
    }
    h3 {
        height: 70px;
        margin: 16px 0 16px 0;
        ${({theme}) => theme.helpers.lineClamp(2)};
    }
    p {
        margin: 0 0 12px 0;
        ${({theme}) => theme.helpers.lineClamp(4)};
    }
    footer {
        margin-top: 40px;
        button {
            width: 100%;
            padding: 1rem 0;
            color: ${({theme}) => theme.colors.matteBlack};
            font-weight: 600;
            letter-spacing: 0.5px;
            border: 3px solid ${({theme}) => theme.colors.pastelGreen};
            cursor: pointer;
            background: ${({theme}) => theme.colors.pastelGreen};
            transition: all 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000);
            &:hover {
                background: ${({theme}) => theme.colors.lightPastelGreen};
            }
        }
    }
    &:hover {
        transition: all 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940);
        /* box-shadow: 12px 12px 20px -12px rgba(0, 0, 0, 0.35); */
    }
`