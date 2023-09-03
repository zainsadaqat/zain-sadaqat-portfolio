import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import ProjectCard from '../components/ProjectCard';
import SpaceXAdventureImage from '../assets/SpaceXAdventureImage.png';

const PortfolioSection = () => {
  return (
    <section id="Portfolio" className="min-h-[100vh] bg-lightYellow py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <SubHeading text="Portfolio" />
        <SubTitle text="Click on the cards to see my projects" />
        <div className="my-16">
          <ProjectCard
            name="SpaceX Adventures"
            desc="We've worked with the real live data from the SpaceX API. We've built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions."
            liveLink="spacex-adventures-hub.netlify.app/"
            sourceCode="https://github.com/zainsadaqat/spacex-adventures"
            img={SpaceXAdventureImage}
          />
        </div>

        <div className="my-16">
          <ProjectCard
            name="SpaceX Adventures"
            desc="We've worked with the real live data from the SpaceX API. We've built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions."
            liveLink="spacex-adventures-hub.netlify.app/"
            sourceCode="https://github.com/zainsadaqat/spacex-adventures"
            img={SpaceXAdventureImage}
            reverse
          />
        </div>

        <div className="my-16">
          <ProjectCard
            name="SpaceX Adventures"
            desc="We've worked with the real live data from the SpaceX API. We've built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions."
            liveLink="spacex-adventures-hub.netlify.app/"
            sourceCode="https://github.com/zainsadaqat/spacex-adventures"
            img={SpaceXAdventureImage}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
