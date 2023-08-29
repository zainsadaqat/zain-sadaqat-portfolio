import React from 'react';
import Typewriter from 'typewriter-effect';

const SubTitle = ({ text }) => {
  return (
    <h3 className="text-[1rem] text-center font-semibold text-darkGreen font-['Raleway']">
      <Typewriter
        options={{
          strings: [text],
          autoStart: true,
          loop: true,
        }}
      />
    </h3>
  );
};

export default SubTitle;
