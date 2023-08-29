import React from 'react';

const SecondaryButton = ({ text, icon }) => {
  return (
    <div
      className={`w-full flex items-center justify-center text-center p-4 border-[1px] border-lightGreen rounded mt-2 md:mx-4 md:my-0 md:w-[200px] `}
    >
      {icon && <img src={icon} alt={text} width={24} height={24} />}
      <a
        href="#Services"
        className={`ml-2 font-bold text-[1rem] text-lightGreen`}
      >
        {text}
      </a>
    </div>
  );
};

export default SecondaryButton;
