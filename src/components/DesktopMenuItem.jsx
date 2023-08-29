import React from 'react';

const DesktopMenuItem = ({ text }) => {
  return (
    <li className="mr-[2em]">
      <a
        href={`#${text}`}
        className="font-semibold font-['Inter'] text-center text-[1rem] text-[#FFF] hover:underline"
      >
        {text}
      </a>
    </li>
  );
};

export default DesktopMenuItem;
