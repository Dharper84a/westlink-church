import styled, {css} from 'styled-components'

export const _Calendar = styled.div`
    position: relative;
    ${({theme}) => theme.layout.content};
    margin: 2rem auto;
    
`

export const _Navigation = styled.nav`
    z-index: ${({theme}) => theme.layers.content + 20};
    position: sticky;
    top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    button {
        width: 48px;
    }
    @media ${({theme}) => theme.device.up768} {
        button {
            width: 196px;
            &:first-of-type {
                svg {
                    margin-right: 1rem;
                }
            }
            &:last-of-type {
                svg {
                    margin-left: 1rem;
                }
            }
        }
    }
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
    padding: 0 1rem;
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

export const _DayNumber = styled.span`
    color: ${({theme}) => theme.colors.darkGray};
    font-size: ${({theme}) => theme.helpers.fontClamp(12, 24)};
    text-align: center;
`
export const _Day = styled.div`
    display: flex;
    justify-content: center;
    aspect-ratio: 1;
    ${props => props.blank &&
        css`
        background: #d3d3d3;
        `
    }
    div, button {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.75fr 1fr;
        justify-content: center;
        width: 100%;
    }
    button {
        text-align: center;
        background: transparent;
        border: none;
        svg {
            justify-self: center;
            color: ${({theme}) => theme.colors.bluePurple};
            font-size: ${({theme}) => theme.helpers.fontClamp(12, 16)};
        }
    }
   
    @media ${({theme}) => theme.device.up768} {
        grid-template-rows: 26px 1fr;
        ul {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            width: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                display: block;
                
                transition: all 0.25s;
                a {
                    position: relative;
                    top: 50%;
                    display: block;
                    transform: translateY(-50%);
                    padding: 0.25rem 0.5rem;
                    margin: 0 0.5rem;
                    color: ${({theme}) => theme.colors.white};
                    font-size: ${({theme}) => theme.helpers.fontClamp(14, 20, 768, 1920)};
                    ${({theme}) => theme.helpers.lineClamp(1)};
                    background: ${({theme}) => theme.colors.gradients.purples};
                    border-radius: 0.45rem;
                    &:hover {
                        text-decoration: none;
                        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
                    }
                }
                &:hover {
                    
                }
            }
        }
    }
   
`