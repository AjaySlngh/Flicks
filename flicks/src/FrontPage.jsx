import React from 'react';
import PhotoDisplayer from './PhotoDisplayer';
import AboutMe from './AboutMe';
import Socials from './Socials';

const FrontPage = () => {
    return (
        <div>
            <Tut />
            <div>
                <h2>My Work</h2>
                <p>Here you can see some of my favorite shots.</p>
                {PhotoDisplayer()}
            </div>
            <div>
                <h2>About Me</h2>
                <p>I am a photographer based in Rochester, NY</p>
                {AboutMe()}
            </div>
            <div>
                <h2>Contact</h2>
                <p>Want to get in touch? Reach out on my social channels or send me an email.</p>
                {Socials()}
            </div>
        </div>
    );
}

export default FrontPage;