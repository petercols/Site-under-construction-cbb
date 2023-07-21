// src/components/ImageCropper.jsx

import React from 'react';

const ImageCropper = ({ image, newSize }) => {
  const originalSize = 800;
  const adjustedSize = originalSize * newSize;

  const cropStyles = {
    width: newSize < 1 ? adjustedSize : 'auto',
    height: newSize < 1 ? adjustedSize : 'auto',
    objectFit: 'cover',
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <img src={image} alt="Imagen recortada" style={cropStyles} />
    </div>
  );
};

export default ImageCropper;
