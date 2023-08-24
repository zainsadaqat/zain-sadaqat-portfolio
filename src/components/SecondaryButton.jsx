import React from 'react';

const SecondaryButton = ({ text, icon, color }) => {
  return (
    <div
      className={`mt-2 flex items-center justify-center text-center p-2 border-[1px] border-[#D0EA83] rounded`}
    >
      <img src={icon} alt={text} width={24} height={24} />
      <a className={`ml-2 font-bold text-[1rem] text-${color}`}>{text}</a>
    </div>
  );
};

export default SecondaryButton;
