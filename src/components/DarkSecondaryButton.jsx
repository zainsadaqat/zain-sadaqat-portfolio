import React from 'react';

const DarkSecondaryButton = ({ text, icon }) => {
  return (
    <div
      className={`mt-2 flex items-center justify-center text-center p-2 border-2 border-darkGreen rounded`}
    >
      <img src={icon} alt={text} width={24} height={24} />
      <a className={`ml-2 font-bold text-[1rem] text-darkGreen`}>{text}</a>
    </div>
  );
};

export default DarkSecondaryButton;
