import styled, {css} from 'styled-components'

export const _Calendar = styled.div`
    position: relative;
    ${({theme}) => theme.layout.content};
    margin: 2rem auto;
`

export const _MonthContainer = styled.div`
    overflow: hidden;
    display: inline-flex;
    width: 100%;
    /* max-width: 1600px; */
    margin: 0 auto;
`

export const _Track = styled.div`
    display: inline-flex;
    /* column-gap: 8rem; */
    width: 100%;
    transform: translateX(-${props => props.xPosition}px);
    transition: transform 0.25s ease;
`
export const _Month = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    min-width: 100%;
    max-width: 1600px;
    margin: 3rem auto;
    /* opacity: ${props => props.isActive ? '1' : '0'}; */
    transition: opacity 0.25s;
`

export const _MonthHeading = styled.header`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin: 1rem 0;
    span {
        text-align: center;
        font-size: ${({theme}) => theme.helpers.fontClamp(14, 20)};
        font-weight: 600;
    }
`
export const _Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`

export const _Day = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    aspect-ratio: 1;
    border: 1px solid ${({theme}) => theme.colors.gray};
    ${props => props.blank &&
        css`
        background: #d3d3d3;
        `
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        span {
            color: ${({theme}) => theme.colors.darkGray};
            font-size: ${({theme}) => theme.helpers.fontClamp(14, 28)};
        }
    }
    footer {
        display: flex;
        height: 100%;
        button {
            width: 100%;
            color: ${({theme}) => theme.colors.white};
            font-size: ${({theme}) => theme.helpers.fontClamp(12, 16)};
            text-transform: uppercase;
            background: ${({theme}) => theme.colors.bluePurple};
            border: none;
        }
    }
    @media ${({theme}) => theme.device.up768} {
        grid-template-rows: 26px 1fr;
        footer {
            ul {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                width: 100%;
                margin: 0;
                padding: 0;
                list-style: none;
                li {
                    
                    background: ${({theme}) => theme.colors.bluePurple};
                    transition: all 0.25s;
                    a {
                        position: relative;
                        top: 50%;
                        transform: translateY(-50%);
                        padding: 0.15rem 0.25rem;
                        color: ${({theme}) => theme.colors.white};
                        font-size: ${({theme}) => theme.helpers.fontClamp(14, 20, 768, 1920)};
                        ${({theme}) => theme.helpers.lineClamp(1)};
                        
                        &:hover {
                            text-decoration: none;
                        }
                    }
                    &:hover {
                        background: ${({theme}) => theme.colors.lightMagicBlue};
                    }
                }
            }
            
        }
    }
    @media ${({theme}) => theme.device.up1024} {
        grid-template-rows: 36px 1fr;
    }
    @media ${({theme}) => theme.device.up1366} {
        grid-template-rows: 48px 1fr;
        footer {
            ul {
                li {
                    
                    a {
                        padding: 0.25rem 0.5rem;
                    }
                }
            }
            
        }
    }
    @media ${({theme}) => theme.device.up1600} {
        grid-template-rows: 48px 1fr;
        footer {
            ul {
                li {
                    
                    a {
                        padding: 0.25rem 1rem;
                        ${({theme}) => theme.helpers.lineClamp(2)};
                    }
                }
            }
            
        }
    }
`