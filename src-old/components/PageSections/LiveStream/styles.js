import styled from 'styled-components'

export const ComponentBase = styled.section`
    ${({theme}) => theme.layout.content};
    padding-top: 30px;
    padding-bottom: 30px;
    header {
        margin-bottom: 16px;
    }
    @media ${({theme}) => theme.device.tablets} {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`