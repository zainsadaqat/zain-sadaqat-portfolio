import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import ProjectCard from '../components/ProjectCard';

const PortfolioSection = () => {
  return (
    <section className="min-h-[100vh] bg-lightYellow pt-8">
      <SubHeading text="Portfolio" />
      <SubTitle text="Click on the cards to see my projects." />
      <ProjectCard />
    </section>
  );
};

export default PortfolioSection;
