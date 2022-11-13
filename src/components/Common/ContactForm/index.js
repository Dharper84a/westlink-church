import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { FormComponent, FormInput, FormError } from './styles';

const CommonContactForm = (props) => {
    const [formState, setFormState] = React.useState('WAIT');
    const [email, setEmail] = React.useState('dharper84a@gmail.com');
    const [name, setName] = React.useState('Donald Harper');
    const [message, setMessage] = React.useState(`HELLO ${Math.random()}`);


    const [error, setError] = React.useState('');


    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Submiting');

        const validateEmail = (email) => {
            return email.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
        }

        try {
            if(!email) throw "Please enter an email address.";
            if(!message) throw "Please include a message.";
            if(!validateEmail(email)) throw "Email does not appear to be valid.";

            setFormState('SEND')
        }catch(e) {
            console.log(e);
            setError(e);
        }
    }

    React.useEffect(() => {
        if(formState === 'WAIT') return; // do not process if 
        if(formState === 'SENDING') return;
        
        let ignore = false;

        const send = async () => {
            try {
                if(!process.env.NEXT_PUBLIC_CONTACT_API_KEY) throw "Missing contact form API KEY";
                if(!process.env.NEXT_PUBLIC_CONTACT_API_URL) throw "Missing contact form API URL";
    
                const payload = JSON.stringify({
                    email: email,
                    name: name,
                    message: message,
                    account: 'WCOC'
                });
    
                const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Length': payload.length.toString(),
                        'Content-Type': 'application/json',
                        'contact-api-key': process.env.NEXT_PUBLIC_CONTACT_API_KEY,
                    },
                    body: payload,
                })
    
                console.log(response);
                if(response.status !== 200) throw "Something went wrong and we could not recieve your message!"

                setFormState('OK');
            }catch(e){
                console.log('ERROR - Send', e);
                setError(JSON.stringify(e));
                setFormState('ERROR');
            }
        }

        if(formState === 'SEND') {
            setFormState('SENDING');
            send();
        }

        if(formState === 'OK' || formState === 'ERROR') {
            setTimeout(() => {
                setFormState('WAIT');
            }, 3000)
        }

        return () => {
            ignore = true;
        }
    }, [formState, email, name, message])

    React.useEffect(() => {
        if(!error) return;
        let ignore = false;

        setTimeout(() => {
            if(!ignore) setError('');
        }, 3000)

        return () => { ignore = true; }

    }, [error])
    return(
        <FormComponent formState={formState}>
                <FormInput >
                    <label htmlFor="inputEmailField" id="inputEmailLabel" aria-hidden>Email</label>
                    <input type="email" value={email} placeholder="youremail@address.com" id="inputEmailField" aria-describedby="inputEmailLabel" onChange={(e) => { setEmail(e.target.value)}}/>
                </FormInput>
                <FormInput >
                    <label htmlFor="inputNameField" id="inputNameLabel" aria-hidden>Name</label>
                    <input type="text" value={name} placeholder="Name" id="inputNameLabel" aria-describedby="inputNameLabel" onChange={(e) => { setName(e.target.value)}}/>
                </FormInput>
                <FormInput >
                    <label htmlFor="inputMessageField" id="inputMessageLabel" aria-hidden>Message</label>
                    <textarea value={message} placeholder="What would you like to talk about?" id="inputMessageField" aria-describedby="inputMessageLabel" onChange={(e) => { setMessage(e.target.value)}}/>
                </FormInput>

                <button onClick={onSubmitHandler}>
                    {formState === 'SENDING' ? (
                        <FontAwesomeIcon icon={faSpinner} />
                    ):(
                       <span>Send</span> 
                    )}
                </button>
                {error &&
                <FormError>
                    <FontAwesomeIcon icon={faExclamationCircle} />{error}
                </FormError>
                }
        </FormComponent>
    )
}

export default CommonContactForm;