import * as React from 'react';

import Month from './Month';
import Week from './Week';

import { _Calendar, Inner, CalendarSlider, CalendarTrack, MonthContainer, MonthBox, WeekBox, DayBox, DayNumber } from './styles';
import Navigation from './Navigation';
import deliveryClient from '../../../../lib/datasource/contentful/delivery';

const CalendarSection = (props) => {
    const [events, setEvents] = React.useState();
    const [months, setMonths] = React.useState();

    const getFirstOfMonthDay = (date) => {
        return new Date(`${date.getFullYear()}-${date.getMonth()+1}-01`).getDay();
    }

    const monthFactory = (offset = 0) => {
        const startOfMonth = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + offset, 
            1
        );
        const numberOfDays = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth()+1, 0).getDate();
        const endOfMonth = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + offset, 
            numberOfDays
        );

        const month = {
            startOfMonth,
            endOfMonth,
            timestamp: {
                start: startOfMonth.getTime(),
                end: endOfMonth.getTime(),
            },
            startDay: getFirstOfMonthDay(startOfMonth),
            numberOfDays,
            current: offset === 0 ? true : false,
            active: offset === 0 ? true : false,
            events: [],
        }

        return month;
    }
    const getCalendarMonths = () => {
        const months = [];

        // past months
        for(let i = 1; i <= props.pastMonthsToShow; i++) {
            months.unshift(monthFactory(-i))
        }

        months.push(monthFactory());
       

        // future months
        for(let i = 1; i <= props.futureMonthsToShow; i++) {
            months.push(monthFactory(i))
        }

        return months
    }

    React.useEffect(() => {

        deliveryClient.entries('event').then((res) => {
            console.log(res);
            if(Array.isArray(res.items)) {
                setEvents(res.items);
            }
        });


    }, [props])




    React.useEffect(() => {
        if(!events) return;
        
        const _months = getCalendarMonths();
        console.log(_months)

        const weeklyEvents = [];
        const monthlyEvents = [];
        const yearlyEvents = [];

        _months.forEach((month) => {
            const monthEvents = [];

            const monthName = month.startOfMonth.toLocaleString('default', { month: 'long' });
            console.log(`Checking events for [${monthName}]`)
            events.forEach((_event) => {
                const event = _event.fields;
                console.log(`\t[${event.eventName}]...`)
                const eventStart = new Date(event.eventDate);
                const eventEnd = new Date(event.endDate);

                if(event?.repeats && event?.repeats.length > 0) {
                    if(event.repeats.includes('Weekly')) {
                        if(eventEnd.getTime() >= month.timestamp.end || eventEnd.getTime() >= month.timestamp.start) {
                            // the event series ends later than this month or within it
                            console.log(`\t- Add Weekly Event [${event.eventName}]`)
                            month.events.push({
                                series: {
                                    repeats: 'Weekly',
                                },
                                dayOfWeek: eventStart.getDay(),
                                dayNumber: eventStart.getDate(),
                                ...event
                            })
                        }
                        
                    }
                } else {
                    // this is a single instance event
                    if(eventEnd.getTime() <= month.timestamp.end && eventStart.getTime() >= month.timestamp.start) {
                        // event is scheduled inside current month
                        console.log(`\t- Add Single Event [${event.eventName}]`)
                        month.events.push({
                            series: false,
                            dayOfWeek: eventStart.getDay(),
                            dayNumber: eventStart.getDate(),
                            ...event
                        })
                    }
                }
               
                
                
                
          

                
                // console.log('monthDate', monthDate.getTime())
                // if(monthDate.getTime() >= eventStart.getTime() && monthDate.getTime() <= eventEnd.getTime()) {
                //     console.log('Add Event to ', monthDate.getMonth(), event.eventName);
                //     month.events.push(event);
                // }
                
            })
        })

        setMonths(_months);
       
    }, [events])

    const [deviceType, setDeviceType] = React.useState('mobile');
    const deviceSizeHandler = (e) => {
        if(!window) return;

        if(window.innerWidth <= 768) {
            setDeviceType('mobile');
        } else {
            setDeviceType('desktop');
        }
    }
    React.useEffect(() => {
        if(!window) return;

        window.addEventListener('resize', deviceSizeHandler)
        deviceSizeHandler()

        return () => {
            window.removeEventListener('resize', deviceSizeHandler);
        }

    }, [props])
    return (
        <_Calendar>
            {props.heading && <h2>{props.heading}</h2>}
            {months &&
            months.map((month, key) => {
                return <Month {...month} deviceType={deviceType} key={key} />
            })
            }
        </_Calendar>
    )
}

// const Month = (props) => {
  

//     const getWeeks = () => {
//         const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         const weeks = [];
//         var dayNumber = 1;
//         for(var i = 0; i <= 5; i++) {
//             // weeks
//             const week = [];
           
//             for(var k = 0; k <= 6; k++) {
//                 // days of week
//                 const day = {
//                     status: false,
//                     number: 0,
//                     weekday: false,
//                     dayName: '',
//                     events: [],
//                     holidays: [],
//                 }
//                 if(i === 0 && k < props.startDay || dayNumber > props.numberOfDays) {
//                     // before the first day of the month or after last of the month
//                     week.push(day)

//                 } else {
//                     day.status = 'open';
//                     day.number = dayNumber++;
//                     day.weekday = k === 0 || k === 6 ? false : true;
//                     day.dayName = dayNames[k];

//                     week.push(day);
//                 }
//             }
//             weeks.push(week);
//         }

//         return weeks;
//     }

//     const weeksOfTheMonth = getWeeks();
    
//     // console.log(props, weeksOfTheMonth)
//     const monthName = props.date.toLocaleString('default', { month: 'long' });
    
//     return (
//         <MonthContainer maxWidth={props.maxWidth}>
//             <span>{props.date.getFullYear()}</span>
//             <h3>{monthName}</h3>
//             <header>
//                 <span>Sunday</span>
//                 <span>Monday</span>
//                 <span>Tuesday</span>
//                 <span>Wednesday</span>
//                 <span>Thursday</span>
//                 <span>Friday</span>
//                 <span>Saturday</span>
//             </header>
//             <MonthBox>
//                 {weeksOfTheMonth &&
//                     weeksOfTheMonth.map((week, weekKey) => {
//                         return <Week week={week} key={weekKey} />
//                     })
//                 }
//             </MonthBox>
//         </MonthContainer>
//     )
// }

// const Week = (props) => {
//     // console.log('Week', props)
//     return (
//         <WeekBox>
//         {props.week.map((day, key) => {
//             return (
//                 <DayBox dayStatus={day.status} key={key}>
//                     {day.status &&
//                     <DayNumber>{day.number}</DayNumber>
//                     }
//                 </DayBox>
//             )
//         })}
//         </WeekBox>
//     )
// }

export default CalendarSection;