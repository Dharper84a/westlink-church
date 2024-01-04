import styled, {css} from "styled-components";
const lightVariant = css`
    img {
        box-shadow: 0 0.25rem 1rem hsla(203, 100%, 20%, 35%);
    }
`
const darkVariant = css`
    background: ${({theme}) => theme.color.blue};
    background: linear-gradient(90deg, hsl(203, 100%, 18%), hsl(203, 100%, 35%));
    h1, h2, h3, h4, h5, h6, p {
        color: ${({theme}) => theme.color.white};
    }
    img {
        border: 0.125rem solid ${({theme}) => theme.color.white};
    }
`

const leftVariant = css``
const rightVariant = css``
export const _Container = styled.section`
    ${props => props.colorStyle == 'dark' ? darkVariant : lightVariant};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 0;
    padding: 2rem ${({ theme }) => theme.layout.screenEdge};
    img {
        width: 90%;
        margin: 0 auto;
        border-radius: 0.35rem;
    }
`