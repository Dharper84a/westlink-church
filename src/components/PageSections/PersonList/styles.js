import styled, {css} from "styled-components";

const cardStyleSmall = css`
    grid-template-columns: repeat(auto-fill, 350px);
`
const cardStyleMedium = css`
    grid-template-columns: repeat(auto-fill, 100%);
    @media ${({theme}) => theme.device.smallMacs} {
        grid-template-columns: repeat(auto-fill, 50%);
    }
`

const cardStyleLarge = css`
    grid-template-columns: repeat(auto-fill, 100%);
    @media ${({theme}) => theme.device.ipads} {
        grid-template-columns: repeat(auto-fill, 50%);
    }
    
`
export const ComponentBox = styled.section`
    ${({theme}) => theme.layout.content};
    padding-top: 2rem;
    padding-bottom: 2rem;
    header {
        margin-bottom: 1.5rem;
        p {
            max-width: 650px;
        }
    }
`

export const List = styled.div`
    display: grid;
    gap: 1rem;
    ${props => props.cardStyle === 'small_id' && cardStyleSmall};
    ${props => props.cardStyle === 'medium_id' && cardStyleMedium};
    ${props => props.cardStyle === 'large_id' && cardStyleLarge};
`