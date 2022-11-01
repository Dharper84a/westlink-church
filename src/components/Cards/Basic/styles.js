import styled from 'styled-components'

export const Card = styled.div`
    padding: 1rem;
    background: ${({theme}) => theme.colors.mediumGray};
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 0.5rem;
    p {
        margin: 0;
    }
`