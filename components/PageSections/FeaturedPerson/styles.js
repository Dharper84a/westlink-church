import styled from 'styled-components';

export const FeaturedPersonContainer = styled.div`
    ${({theme}) => theme.layout.container};
    padding: 8rem 0 8rem;
    background-color: ${({theme}) => theme.colors.background.green};
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    display: flex;
    gap: 4rem;
    figure {
        display: flex;
        flex-shrink: 0;
        width: fit-content;
        height: fit-content;
        box-shadow: -0.5rem -0.5rem 0 #C1E1C1, -1rem -1rem 0 #4682B4, 1rem 1rem 1.5rem rgba(0,0,0,.15);
        &.placeholder {
            justify-content: center;
            align-items: center;
            width: 400px;
            height: 300px;
            background: ${({theme}) => theme.colors.mediumGray};
            svg {
                color: ${({theme}) => theme.colors.pastelGreen};
                font-size: 92px;
            }
        }
    }

    div {
        h3 {
            margin-bottom: 2rem;
        }
        h4 {
            font-size: 18px;
            font-weight: 400;
            &:last-of-type {
                font-weight: bold;
            }
        }
    }
    @media ${({theme}) => theme.devices.ipads} {
        flex-direction: column;
    }
`