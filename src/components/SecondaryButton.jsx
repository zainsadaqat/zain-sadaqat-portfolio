import React from 'react';

const SecondaryButton = ({ text, icon }) => {
  return (
    <a
      href="#Schedule a Meeting"
      className={`w-full font-bold text-[1rem] text-lightGreen mt-2 md:mx-4 md:mt-0 md:w-[240px] `}
    >
      <div
        id="service-box"
        className={`flex items-center justify-center text-center p-4 border-[1px] border-lightGreen rounded`}
      >
        {icon && <img src={icon} alt={text} width={24} height={24} />}

        <span className="ml-2">{text}</span>
      </div>
    </a>
  );
};

export default SecondaryButton;
