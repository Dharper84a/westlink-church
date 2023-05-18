
import {_Day} from './styles'
const Day = (props) => {
   
    
    return (
        <_Day blank={!props.status}>
            {props.status &&
            <div>
                <header>
                    <span></span>
                    <span>{props.number}</span>
                </header>
                <ul>
                    <li>
                        <span>Event One</span>
                    </li>
                    <li>
                        <span>Event Two</span>
                    </li>
                </ul>
            </div>
            }
        </_Day>
    )
}

export default Day