import styled from "styled-components";

export const _DefaultLayout = styled.div`
    width: 100%;
    height: 100%;
    main {
        height: 100%;
        background: ${({theme}) => theme.color.white};  /* fallback for old browsers */
        /* background: ${({theme}) => theme.gradient.glassWater}; */
    }
`