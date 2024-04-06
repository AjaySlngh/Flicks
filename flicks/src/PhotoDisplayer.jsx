import React, { useState, useEffect } from 'react';
import ImageViewerComponent from './ImageViewer';

const PhotoDisplayer = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        console.log('Clicked image:', imageUrl);
        for (let i = 0; i < photos.length; i++) {
            if (photos[i] === imageUrl) {
                setSelectedImage(i);
            }
        }
        console.log('Selected Image:', selectedImage);
        console.log('Selected Image by Index:', photos[selectedImage]);
    };

    useEffect(() => {
        console.log('Selected Image:', selectedImage);
    }, [selectedImage]);

    const photos = [
        'https://csh.rit.edu/~jays/sample2.jpg',
        'https://csh.rit.edu/~jays/sample3.jpg',
        'https://csh.rit.edu/~jays/sample4.jpg',
        'https://csh.rit.edu/~jays/sample6.jpg',
        'https://csh.rit.edu/~jays/sample9.jpg',
        'https://csh.rit.edu/~jays/sample11.jpg',
        'https://csh.rit.edu/~jays/sample12.jpg',
        'https://csh.rit.edu/~jays/sample14.jpg',
        'https://csh.rit.edu/~jays/sample15.jpg',
        'https://csh.rit.edu/~jays/sample16.jpg',
        'https://csh.rit.edu/~jays/sample18.jpg',
        'https://csh.rit.edu/~jays/sample20.jpg',
        'https://csh.rit.edu/~jays/sample21.jpg',
        'https://csh.rit.edu/~jays/sample23.jpg',
        'https://csh.rit.edu/~jays/sample31.jpg',
        'https://csh.rit.edu/~jays/sample33.jpg',
        'https://csh.rit.edu/~jays/sample34.jpg',
        'https://csh.rit.edu/~jays/sample35.jpg',
        'https://csh.rit.edu/~jays/sample36.jpg',
        'https://csh.rit.edu/~jays/sample37.jpg',
        'https://csh.rit.edu/~jays/sample38.jpg',
        'https://csh.rit.edu/~jays/sample39.jpg',
        'https://csh.rit.edu/~jays/sample40.jpg',
        'https://csh.rit.edu/~jays/sample41.jpg',
        'https://csh.rit.edu/~jays/sample42.jpg',
        'https://csh.rit.edu/~jays/sample43.jpg',
        'https://csh.rit.edu/~jays/sample1.jpg',
        'https://csh.rit.edu/~jays/sample5.jpg',
        'https://csh.rit.edu/~jays/sample7.jpg',
        'https://csh.rit.edu/~jays/sample8.jpg',
        'https://csh.rit.edu/~jays/sample10.jpg',
        'https://csh.rit.edu/~jays/sample13.jpg',
        'https://csh.rit.edu/~jays/sample17.jpg',
        'https://csh.rit.edu/~jays/sample19.jpg',
        'https://csh.rit.edu/~jays/sample22.jpg',
        'https://csh.rit.edu/~jays/sample24.jpg',
        'https://csh.rit.edu/~jays/sample26.jpg',
        'https://csh.rit.edu/~jays/sample27.jpg',
        'https://csh.rit.edu/~jays/sample30.jpg',
        'https://csh.rit.edu/~jays/sample32.jpg'
    ];

    const formattedImages = photos.map((photo, index) => ({
        mainUrl: photo,
      }));
      
      // Now `formattedImages` contains the array of image objects in the required format
      console.log(formattedImages);

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
