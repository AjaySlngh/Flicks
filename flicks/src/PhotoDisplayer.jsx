import React from 'react';

class PhotoDisplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [
                'Flicks\flicks\src\data\_DSF3444.jpg',
                'Flicks\flicks\src\data\_DSF3497.jpg',
                'Flicks\flicks\src\data\_DSF3503.jpg',
                'Flicks\flicks\src\data\_DSF2579.jpg',
            ],
        };
    }

    render() {
        return (
            <div>
                {this.state.photos.map((photo, index) => (
                    <img key={index} src={photo} alt="Front page" />
                ))}
            </div>
        );
    }
}

export default PhotoDisplayer;