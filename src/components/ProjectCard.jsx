import React from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import LiveIcon from '../assets/LiveIcon.png';
import SourceCodeIcon from '../assets/SourceCodeIcon.png';
import DarkPrimaryButton from './DarkPrimaryButton';
import DarkSecondaryButton from './DarkSecondaryButton';
import ProjectImage from '../assets/ProfilePicture.png';
import MyPicture from './MyPicture';

const ProjectCard = ({ name, desc, img, liveLink, sourceCode, reverse }) => {
  return (
    <article>
      <div
        className={`flex flex-col items-center justify-center ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } md:justify-evenly`}
      >
        <div id="left-side" className="m-4">
          <ProjectTitle text={name} />
          <div className="mt-4">
            <ProjectDescription text={desc} />
          </div>
          <div className="flex flex-col items-center md:flex-row mt-8">
            <a href={liveLink} target="_blank" className="w-full md:w-auto">
              <DarkPrimaryButton text="Live Demo" icon={LiveIcon} />
            </a>
            <a href={sourceCode} target="_blank" className="w-full md:w-auto">
              <DarkSecondaryButton text="Source Code" icon={SourceCodeIcon} />
            </a>
          </div>
        </div>
        <div
          id="right-side"
          className="max-w-[100%] max-h-[100%] m-8 md:m-0 border-2 hover:border-4"
        >
          <img
            src={img}
            alt="SpaceX Adventures Project"
            className="w-[600px] h-auto object-cover hover:object-contain"
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
