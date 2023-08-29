import React from 'react';
import Typewriter from 'typewriter-effect';

const MainHeading = () => {
  return (
    <h1 className="text-[2.25rem] font-semibold text-lightGreen font-['Raleway'] md:text-[3rem]">
      Hey, <br />
      I’m Zain Sadaqat, <br />
      <Typewriter
        options={{
          strings: [
            'A Full Stack Web Developer.',
            'A Web Designer.',
            'A Mobile App Designer.',
            'A Digital Marketer.',
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
};

export default MainHeading;
