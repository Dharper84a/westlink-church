import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {_Modal, _Backdrop, _Dialog} from './styles';

const Modal = (props) => {
    return (
        <_Modal>
            <_Backdrop onClick={props.close} />
            <_Dialog>
                <header>
                    <h2>
                        <span>Events</span>
                        {props.date.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </h2>
                    <button onClick={props.close}><FontAwesomeIcon icon={faTimes} /></button>
                </header>
                <ul>
                    {props.events.map((event, key) => {
                        return (
                            <li key={key}>
                                <Link href={`/event/${event.slug}`}>
                                    <span>
                                        <div>
                                        {event?.mainImage &&
                                        <Image
                                            src={`https://${event.mainImage.fields.file.url}`}
                                            alt={event.mainImage.fields.description || ''}
                                            fill={true}
                                            sizes='32px'
                                        />
                                        }
                                        </div>
                                        {event.eventName}
                                    </span>
                                    
                                    
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                
            </_Dialog>
        </_Modal>
    )
}

export default Modal;