import React from 'react';

const ImageCard = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default ImageCard;