import React from 'react';
import './FrontBackground.css';

const FrontBackground = () => {
    return (
        <div className="front-background-container">
            {/* Background image with welcome text overlay */}
            <div className="background-image">
                <div className="overlay-text">
                    <h1>Welcome To Flicks</h1>
                    <p>Scroll Down To Start</p>
                </div>
            </div>
        </div>
    );
};

export default FrontBackground;
