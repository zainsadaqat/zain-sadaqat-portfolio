import React from 'react';

const ProjectTitle = ({ text }) => {
  return (
    <h2 className="text-[2rem] text-darkGreen font-semibold font-['Work Sans'] md:text-[3rem]">
      {text}
    </h2>
  );
};

export default ProjectTitle;
