import * as React from 'react';
import RichTextRenderer from '../../Common/RichTextRenderer';

import CommonContactForm from '../../Common/ContactForm';
import { Component } from './styles';

const ContactForm = (props) => {
    // console.log(props);
    const [inputName, setInputName] = React.useState('');
    const [inputEmail, setInputEmail] = React.useState('');
    const [inputMessage, setInputMessage] = React.useState('');

    const [submitState, setSubmitState] = React.useState('wait');
    const [feedback, setFeedback] = React.useState('');

    const richText = props?.text;
    const heading = props?.heading;


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if(typeof fetch === 'undefined') throw "Missing dependancies";

            if(!inputName) throw "Please include your name";
            if(!inputEmail) throw "Please include your email";
            if(!inputMessage) throw "Please include a message";

            setSubmitState('load');
            
            const formPayload = {
                name: inputName,
                email: inputEmail,
                message: inputMessage,
            }

            const response = await fetch('https://wdeepj41bb.execute-api.us-east-1.amazonaws.com/default/westlink-contact-form', {
                method: 'POST',
                cors: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formPayload)
            })

            // console.log('RES', response);

        }catch(e) {
            console.log(e);
            setSubmitState('error')
            setFeedback(e);
        }
        
    }
   
    return (
        <Component>
            <aside>
                <h2>{heading}</h2>
                <RichTextRenderer richText={richText} />
            </aside>
            <CommonContactForm />
            {/* <form>
                <p className="coming-soon">Message form coming soon!</p>
                <label id="nameLabel" aria-hidden="true">Name</label>
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => {
                        setInputName(e.target.value);
                    }}
                    placeholder="Name"
                    aria-describedby="nameLabel"
                />
                <label id="emailLabel" aria-hidden="true">Email</label>
                <input
                    type="email"
                    value={inputEmail}
                    onChange={(e) => {
                        setInputEmail(e.target.value);
                    }}
                    placeholder="Email"
                    aria-describedby="emailLabel"
                />
                <label id="messageLabel" aria-hidden="true">Message</label>
                <textarea value={inputMessage} onChange={(e) => { setInputMessage(e.target.value)}} rows="5" placeholder="Message..." aria-describedby="messageLabel"></textarea>
                <button onClick={onSubmitHandler}>
                    Send
                </button>
                <div className={`feedback state-${submitState}`}>{feedback}</div>
            </form> */}
        </Component>
    );
};

export default ContactForm;
