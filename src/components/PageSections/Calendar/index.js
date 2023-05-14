import * as React from 'react';


import { CalendarComponent, Inner, MonthBox, WeekBox, DayBox, DayNumber } from './styles';

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

    // console.log(pastDate, currentDate.getMonth(), futureDate)


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
                numberOfDays: new Date(date.getFullYear(), date.getMonth()+1, 0).getDate(),
                current: false,
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
            numberOfDays: new Date(date.getFullYear(), date.getMonth()+1, 0).getDate(),
            current: true,
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
                numberOfDays: new Date(date.getFullYear(), date.getMonth()+1, 0).getDate(),
                current: false,
            }
            months.push(month)
        }

        return months
    }

    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }

    const currentStartDay = getFirstOfMonthDay(currentDate);
    // console.log(currentStartDay)

    const calendarMonths = getCalendarMonths();

    // console.log(calendarMonths)
    return (
        <CalendarComponent>
            <Inner>
                {props.heading}<h2>{props.heading}</h2>
                {calendarMonths &&
                calendarMonths.map((month, key) => {
                    return <Month {...month} key={key} />
                })
                }
            </Inner>
        </CalendarComponent>
    )
}

const Month = (props) => {
  

    const getWeeks = () => {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weeks = [];
        var dayNumber = 1;
        for(var i = 0; i <= 5; i++) {
            // weeks
            const week = [];
           
            for(var k = 0; k <= 6; k++) {
                // days of week
                const day = {
                    status: false,
                    number: 0,
                    weekday: false,
                    dayName: '',
                    events: [],
                    holidays: [],
                }
                if(i === 0 && k < props.startDay || dayNumber > props.numberOfDays) {
                    // before the first day of the month or after last of the month
                    week.push(day)

                } else {
                    day.status = 'open';
                    day.number = dayNumber++;
                    day.weekday = k === 0 || k === 6 ? false : true;
                    day.dayName = dayNames[k];

                    week.push(day);
                }
            }
            weeks.push(week);
        }

        return weeks;
    }

    const weeksOfTheMonth = getWeeks();
    console.log(props, weeksOfTheMonth)
    return (
        <MonthBox>
            <div>

            </div>
            {weeksOfTheMonth &&
                weeksOfTheMonth.map((week, weekKey) => {
                    return <Week week={week} key={weekKey} />
                })
            }
        </MonthBox>
    )
}

const Week = (props) => {
    console.log('Week', props)
    return (
        <WeekBox>
        {props.week.map((day, key) => {
            return (
                <DayBox dayStatus={day.status} key={key}>
                    {day.status &&
                    <DayNumber>{day.number}</DayNumber>
                    }
                </DayBox>
            )
        })}
        </WeekBox>
    )
}

export default CalendarSection;