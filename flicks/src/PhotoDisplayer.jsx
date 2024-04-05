import React from 'react';
import './PhotoDisplayer.css';

class PhotoDisplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [
            'https://csh.rit.edu/~jays/sample1.jpg',
            'https://csh.rit.edu/~jays/sample2.jpg',
            'https://csh.rit.edu/~jays/sample3.jpg',
            'https://csh.rit.edu/~jays/sample4.jpg',
            ],
        };
    }

    render() {
        return (
            <div>
                {this.state.photos.map((photo, index) => (
                    <img class="photo" key={index} src={photo} alt="Front page" />
                ))}
            </div>
        );
    }
}

export default PhotoDisplayer;