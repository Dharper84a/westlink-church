
import Link from 'next/link';
import {_Day} from './styles'
const Day = (props) => {
    const hasEvents = props.events.length > 0 ? true : false;

    return (
        <_Day blank={!props.status}>
            {props.status &&
            <>
            <header>
                <span>{props.number}</span>
            </header>
            <footer>
                {hasEvents && props.deviceType === 'mobile' && 
                    <button></button>
                }
                {hasEvents && props.deviceType === 'desktop' &&
                <ul>
                {props.events.map((event, key) => {
                    return (
                        <li key={key}>
                        <Link href={`/event/${event.slug}`} passHref>
                            <a title={`More information about ${event.title}`}>
                                {event.eventName}
                            </a>
                        </Link>
                        </li>
                    )
                })}
                </ul>
                }
            </footer>
            </>
            }

        </_Day>
    )
}

export default Day