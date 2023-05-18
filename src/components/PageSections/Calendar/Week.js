import Day from './Day.js';
import { _Week } from "./styles";

const Week = (props) => {
    // console.log('week', props)
    return (
        <_Week>
        {props.week.map((day, key) => {
            return (
                <Day {...day} key={key} />
            )
        })}
        </_Week>
    )
}

export default Week;