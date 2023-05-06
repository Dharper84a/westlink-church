import styled from "styled-components";

export const SliderBox = styled.div`
    margin: 3rem 0;
`

export const SliderContent = styled.div`
    padding-right: ${({theme}) => theme.paddings.screenEdge};
    padding-left: ${({theme}) => theme.paddings.screenEdge};
`

export const SliderItem = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1024px;
    margin-bottom: 2rem;
    figure {
        height: fit-content;
        margin: 0;
        border: 8px solid ${({theme}) => theme.colors.nightBlue};
        border-radius: 0.5rem;
        box-shadow: 0.25rem 0.5rem 1.25rem rgba(0,0,0,0.25);
    }

    @media ${({theme}) => theme.device.up768} {
        grid-template-columns: 1fr 2fr;
   
    }
`

export const MainContent = styled.div``

export const SubContent = styled.aside``

export const SubItem = styled.div``