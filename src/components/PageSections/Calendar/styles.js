import styled, {css} from 'styled-components'

export const CalendarComponent = styled.div``

export const Inner = styled.div`
/* ${({theme}) => theme.layout.content}; */
`

export const CalendarSlider = styled.div`
   overflow: hidden;
   /* ${({theme}) => theme.layout.content}; */
   margin: 0 6%;
`

export const CalendarTrack = styled.div`
    display: flex;
    width: ${props => props.trackWidth}px;
    transform: translateX(${props => props.position}px);
    transition: transform 0.75s ease;
`

export const MonthContainer = styled.section`
    width: 100%;
    max-width: ${props => props.maxWidth}px;
    header {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin: 1rem 0;
        span {
            text-align: center;
        }
    }
`
export const MonthBox = styled.div`
    margin: 1rem 0 3rem;
    border: 1px solid #d0d0d0;
    /* border-radius: 0.75rem; */
`
export const WeekBox = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`

export const DayBox = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    border: 1px solid ${({theme}) => theme.colors.gray};
    ${props => props.dayStatus === false &&
        css`
        background: #d3d3d3;
        `
    }
`

export const DayNumber = styled.div`
    align-self: flex-end;
    padding: 0.25rem 1rem;
    color: ${({theme}) => theme.colors.white};
    font-weight: 400;
    background: ${({theme}) => theme.colors.lightMagicBlue};
    border-radius: 0 0 0 0.25rem;
`