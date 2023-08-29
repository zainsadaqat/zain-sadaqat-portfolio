import React from 'react';

const ProjectDescription = ({ text }) => {
  return (
    <p className="font-semibold text-darkGreen text-[1rem] font-['Raleway'] max-w-[600px]">
      {text}
    </p>
  );
};

export default ProjectDescription;
