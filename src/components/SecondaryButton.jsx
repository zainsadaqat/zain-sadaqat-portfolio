import React from 'react';

const SecondaryButton = ({ text, color }) => {
  return (
    <div
      className={`mt-2 text-center p-2 border-[1px] border-[#D0EA83] rounded`}
    >
      <a className={`ml-2 font-bold text-[1rem] text-${color}`}>{text}</a>
    </div>
  );
};

export default SecondaryButton;
