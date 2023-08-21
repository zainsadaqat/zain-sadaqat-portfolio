import React from 'react';
import WhatsAppIcon from '../assets/WhatsAppIcon.png';

const PrimaryButton = ({ text, background, color }) => {
  return (
    <div className={`flex items-center justify-center p-2 rounded bg-${color}`}>
      <img src={WhatsAppIcon} alt={'WhatsApp'} width={32} height={32} />
      <a className={`ml-2 font-bold text-[1rem] text-${background}`}>{text}</a>
    </div>
  );
};

export default PrimaryButton;
