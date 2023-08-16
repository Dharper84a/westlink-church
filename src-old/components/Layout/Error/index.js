import * as React from 'react';

import { ErrorPage } from './styled';

const errorProps = {
    404: {
        errorTitle: 'Page Not Found',
        errorText: 'I was not able to find the page you wanted.',
        errorDetails: <p>
            Contrary to popular belief trying again later will <strong>NOT</strong> solve this problem! Other websites lie to keep you on their site longer and for additional future visits.<br/><small><em>Shhh.. It&apos;s an industry secret trick.</em> &#x1F910;</small>
        </p>
    },
    500: {
        errorTitle: 'System Error',
        errorText: 'Something is broken and I can\'t display the page you wanted.',
        errorDetails: <p>You can try again in a couple minutes. This gives any service the website is using time to reestablish connection. If after a couple minutes and still getting an error then its <strong>really broken</strong> and 9 out of 10 times its because I failed to adequately check for all possible conditions.</p>
    }
}

const Error = (props) => {
    const errorType = props.errorType;
    const errorTitle = errorProps[errorType].errorTitle;// = props.errorType === '404' ? 'Page Not Found' : 'System Error'
    const errorText = errorProps[errorType].errorText;
    const errorDetails = errorProps[errorType].errorDetails;
    return(
        <ErrorPage errorType={props.errorType}>
            <h1>{errorTitle}</h1>
            <p>{errorText}</p>
            {errorDetails}
        </ErrorPage>
    )
}

export default Error;