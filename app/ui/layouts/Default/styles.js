import styled from "styled-components";

export const _DefaultLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
    width: 100%;
    min-height: 100vh;
    main {
        min-height: 200vh;
        background: ${({theme}) => theme.color.offWhite};  /* fallback for old browsers */
        background: ${({theme}) => theme.gradient.glassWater};
    }
`