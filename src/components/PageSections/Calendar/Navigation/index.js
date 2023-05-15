import * as React from 'react';

import { NavigationBox } from './styles';
const Navigation = (props) => {
    
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

    return (
        <NavigationBox>
            <div>
                <button onClick={previousMonth}>{props.previousLabel || 'Previous'}</button>
            </div>
            <div>
                <button onClick={nextMonth}>{props.nextLabel || 'Next'}</button>
            </div>
        </NavigationBox>
    )
}

export default Navigation;