import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import ProjectCard from '../components/ProjectCard';

const PortfolioSection = () => {
  return (
    <section id="Portfolio" className="min-h-[100vh] bg-lightYellow py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <SubHeading text="Portfolio" />
        <SubTitle text="Click on the cards to see my projects" />
        <div className="my-8">
          <ProjectCard />
        </div>
        <div className="my-8">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
