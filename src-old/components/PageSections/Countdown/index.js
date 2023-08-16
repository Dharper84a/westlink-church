import * as React from 'react';
import Link from 'next/link';
import {SectionComponent} from './styles';
import RichTextRenderer from '../../Common/RichTextRenderer';
const CountdownSection = (props) => {


    const [timeRemaining, setTimeRemaining] = React.useState(false);

    React.useEffect(() => {
        const getTimeRemaining = (endtime) => {
            const total = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours = Math.floor( (total/(1000*60*60)) % 24 );
            const days = Math.floor( total/(1000*60*60*24) );
          
            return {
              days,
              hours,
              minutes,
              seconds
            };
        }

        setTimeRemaining(getTimeRemaining(props.countdownTo));

        setInterval(() => {
            setTimeRemaining(getTimeRemaining(props.countdownTo));
        }, 1000)
    }, [props.countdownTo])
    return (
        <SectionComponent backgroundImage={`https:${props.image.fields.file.url}`}>
            <header>
                <h2>
                    {props.heading}
                </h2>
                {props.content &&
                <RichTextRenderer richText={props.content} />
                }
                <footer>
                    <Link href="https://www.youtube.com/channel/UCwvIPoZGrLxCVAzmO77DZOg/live" title="Watch Westlinks Christmas Play live stream">
                    Watch The Play Live
                    </Link>
                </footer>
            </header>
            
            {timeRemaining && 
            <div className="countdown">
                <div>
                    <p><strong>Days</strong><br />{timeRemaining.days}</p>
                </div>
                <div>
                    <p><strong>Hours</strong><br />{timeRemaining.hours}</p>
                </div>
                <div>
                    <p><strong>Minutes</strong><br />{timeRemaining.minutes}</p>
                </div>
                <div>
                    <p><strong>Seconds</strong><br />{timeRemaining.seconds}</p>
                </div>
                
            </div>
            }
           
        </SectionComponent>
    )
}

export default CountdownSection;