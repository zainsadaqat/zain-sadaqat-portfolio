import React from 'react';
import './Service.css';
const Service = ({ icon, text }) => {
  return (
    <React.Fragment>
      <p
        className="flex items-center justify-center 
        w-full bg-[#fff] max-w-[600px] min-h-[30vh] 
        rounded
        font-semibold
        my-2 mx-4
        "
      >
        <img src={icon} alt={text} width={16} height={16} />
        <span className="ml-[0.5em]">{text}</span>
      </p>
    </React.Fragment>
  );
};

export default Service;
