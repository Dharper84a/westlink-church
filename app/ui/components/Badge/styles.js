import styled from "styled-components";

export const _Container = styled.div`
    display: grid;
    grid-template-columns: 128px minmax(200px, 1fr);
    gap: 0.5rem;
    margin: 1rem 0;
    background: ${({theme}) => theme.color.offWhite};
    border-radius: 2rem 0.25rem 0.25rem 2rem;
    img {
        border-radius: 2rem 0 0 2rem;
    }
    div {
        padding: 0.5rem;
        strong {
            font-size: 1.25rem;
            font-weight: 600;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem 0.5rem;
            margin: 0.25rem 0 0;
            padding: 0;
            list-style: none;
            span {
                display: inline-block;
                padding: 0.25rem 0.5rem;
                color: ${({theme}) => theme.color.white};
                font-size: 0.75rem;
                background: ${({theme}) => theme.color.blue};
                border-radius: 0.75rem;
            }
        }
        footer {
            span {
                font-size: 0.75rem;
                font-style: italic;
            }
        }
    }
`