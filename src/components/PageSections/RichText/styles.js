import styled, {css} from 'styled-components';

export const ComponentBox = styled.div`
    ${({theme}) => theme.layout.content};
    ${props => props.reducedWidth === true && css`
    & * {
        width: 85%;
    }
    `}
    padding-top: 32px;
    padding-bottom: 32px;
    ul {
       margin-left: 16px;
       padding-left: 28px;
    }
    h2 {
        margin-top: 0;
    }
    @media ${({theme}) => theme.device.tablets}{
        ${props => props.reducedWidth === true && css`
        & * {
            width: 65%;
        }
        `}
    }
`