import React, { useState, useEffect } from 'react';
import ImageViewerComponent from './ImageViewer';

const PhotoDisplayer = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        console.log('Clicked image:', imageUrl);
        setSelectedImage(imageUrl);
    };

    useEffect(() => {
        console.log('Selected Image:', selectedImage);
    }, [selectedImage]);

    const photos = [
        'https://csh.rit.edu/~jays/sample1.jpg',
        'https://csh.rit.edu/~jays/sample2.jpg',
        'https://csh.rit.edu/~jays/sample3.jpg',
        'https://csh.rit.edu/~jays/sample4.jpg',
    ];

    return (
        <div>
            {/* Map over the photos array and display each image as a clickable button */}
            {photos.map((photo, index) => (
                <button key={index} onClick={() => handleImageClick(photo)}>
                    <img src={photo} alt={`Photo ${index}`} style={{ width: '200px', height: 'auto', cursor: 'pointer' }} />
                </button>
            ))}

            {/* Render the ImageViewerComponent with selectedImage state */}
            {selectedImage && <ImageViewerComponent images={[selectedImage]} />}
        </div>
    );
};

export default PhotoDisplayer;
