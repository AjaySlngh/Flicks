import React from 'react';
import PhotoDisplayer from './PhotoDisplayer';
import AboutMe from './AboutMe';
import Socials from './Socials';
import './FrontPage.css';
import { useEffect } from 'react';

const FrontPage = () => {
    useEffect(() => {
        const handleScroll = () => {
            const frontPageContainer = document.getElementById('frontPageContainer');
            if (frontPageContainer) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 0) {
                    frontPageContainer.classList.add('neutral-background');
                } else {
                    frontPageContainer.classList.remove('neutral-background');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <section> 
                <h2 style={{ textAlign: 'center' }}>My Work</h2>
                <p>Here you can see some of my favorite shots.</p>
                <PhotoDisplayer />
            </section>
            <section>
                <h2 style={{ textAlign: 'center' }}>About Me</h2>
                <p>I am a photographer based in Rochester, NY</p>
                <AboutMe />
            </section>
            <section>
                <h2 style={{ textAlign: 'center' }}>Contact</h2>
                <p>Want to get in touch? Reach out on my social channels or send me an email.</p>
                <Socials />
            </section>
        </div>
    );
}

export default FrontPage;