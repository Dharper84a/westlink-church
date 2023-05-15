import * as React from 'react';


import { CalendarComponent, Inner, CalendarSlider, CalendarTrack, MonthContainer, MonthBox, WeekBox, DayBox, DayNumber } from './styles';
import Navigation from './Navigation';

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
                active: false,
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
            }
            months.push(month)
        }

        return months
    }


    const calendarMonths = getCalendarMonths();

    const activeMonth = React.useRef(calendarMonths.findIndex((a) => a.active === true));
    
    console.log('ActiveMonth', activeMonth.current)
    const [trackPosition, setTrackPosition] = React.useState(0)
    const sliderRef = React.useRef();
    // console.log(calendarMonths)
    const [trackWidth, setTrackWidth] = React.useState(0);
    React.useEffect(() => {
        console.log('Client Width', window.innerWidth);//clientWidth)
        const paddingWidth = Math.floor(window.innerWidth * 0.12);
        console.log(paddingWidth)
        const width = window.innerWidth * calendarMonths.length;
        console.log('width', width)
// 1212 - 1396
        setTrackWidth(width);
        
    }, [calendarMonths])

    const [sliderViewboxWidth, setSliderViewboxWidth] = React.useState()
    React.useEffect(() => {
        if(!sliderRef.current) return;

        let box = sliderRef.current.getBoundingClientRect();
        console.log(box)
        setSliderViewboxWidth(box.width);
    }, [sliderRef])

    React.useEffect(() => {
        if(!sliderViewboxWidth) return;

        setTrackPosition(sliderViewboxWidth * -activeMonth.current);
    }, [sliderViewboxWidth])

    const previousMonth = () => {
        if(activeMonth.current === 0) return;

        const newActive = activeMonth.current - 1;
        activeMonth.current = newActive;
        setTrackPosition(sliderViewboxWidth * -newActive);
    }

    const nextMonth = () => {
        if(activeMonth.current === calendarMonths.length - 1) return;

        const newActive = activeMonth.current + 1;
        activeMonth.current = newActive;
        setTrackPosition(sliderViewboxWidth * -newActive);
    }

    const allowNext = () => {
        if(activeMonth.current === calendarMonths.length - 1) return false;
        return true;
    }

    const allowPrevious = () => {
        if(activeMonth.current === 1) return false;
        return true;
    }

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