import styled, { css } from 'styled-components';

const basicVariant = css`
    align-items: center;
    background: hsl(203, 100%, 20%);
    background: ${(props) => props.theme.styleOptions[props.styleOption].background};
    h1, p {
        color: ${(props) => props.theme.styleOptions[props.styleOption].color};
    }
`;
const imageVariant = css`
    position: relative;
    align-items: flex-end;
    img {
        position: absolute;
        z-index: ${({theme}) => theme.layer.content - 2};
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    section {
        position: relative;
        z-index: ${({theme}) => theme.layer.content};
        background: ${({theme}) => theme.gradient.imageOverlay};
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
        background: ${(props) => props.theme.styleOptions[props.styleOption].background};
        mix-blend-mode: multiply;
    }
    @media ${({theme}) => theme.device.up1366} {
        min-height: 25rem;
    }
`;
export const _PageHeader = styled.header`
    display: flex;
    min-height: 15rem;
    ${(props) => (props.variant == 'basic' ? basicVariant : imageVariant)};
    
    h1,
    p {
        margin: 0;
        color: ${({theme}) => theme.color.offWhite};
    }

    p {
        margin: 1rem 0;
    }
    section {
        width: 100%;
        padding: 2rem ${({ theme }) => theme.layout.screenEdge};
    }
`;
