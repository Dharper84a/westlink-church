import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { NavigationBox } from './styles';
const Navigation = (props) => {
    const [disablePrevious, setDisablePrevious] = React.useState(false);
    const [disableNext, setDisableNext] = React.useState(false);
    
    const switchMonth = (amount) => {
        const newActive = props.activeMonth + amount;
        const newPosition = props.translationAmount * -newActive;
        props.doUpdate(newPosition, newActive)
    }
    const previousMonth = () => {
        if(allowPrevious()) switchMonth(-1);
    }

    const nextMonth = () => {
        if(allowNext()) switchMonth(1);
    }

    const allowNext = () => {
        if(props.activeMonth === props.numberOfMonths) return false;
        return true;
    }

    const allowPrevious = () => {
        if(props.activeMonth === 0) return false;
        return true;
    }

    React.useEffect(() => {
        const n = allowNext();
        const p = allowPrevious();
        
        setDisablePrevious(!p);
        setDisableNext(!n);
    }, [props])
    return (
        <NavigationBox>
            <div>
                <button onClick={previousMonth} disabled={disablePrevious}>{props.previousLabel || <FontAwesomeIcon icon={faChevronLeft} />}</button>
            </div>
            <div>
                <button onClick={nextMonth} disabled={disableNext}>{props.nextLabel || <FontAwesomeIcon icon={faChevronRight} />}</button>
            </div>
        </NavigationBox>
    )
}

export default Navigation;