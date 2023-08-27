import React from 'react';

const MobileMenuItemWrapper = ({ children }) => {
  return (
    <ul className="mt-8 flex flex-col items-center justify-center">
      {children}
    </ul>
  );
};

export default MobileMenuItemWrapper;
