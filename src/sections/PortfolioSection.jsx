import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import ProjectCard from '../components/ProjectCard';

const PortfolioSection = () => {
  return (
    <section className="min-h-[100vh] bg-lightYellow pt-8 px-4">
      <SubHeading text="Portfolio" />
      <SubTitle text="Click on the cards to see my projects." />
      <div className="mt-8">
        <ProjectCard />
      </div>
      <div className="mt-8">
        <ProjectCard />
      </div>
    </section>
  );
};

export default PortfolioSection;
