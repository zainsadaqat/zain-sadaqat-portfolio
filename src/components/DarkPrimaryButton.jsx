import React from 'react';

const DarkPrimaryButton = ({ text, icon }) => {
  return (
    <div
      className={`flex items-center justify-center p-2 rounded bg-darkGreen`}
    >
      <img src={icon} alt={text} width={32} height={32} />
      <a className={`ml-2 font-bold text-[1rem] text-lightGreen`}>{text}</a>
    </div>
  );
};

export default DarkPrimaryButton;
