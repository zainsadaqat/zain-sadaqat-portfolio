import React from 'react';

const PrimaryButton = ({ text, icon, background, color }) => {
  return (
    <div
      className={`flex items-center justify-center p-2 rounded bg-[#D0EA83]`}
    >
      <img src={icon} alt={text} width={32} height={32} />
      <a className={`ml-2 font-bold text-[1rem] text-${color}`}>{text}</a>
    </div>
  );
};

export default PrimaryButton;
