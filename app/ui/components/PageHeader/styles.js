import styled, { css } from 'styled-components';

const basicVariant = css`
    background: hsl(203, 100%, 20%);
    background: linear-gradient(90deg, hsl(203, 100%, 18%), hsl(203, 100%, 35%));
    h1, p {
        color: ${({theme}) => theme.color.offWhite};
    }
`;
const imageVariant = css`
    position: relative;
    img {
        position: absolute;
        z-index: ${({theme}) => theme.layer.content - 2};
        height: 100%;
        object-fit: cover;
    }
    div {
        position: relative;
        z-index: ${({theme}) => theme.layer.content};
    }
    &:after {
        content: '';
        position: absolute;
        z-index: ${({theme}) => theme.layer.content - 1};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: hsla(0, 100%, 0%, 55%);
        background: linear-gradient(90deg, hsla(0, 100%, 0%, 65%), hsla(0, 100%, 0%, 35%));
        mix-blend-mode: multiply;
    }
`;
export const _PageHeader = styled.header`
    ${(props) => (props.variant == 'basic' ? basicVariant : imageVariant)};
    h1,
    p {
        margin: 0;
        color: ${({theme}) => theme.color.offWhite};
    }

    h1 {
        margin-bottom: 1rem;
    }
    div {
        padding: 2rem ${({ theme }) => theme.layout.screenEdge};
    }
`;
