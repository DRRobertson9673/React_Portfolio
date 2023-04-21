import React, { useState } from "react";
import "../Style/contact.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b5c2df90-e056-11ed-8a44-d1f0173776c3"; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div id="contactArea">
                <div id="contactText" className="Text">
                    <h1 id="contactTitle">Give me a<br />shout.</h1>
                    <p>I am interested in a full-time frontend development or web design role but am equally keen for freelance opportunities. Whatever it is - please get in contact.<br /><br />Cheers!</p>
                </div>
                <div id="contactForm">
                    <div className="thankMsg">Thank you!</div>
                </div>
            </div>
        );
    }

    return (
        <div id="contactArea">
            <div id="contactText" className="Text">
                <h1 id="contactTitle">Give me a<br />shout.</h1>
                <p>I am interested in a full-time frontend development or web design role but am equally keen for freelance opportunities. Whatever it is - please get in contact.<br /><br />Cheers!</p>
            </div>
            <div id="contactForm">
                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="inputField"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="inputField"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Message"
                            name="message"
                            id="messageArea"
                            className="inputField"
                            required
                        />
                    </div>
                    <div>
                        <button id="contactButton" type="submit">
                            SEND A MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;