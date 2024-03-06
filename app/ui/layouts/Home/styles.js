import styled from "styled-components";

export const _HomeLayout = styled.section`
    .desktop-hero {
        display: none;
    }

    @media ${({theme}) => theme.device.up1024} {
        .mobile-hero {
            display: none;
        }
        .desktop-hero {
            display: block;
        }
    }
`