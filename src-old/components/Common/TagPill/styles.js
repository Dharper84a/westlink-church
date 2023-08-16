import styled, {css} from "styled-components";

const blueVariant = css`
    background: ${({theme}) => theme.colors.uraniumBlue};
    color: ${({theme}) => theme.colors.text.dark};
`

const darkVariant = css`
    background: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.text.light};
`

const lightVariant = css`
    background: ${({theme}) => theme.colors.light};
    color: ${({theme}) => theme.colors.text.dark};
`

export const CommonTagPill = styled.span`
    padding: 0.25rem 0.75rem;
    border-radius: 0.75rem;
    ${blueVariant}
    ${props => props.variant === 'dark' && darkVariant};
    ${props => props.variant === 'light' && lightVariant};
`

export const CommonTagPillList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0.25rem 0;
    padding: 0;
    list-style: none;
    li {
        margin: 0.5rem 0.25rem 0.5rem 0;
    }
`