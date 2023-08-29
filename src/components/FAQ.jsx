import React, { useState } from 'react';
import DownArrow from '../assets/DownArrow.png';
import UpArrow from '../assets/UpArrow.png';

const FAQ = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div onClick={handleClick}>
      <div className="max-w-[1000px] mx-auto my-16">
        <div className="mt-8 flex items-center justify-between">
          <h3 className="font-['Work Sans] font-semibold text-[1rem]">
            {question}
          </h3>
          <div className="p-4">
            {!show && (
              <img
                src={DownArrow}
                alt="open close icon"
                width={16}
                height={16}
              />
            )}
            {show && (
              <img src={UpArrow} alt="open close icon" width={16} height={16} />
            )}
          </div>
        </div>
        {show && (
          <p className="flex items-center my-4 min-h-[10vh] max-w-[500px]">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
