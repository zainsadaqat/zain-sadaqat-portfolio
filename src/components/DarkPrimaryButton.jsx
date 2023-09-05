import React from 'react';

const DarkPrimaryButton = ({ text, icon }) => {
  return (
    <div
      className={`w-full md:w-[220px] flex items-center justify-center p-4 rounded bg-darkGreen`}
    >
      <img src={icon} alt={text} width={24} height={24} />
      <a
        className={`ml-2 font-bold text-[1rem] text-lightGreen hover:underline`}
      >
        {text}
      </a>
    </div>
  );
};

export default DarkPrimaryButton;
