import styled, {keyframes} from 'styled-components'

const fxHeartPulse = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
`

export const FooterContainer = styled.footer`
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${({theme}) => theme.colors.background.dark};
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-areas:
        "NAV ADDRESS"
        "COPY COPY";
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;
    padding-top: 32px;
    padding-bottom: 80px;
    nav {
        grid-area: NAV;
        a {
            display: block;
            margin-bottom: 8px;
        }
    }
    address {
        grid-area: ADDRESS;
        text-align: right;
        color: ${({theme}) => theme.colors.text.light};
        font-size: ${({theme}) => theme.helpers.fontClamp(14, 18)};
        font-style: normal;
        line-height: 1.5;
    }
    div.legal-copy {
        grid-area: COPY;
        text-align: center;
        p {
            color: ${({theme}) => theme.colors.darkGray};
            font-size: 14px;
            margin: 0 0 4px 0;
            a {
                padding: 0 8px;
                font-size: 14px;
            }
            svg {
                padding: 0 4px;
                width: 16px;
                color: ${({theme}) => theme.colors.rubyRed};
                animation: ${fxHeartPulse} 2s infinite;
            }
        }
    }
    @media ${({theme}) => theme.device.tablets} {
        padding-bottom: 16px;
        nav {
            a {
                display: inline-block;
                padding-right: 16px;
            }
        }
        div.legal-copy {
            align-self: flex-end;
        }
    }
`