import React, { useEffect } from 'react';
import ImageViewer from 'awesome-image-viewer';

const ImageViewerComponent = ({ images }) => {
    useEffect(() => {
        if (images && images.length > 0) {
            const imageViewer = new ImageViewer({
                images: images,
            });

            // Ensure that imageViewer.destroy() is a valid function before calling it
            if (typeof imageViewer.destroy === 'function') {
                // Cleanup function to destroy the ImageViewer when component unmounts
                return () => {
                    imageViewer.destroy();
                };
            }
        }
    }, [images]);

    return <div id="image-viewer-container"></div>; // Placeholder for ImageViewer
};

export default ImageViewerComponent;
