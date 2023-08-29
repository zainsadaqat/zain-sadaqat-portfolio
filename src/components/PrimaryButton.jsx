import React from 'react';

const PrimaryButton = ({ text, icon }) => {
  const openWhatsApp = () => {
    window.open('https://wa.me/+923151467374', '_blank');
  };
  return (
    <div
      className={`w-full md:w-[200px] flex items-center justify-center p-4 rounded bg-[#D0EA83] animate-bounce`}
      onClick={openWhatsApp}
    >
      <img src={icon} alt={text} width={24} height={24} />
      <a className={`ml-2 font-bold text-[1rem] text-darkGreen`}>{text}</a>
    </div>
  );
};

export default PrimaryButton;
