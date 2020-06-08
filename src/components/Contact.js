import React from 'react';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <div className="contact">
            <Fade bottom>
                <h2>Get in Touch</h2>
                <p>If you're interested in working with me, feel free to say hello!</p>
                <a href="mailto:hello@denisenguyen.ca">Email me</a>
            </Fade>
        </div>
    );
}

export default Contact;
