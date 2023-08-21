import React from 'react';

const Logo = ({ mobile }) => {
  if (mobile) {
    return (
      <h2 className="text-[24px] text-[#fff] font-['Inter'] font-bold">
        ZS<span className="text-[#72F00F]">.</span>
      </h2>
    );
  } else {
    return (
      <h2 className="text-[48px] text-[#fff] font-['Inter'] font-bold">
        ZS<span className="text-[#72F00F]">.</span>
      </h2>
    );
  }
};

export default Logo;
