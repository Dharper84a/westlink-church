import * as React from 'react';


import { CalendarComponent, Inner, CalendarSlider, CalendarTrack, MonthContainer, MonthBox, WeekBox, DayBox, DayNumber } from './styles';
import Navigation from './Navigation';
import deliveryClient from '../../../../lib/datasource/contentful/delivery';

const CalendarSection = (props) => {
    console.log(props)
    
    const sliderRef = React.useRef();

    const [trackPosition, setTrackPosition] = React.useState(0)
    const [sliderViewboxWidth, setSliderViewboxWidth] = React.useState()

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
                active: false,
                events: [],
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
            active: true,
            events: [],
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
                active: false,
                events: [],
            }
            months.push(month)
        }

        return months
    }

    const calendarMonths = getCalendarMonths();
    const activeMonth = React.useRef(calendarMonths.findIndex((a) => a.active === true));
        
    React.useEffect(() => {
        if(!sliderRef.current) return;

        let box = sliderRef.current.getBoundingClientRect();
        setSliderViewboxWidth(box.width);
    }, [sliderRef])

    React.useEffect(() => {
        if(!sliderViewboxWidth) return;

        setTrackPosition(sliderViewboxWidth * -activeMonth.current);
    }, [sliderViewboxWidth])

    React.useEffect(() => {
        deliveryClient.entries('event').then((res) => {
            console.log(res);
            if(Array.isArray(res.items)) {
                res.items.forEach((event) => {
                    const eventStart = new Date(event.fields.eventDate);
                    const eventEnd = new Date(event.fields.endDate);
                    
                    calendarMonths.forEach((month) => {
                        const monthDate = new Date(month.date);
                        console.log('monthDate', monthDate.getTime())
                        if(monthDate.getTime() >= eventStart.getTime() && monthDate.getTime() <= eventEnd.getTime()) {
                            console.log('Add Event to ', monthDate.getMonth(), event.fields.eventName);
                        }
                    })
                    console.log(calendarMonths)
                })
            }
        });
    }, [props])

    const updateSlider = (position, activeIndex) => {
        activeMonth.current = activeIndex;
        setTrackPosition(position);
    }
    return (
        <CalendarComponent>
            <Inner>
                {props.heading}<h2>{props.heading}</h2>
                <Navigation activeMonth={activeMonth.current} numberOfMonths={calendarMonths.length - 1} translationAmount={sliderViewboxWidth} doUpdate={updateSlider}/>
               
                <CalendarSlider ref={sliderRef}>
                    <CalendarTrack itemCount={calendarMonths.length} trackWidth={sliderViewboxWidth * calendarMonths.length} position={trackPosition}>
                        
                        {calendarMonths &&
                        calendarMonths.map((month, key) => {
                            return <Month {...month} maxWidth={sliderViewboxWidth} key={key} />
                        })
                        }
                    </CalendarTrack>
                </CalendarSlider>
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
    
    // console.log(props, weeksOfTheMonth)
    const monthName = props.date.toLocaleString('default', { month: 'long' });
    
    return (
        <MonthContainer maxWidth={props.maxWidth}>
            <span>{props.date.getFullYear()}</span>
            <h3>{monthName}</h3>
            <header>
                <span>Sunday</span>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
            </header>
            <MonthBox>
                {weeksOfTheMonth &&
                    weeksOfTheMonth.map((week, weekKey) => {
                        return <Week week={week} key={weekKey} />
                    })
                }
            </MonthBox>
        </MonthContainer>
    )
}

const Week = (props) => {
    // console.log('Week', props)
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