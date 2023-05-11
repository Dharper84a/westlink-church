import * as React from 'react';


import { CalendarComponent } from './styles';

const CalendarSection = (props) => {
    console.log(props)
    const pastDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - parseInt(props.pastMonthsToShow), 
        new Date().getDate()
    );
    const futureDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + parseInt(props.futureMonthsToShow), 
        new Date().getDate()
    );

    const currentDate = new Date();

    console.log(pastDate, currentDate.getMonth(), futureDate)


    const getFirstOfMonthDay = (date) => {
        return new Date(`${date.getFullYear()}-${date.getMonth()+1}-01`).getDay();
    }

    const getCalendarMonths = () => {
        const months = [];

        // past months
        for(let i = 1; i <= props.pastMonthsToShow; i++) {
            const date = new Date(
                new Date().getFullYear(),
                new Date().getMonth() - i, 
                new Date().getDate()
            );

            const month = {
                date: date,
                startDay: getFirstOfMonthDay(date),
                numberOfDays: new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
            }
            months.unshift(month)
        }

        // current month
        const date = new Date(
            new Date().getFullYear(),
            new Date().getMonth(), 
            new Date().getDate()
        );

        const month = {
            date: date,
            startDay: getFirstOfMonthDay(date),
            numberOfDays: new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
        }
        months.push(month)

        // future months
        for(let i = 1; i <= props.futureMonthsToShow; i++) {
            const date = new Date(
                new Date().getFullYear(),
                new Date().getMonth() + i, 
                new Date().getDate()
            );

            const month = {
                date: date,
                startDay: getFirstOfMonthDay(date),
                numberOfDays: new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
            }
            months.push(month)
        }

        return months
    }

    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }

    const currentStartDay = getFirstOfMonthDay(currentDate);
    console.log(currentStartDay)

    const calendarMonths = getCalendarMonths();

    console.log(calendarMonths)
    return (
        <CalendarComponent>
            CalendarSection
        </CalendarComponent>
    )
}

export default CalendarSection;