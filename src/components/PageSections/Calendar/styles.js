import styled, {css} from 'styled-components'

export const CalendarComponent = styled.div``

export const Inner = styled.div``

export const MonthBox = styled.div`
    margin: 2rem 0;
    border: 1px solid black;
`
export const WeekBox = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    
`

export const DayBox = styled.div`
    min-height: 200px;
    border: 1px solid gray;
    ${props => props.dayStatus === false &&
        css`
        background: lightgray;
        `
    }
`

export const DayNumber = styled.div``