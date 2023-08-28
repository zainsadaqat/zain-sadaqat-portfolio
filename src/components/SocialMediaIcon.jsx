import React from 'react';

const SocialMediaIcon = ({ img, alt, link, width, height }) => {
  return (
    <li className="mr-8">
      <a href={link}>
        <img
          className="rounded"
          src={img}
          alt={alt}
          width={width}
          height={height}
        />
      </a>
    </li>
  );
};

export default SocialMediaIcon;
