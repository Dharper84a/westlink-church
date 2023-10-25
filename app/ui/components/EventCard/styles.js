import styled from "styled-components";

export const _EventCard = styled.div`
    
    figure {
        position: relative;
        aspect-ratio: 1;
        border-radius: 0.5rem;
        img {
            border-radius: 0.5rem;
            object-fit: cover;
        }
    }
    header {
        display: grid;
        grid-template-areas: 
            "eventName eventSave"
            "eventTime eventSave";
        justify-content: space-between;
        margin: 0.5rem 0;
    }
    footer {
        margin: 2.5rem 0 0;
    }
    h3 {
        grid-area: eventName;
    }
    time {
        grid-area: eventTime;
        font-size: ${({theme}) => theme.fontClamp(14, 18)};
        font-weight: 600;
    }
    button {
        grid-area: eventSave;
        width: 48px;
        height: 48px;
        padding: 0;
    }
`