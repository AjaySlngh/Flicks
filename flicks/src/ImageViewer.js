import React, { useEffect } from 'react';
import ImageViewer from 'awesome-image-viewer';

const ImageViewerComponent = ({ images }) => {
    useEffect(() => {
        if (images && images.length > 0) {
            const imageViewer = new ImageViewer({
                images: images,
            });

            if (typeof imageViewer.destroy === 'function') {
                // Cleanup function to destroy the ImageViewer when component unmounts
                return () => {
                    imageViewer.destroy();
                };
            }
        }
    }, [images]);

    return (
        <div id="image-viewer-container">
            {/* Render images inside the viewer */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.mainUrl}
                    alt={image.description || `Image ${index + 1}`}
                    className="image-viewer-image" // Apply custom CSS class
                />
            ))}
        </div> );
};

export default ImageViewerComponent;
