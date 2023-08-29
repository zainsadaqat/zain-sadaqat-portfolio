import React from 'react';
import QuoteIcon from '../assets/QuoteIcon.png';

const TestimonialCard = ({ feedback, author, country }) => {
  return (
    <div
      id="service-box"
      className="bg-[#fff] max-w-[500px] min-h-[40vh] 
    border-2 rounded m-4"
    >
      <div className="p-4">
        <img src={QuoteIcon} alt="Quote" width={32} height={32} />
      </div>
      <div className="p-4">
        <p>{feedback}</p>
      </div>
      <div className="my-4 p-4">
        <p className="italic text-[#454545] font-medium text-[0.85rem]">
          {author} from {country}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
