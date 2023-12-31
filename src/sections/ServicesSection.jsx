import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import Service from '../components/Service';
import WebIcon from '../assets/WebIcon.png';
import DesignIcon from '../assets/DesignIcon.png';
import MobileIcon from '../assets/MobileIcon.png';
import MarketingIcon from '../assets/MarketingIcon.png';

const ServicesSection = () => {
  return (
    <section id="Services" className="bg-lightYellow">
      <div className="max-w-[1200px] mx-auto">
        <div className="pt-[3em]">
          <SubHeading text="Services" />
        </div>
        <SubTitle text="Here’re the services, I'm providing!" />
        <div
          className="mt-8 p-8 
        flex justify-center items-center flex-wrap"
        >
          <Service icon={WebIcon} text="Web Development" />
          <Service icon={DesignIcon} text="Web Design" />
          <Service icon={MobileIcon} text="Mobile App Design" />
          <Service icon={MarketingIcon} text="Digital Marketing" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
