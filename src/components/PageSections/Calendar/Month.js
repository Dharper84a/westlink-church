import { useEffect, useState } from "react"
import Week from "./Week"

import { _Month, _MonthHeading } from "./styles"
const Month = (props) => {
    console.log('MONTH', props)

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
                    date: null,
                }
                if(i === 0 && k < props.startDay || dayNumber > props.numberOfDays) {
                    // before the first day of the month or after last of the month
                    week.push(day)

                } else {
                    day.status = 'open';
                    day.number = dayNumber++;
                    day.weekday = k === 0 || k === 6 ? false : true;
                    day.dayName = dayNames[k];

                    day.date = new Date(props.startOfMonth.getFullYear(), props.startOfMonth.getMonth(), day.number);

                    const events = props.events.filter((a) => {
                        if(!a.series && a.dayNumber === day.number) {
                            return true;
                        } else if(a.series) {
                            if(a.dayOfWeek === k) {
                                // make sure the event has started or is starting on this day
                                const aDate = new Date(a.eventDate);
                                const bDate = new Date(a.endDate);
                                aDate.setHours(0);
                                aDate.setMinutes(0);
                                bDate.setHours(0);
                                bDate.setMinutes(0);
                                console.log(a.eventName,day.date, aDate)
                                if(day.date.getTime() >= aDate.getTime() && bDate.getTime() >= day.date.getTime()) {
                                    return true;
                                }
                                
                            }
                        }
                    });
                    day.events = events;

                    week.push(day);
                }
            }
            weeks.push(week);
        }

        return weeks;
    }

    const weeksOfTheMonth = getWeeks();

    console.log(weeksOfTheMonth)
    const monthName = props.startOfMonth.toLocaleString('default', { month: 'long' });

   
    const headings = {
        mobile: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        desktop: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    }

    return (
        <_Month>
            <span>{props.startOfMonth.getFullYear()}</span>
            <h3>{monthName}</h3>
            <_MonthHeading>
                {props.deviceType && headings[props.deviceType].map((dayName, key) => {
                    return <span key={key}>{dayName}</span>
                })}
            </_MonthHeading>
            
            {weeksOfTheMonth &&
                weeksOfTheMonth.map((week, weekKey) => {
                    return <Week week={week} events={props.events} deviceType={props.deviceType} key={weekKey} />
                })
            }
           
        </_Month>
    )
}

export default Month