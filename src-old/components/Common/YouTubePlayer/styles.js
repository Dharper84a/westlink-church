import styled from "styled-components";

export const ComponentCommon = styled.div`
    figure {
        position: relative;
        z-index: 15;
        height: ${props => props.iframeHeight}px;
        max-height: 480px;
        max-width: 1024px;
        border-radius: 4px;
        iframe {
            max-width: 100%;
            height: ${props => props.iframeHeight}px;
            max-height: 480px;
            border-radius: 4px;
        }
    }
`