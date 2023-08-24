import React from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import LiveIcon from '../assets/LiveIcon.png';
import SourceCodeIcon from '../assets/SourceCodeIcon.png';
import DarkPrimaryButton from './DarkPrimaryButton';
import DarkSecondaryButton from './DarkSecondaryButton';

const ProjectCard = () => {
  return (
    <article>
      <ProjectTitle text="Project Name1" />
      <div className="mt-4">
        <ProjectDescription
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book."
        />
      </div>
      <div className="mt-8">
        <DarkPrimaryButton text="Live Demo" icon={LiveIcon} />
        <DarkSecondaryButton text="Source Code" icon={SourceCodeIcon} />
      </div>
    </article>
  );
};

export default ProjectCard;
