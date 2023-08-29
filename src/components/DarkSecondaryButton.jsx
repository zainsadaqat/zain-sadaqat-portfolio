import React from 'react';

const DarkSecondaryButton = ({ text, icon }) => {
  return (
    <div
      className={`w-full md:w-[200px] mt-2 md:mt-0 flex items-center justify-center text-center p-4 border-[1px] border-darkGreen rounded md:mx-4`}
    >
      <img src={icon} alt={text} width={24} height={24} />
      <a
        className={`ml-2 font-bold text-[1rem] text-darkGreen hover:underline`}
      >
        {text}
      </a>
    </div>
  );
};

export default DarkSecondaryButton;
