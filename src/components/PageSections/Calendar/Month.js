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
        <_Month>
            <span>{props.date.getFullYear()}</span>
            <h3>{monthName}</h3>
            <_MonthHeading>
                <span>Sunday</span>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
            </_MonthHeading>
            
            {weeksOfTheMonth &&
                weeksOfTheMonth.map((week, weekKey) => {
                    return <Week week={week} key={weekKey} />
                })
            }
           
        </_Month>
    )
}

export default Month