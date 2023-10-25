import styled from "styled-components";

export const _DefaultLayout = styled.div`
    display: grid;
    grid-template-areas: 
        "header"
        "main"
        "footer";
    grid-template-rows: 80px 1fr 150px;
    width: 100%;
    min-height: 100vh;
    main {
        grid-area: main;
        height: 100%;
        /* min-height: 100vh; */
        background: ${({theme}) => theme.color.offWhite};  /* fallback for old browsers */
        background: ${({theme}) => theme.gradient.glassWater};
    }
`

export const _Inner = styled.div`
    padding: 3rem ${({theme}) => theme.layout.screenEdge};
`