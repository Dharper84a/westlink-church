import Day from './Day.js';
import { _Week } from "./styles";

const Week = (props) => {
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