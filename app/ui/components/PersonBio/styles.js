import styled, {css} from "styled-components";
const lightVariant = css`
    img {
        box-shadow: 0 0.25rem 1rem hsla(203, 100%, 20%, 35%);
    }
`
const darkVariant = css`
    background: ${({theme}) => theme.color.blue};
    background: linear-gradient(90deg, hsl(203, 100%, 18%), hsl(203, 100%, 35%));
    & > * {
        color: ${({theme}) => theme.color.white};
    }
    img {
        border: 0.125rem solid ${({theme}) => theme.color.white};
    }
`

export const _Container = styled.section`
    ${props => props.colorStyle == 'dark' ? darkVariant : lightVariant};
    padding: 2rem ${({ theme }) => theme.layout.screenEdge};
`