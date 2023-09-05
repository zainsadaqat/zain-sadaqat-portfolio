import React from 'react';
import Navbar from '../components/Navbar';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import SocialMediaIcon from '../components/SocialMediaIcon';
import InstagramIcon from '../assets/InstagramIcon.png';
import LinkedInIcon from '../assets/LinkedInLogo.png';
import GitHubIcon from '../assets/GitHubIcon.png';
import ProfilePicture from '../assets/ProfilePicture.png';
import XIcon from '../assets/XLogo.png';
import WhatsAppIcon from '../assets/WhatsAppIcon.png';
import KnowMoreIcon from '../assets/KnowMoreIcon.png';
import MainHeading from '../components/MainHeading';
import SocialMediaIconWrapper from '../components/SocialMediaIconWrapper';
import MyPicture from '../components/MyPicture';

const HeroSection = () => {
  return (
    <header id="Home" className="bg-darkGreen min-h-[100vh] bg-gradient-to-tr">
      <div className="max-w-[1200px] mx-auto">
        <Navbar />
        <div className="flex flex-col items-center justify-between md:mt-[3em] md:flex-row">
          <div id="left-side" className="p-4">
            <MainHeading />
            <div className="flex flex-col items-center justify-start md:flex-row cursor-pointer my-8">
              <PrimaryButton text="Let's Chat" icon={WhatsAppIcon} />
              <SecondaryButton text="Schedule a Meeting" icon={KnowMoreIcon} />
            </div>
          </div>
          <div
            id="right-side"
            className="p-4 my-8 w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          >
            <MyPicture
              img={ProfilePicture}
              alt="This is a Profile Picture of Zain Sadaqat who's a Software Engineer and Full Stack Web Developer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
