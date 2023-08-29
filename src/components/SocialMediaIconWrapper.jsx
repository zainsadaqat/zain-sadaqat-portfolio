import React from 'react';

const SocialMediaIconWrapper = ({ children }) => {
  return (
    <ul className="my-4 flex items-center justify-between md:justify-start">
      {children}
    </ul>
  );
};

export default SocialMediaIconWrapper;
