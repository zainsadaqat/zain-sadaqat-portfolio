import React from 'react';

const MobileMenuItem = ({ text }) => {
  return (
    <li className="my-[1em]">
      <a
        href="#"
        className="font-semibold font-['Raleway'] text-center text-[1.5rem] text-[#D0EA83] hover:underline"
      >
        {text}
      </a>
    </li>
  );
};

export default MobileMenuItem;
