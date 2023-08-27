import React, { useState } from 'react';
import DownArrow from '../assets/DownArrow.png';
import UpArrow from '../assets/UpArrow.png';

const FAQ = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="mt-8 flex items-center justify-around">
        <h3 className="font-['Work Sans] font-semibold text-[1rem]">
          {question}
        </h3>
        <div onClick={handleClick}>
          {!show && (
            <img src={DownArrow} alt="open close icon" width={16} height={16} />
          )}
          {show && (
            <img src={UpArrow} alt="open close icon" width={16} height={16} />
          )}
        </div>
      </div>
      {show && <div className="my-2">{answer}</div>}
    </div>
  );
};

export default FAQ;
