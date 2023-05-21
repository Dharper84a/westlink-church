import * as React from 'react';

import Month from './Month';
import Week from './Week';

import { _Calendar, _MonthContainer, _Track } from './styles';
import Navigation from './Navigation';
import deliveryClient from '../../../../lib/datasource/contentful/delivery';

const CalendarSection = (props) => {
    const [events, setEvents] = React.useState();
    const [months, setMonths] = React.useState();
    const [trackPosition, setTrackPosition] = React.useState(0);
    const visibleIndex = React.useRef();
    const [trackIndex, setTrackIndex] = React.useState();

    const getFirstOfMonthDay = (date) => {
        return new Date(`${date.getFullYear()}-${date.getMonth()+1}-01`).getDay();
    }

    const monthFactory = (offset = 0, position = 0) => {
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
            position,
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
            months.unshift(monthFactory(-i, months.length))
        }

        // visibleIndex.current = months.length
        setTrackIndex(months.length);
        months.push(monthFactory(0, months.length));
        

        // future months
        for(let i = 1; i <= props.futureMonthsToShow; i++) {
            months.push(monthFactory(i, months.length))
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

    const containerRef = React.useRef();
    

    const updatePosition = (value) => {
        console.log('Updating Position')
        if(trackIndex + value === months.length) {
            // setTrackIndex(0);
            return;
        } else if(trackIndex + value < 0) {
            return;
        } else {
            setTrackIndex(trackIndex + value);
        }
    }

    React.useEffect(() => {
        const box = containerRef.current.getBoundingClientRect();
        console.log(box)
        console.log('TrackIndex', trackIndex)
        setTrackPosition(box.width * trackIndex)
    }, [trackIndex])
   
    const nextHandler = () => {
        if(!containerRef.current) return;
        updatePosition(1)
    }

    const previousHandler = () => {
        if(!containerRef.current) return;
        updatePosition(-1);
    }

    return (
        <_Calendar>
            {props.heading && <h2>{props.heading}</h2>}
            <button onClick={previousHandler}>Previous</button><button onClick={nextHandler}>Next</button>
            <_MonthContainer ref={containerRef}>
                <_Track xPosition={trackPosition}>
                {months &&
                months.map((month, key) => {
                    return <Month {...month} deviceType={deviceType} key={key} />
                })
                }
                </_Track>
            </_MonthContainer>
        </_Calendar>
    )
}

export default CalendarSection;