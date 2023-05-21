import Day from './Day.js';
import { _Week } from "./styles";

const Week = (props) => {
    // console.log('WEEK', props)
    const checkForEvents = (day) => {
        // if(props.events.length <= 0) return {events: []}; // this week has no events
        if(!day.status) return {events: []}; // this is a blank day

        // const events = props.week.events.filter((a) => a.dayOfWeek === )

        // const events = props.events.filter((a) => {
        //     const date = new Date(a.eventDate);
        //     if(date.getDate() === day.number) {
        //         return a;
        //     }
        // })

        // return {
        //     events: events
        // }
    }
    return (
        <_Week>
        {props.week.map((day, key) => {
            return (
                <Day {...day} deviceType={props.deviceType} key={key} />
            )
        })}
        </_Week>
    )
}

export default Week;