import React from 'react';
import './MyPicture.css';

const MyPicture = ({ img, alt }) => {
  return <img src={img} alt={alt} className="w-full h-full" />;
};

export default MyPicture;
