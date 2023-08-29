import React from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import LiveIcon from '../assets/LiveIcon.png';
import SourceCodeIcon from '../assets/SourceCodeIcon.png';
import DarkPrimaryButton from './DarkPrimaryButton';
import DarkSecondaryButton from './DarkSecondaryButton';
import ProjectImage from '../assets/ProfilePicture.png';
import MyPicture from './MyPicture';

const ProjectCard = () => {
  return (
    <article>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly">
        <div id="left-side" className="">
          <ProjectTitle text="Project Name1" />
          <div className="mt-4">
            <ProjectDescription
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book."
            />
          </div>
          <div className="flex flex-col items-center md:flex-row mt-8">
            <DarkPrimaryButton text="Live Demo" icon={LiveIcon} />
            <DarkSecondaryButton text="Source Code" icon={SourceCodeIcon} />
          </div>
        </div>
        <div
          id="right-side"
          className="w-[300px] h-[300px] bg-lightGreen border-2 my-8"
        >
          {/* Project Image comes here... */}
          <div className="w-full h-full"></div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
