import styled from "styled-components";

export const CommonComponent = styled.div`
    padding: 1rem 0;
    span {
        font-size: 20px;
        font-weight: 600;
    }
    ul {
        margin: 0.5rem 0 0 0;    
        list-style: none;
        li {
            margin: 0.25rem 0;
            padding: 0.5rem 0.5rem;
            color: ${({theme}) => theme.colors.text.light};
            background-color: ${({theme}) => theme.colors.tomato};
            border-radius: 4px;
            svg {
                padding-right: 0.25rem;
            }
        }
    }
`