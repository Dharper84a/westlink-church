import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import {_Day, _DayNumber} from './styles'
import { useState } from 'react';
import Modal from './Modal';
import { Portal } from '../../Layout';
const Day = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const hasEvents = props.events.length > 0 ? true : false;
    const showEventsModal = () => {
        console.log('showing events model')
        setModalOpen(!modalOpen);
    }

    const renderDay = () => {
        if(!props.status) return <></>;

        if(hasEvents) {
            if(props.deviceType === 'mobile') {
                return (
                    <button onClick={showEventsModal}>
                        <_DayNumber>{props.number}</_DayNumber>
                        <FontAwesomeIcon icon={faCalendarDay} />
                    </button>
                )
            } else if(props.deviceType === 'desktop') {
                return (
                    <div>
                        <_DayNumber>{props.number}</_DayNumber>
                        <ul>
                            {props.events.map((event, key) => {
                                return (
                                    <li key={key}>
                                        <Link href={`/${event.slug}`} passHref>
                                            {event.eventName}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            } else {
                return <></>
            }
        } else {
            // no events
            return <_DayNumber>{props.number}</_DayNumber>
        }
        
    
    }
    return (
        <_Day blank={!props.status}>
            {renderDay()}
            {modalOpen && 
            <Portal type="modal">
                <Modal close={showEventsModal} events={props.events} date={props.date} />
            </Portal>
            }
        </_Day>
    )
}

export default Day