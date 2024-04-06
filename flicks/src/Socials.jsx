import React from 'react';
import './Socials.css';

const Socials = () => {
    return (
        <div className="socials-container">
            <div className="social-icon gmail-icon">
                <a href="mailto:ajaysingh7161@gmail.com">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Email" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/floppyflicks/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1024px-Instagram-Icon.png" alt="Instagram" />
                </a>
            </div>
        </div>
    );
};

export default Socials;
