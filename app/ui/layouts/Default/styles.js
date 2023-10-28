import styled from "styled-components";

export const _DefaultLayout = styled.div`
    width: 100%;
    min-height: 400vh;
    main {
        height: 100%;
        background: ${({theme}) => theme.color.offWhite};  /* fallback for old browsers */
        background: ${({theme}) => theme.gradient.glassWater};
    }
`