import styled, { css } from "styled-components";
import {
    fxOpenDrawer,
    fxCloseDrawer,
    fxOverlayBGMountEvent,
} from "../../styles/globalStyles";

export const Website = styled.div`
    ${({ theme }) => theme.layout.container};
    z-index: ${({ theme }) => theme.layers.base};
    max-width: 100vw;
    min-height: 100vh;
    main {
        position: relative;
        z-index: ${({ theme }) => theme.layers.content};
        height: fit-content;
    }
    @media ${({theme}) => theme.device.tablets} {
        main {
            margin-top: 80px;
        }
    }
`;
export const OverlayContainer = styled.div`
    position: absolute;
    z-index: ${({ theme }) => theme.layers.overlay};
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`;

export const OverlayBackground = styled.div`
    position: fixed;
    z-index: ${({ theme }) => theme.layers.overlay + 1};
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    /** Animation to play on load */
    animation: ${fxOverlayBGMountEvent} 0.18s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both;
    ${(props) =>
        props.transitionState === "closing" &&
        css`
            animation: ${fxOverlayBGMountEvent} 1.8s
                cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s reverse both;
        `}
`;

const cssDrawer = css`
    position: fixed;
    z-index: ${({ theme }) => theme.layers.overlayContent};
    bottom: 0;
    width: 100%;
    height: 75%;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.background.green};
    animation: ${fxOpenDrawer} 0.85s linear 0.2s both;
    ${(props) =>
        props.transitionState === "closing" &&
        css`
            animation: ${fxCloseDrawer} 0.2s linear both;
        `}
    &:after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.tomato};
    }
    @media ${({ theme }) => theme.devices.iphones} {
        width: 100%;
        padding: 1rem 0.5rem;
    }
`;

export const OverlayForeground = styled.div`
    ${(props) => props.overlayType === "drawer" && cssDrawer}
`;
