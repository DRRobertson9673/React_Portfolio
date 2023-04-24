import React, { useState, useEffect } from "react";
import $ from 'jquery';
import "../Style/contact.css"
import Hello from '../Images/Hello.svg';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b5c2df90-e056-11ed-8a44-d1f0173776c3"; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const Offset = document.getElementById('contactTitle').offsetTop;
            const vh = (window.innerHeight);

            if ((scrollTop + (vh)) > Offset) {
                $('#contactTitle').css({
                    opacity: 1,
                    Animation: `introTextAnim 1s ease-in-out 0.5s 1 normal both`
                })
            }
        }
    }, []);

    if (submitted) {
        return (
            <div id="contactArea" className="section">
                <div className="alignTop">
                    <div id="contactText" className="Text">
                        <h1 id="contactTitle">Give me a<br />shout<span>.</span></h1>
                        <p>I am interested in a full-time frontend development or web design role but am equally keen for freelance opportunities. Whatever it is - please get in contact.</p>
                        <img className="hello" src={Hello} alt="" />
                    </div>
                    <div id="contactForm">
                        <div className="thankMsg">Thank you!</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="contactArea" className="section">
            <div className="alignTop">
                <div id="contactText" className="Text">
                    <h1 id="contactTitle">Give me a<br />shout<span>.</span></h1>
                    <p>I am interested in a full-time frontend development or web design role but am equally keen for freelance opportunities. Whatever it is - please get in contact.</p>
                    <img className="hello" src={Hello} alt="" />
                </div>
                <div id="contactForm">
                    <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                        target="_blank"
                        rel="noopener noreferrer"
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
        </div>
    );
};

export default ContactForm;