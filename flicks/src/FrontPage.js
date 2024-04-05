import React from 'react';
import FrontBackground from './FrontBackground';
import './FrontBackground.css';
import PhotoDisplayer from './PhotoDisplayer';
import AboutMe from './AboutMe';
import Socials from './Socials';
import './FrontPage.css';

const FrontPage = () => {
    return (
        <div>
            <FrontBackground />
            <div className="content-container">
            <h1 className="title">Welcome To Flicks</h1>
            </div>
            

            <div className="content-container">
                <section>
                    <h2>My Work</h2>
                    <p>Here you can see some of my favorite shots.</p>
                    <PhotoDisplayer /> {}
                </section>
                <section>
                    <h2>About Me</h2>
                    <p>I am a photographer based in Rochester, NY</p>
                    <AboutMe />
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>Want to get in touch? Reach out on my social channels or send me an email.</p>
                    <Socials />
                </section>
            </div>
        </div>
    );
};

export default FrontPage;
