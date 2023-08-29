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
            <SocialMediaIconWrapper>
              <SocialMediaIcon
                img={XIcon}
                alt="Zain Sadaqat Twitter profile"
                link="https://www.twitter.com/zain_sadaqat"
                width={32}
                height={32}
              />
              <SocialMediaIcon
                img={InstagramIcon}
                alt="Zain Sadaqat Instagram account"
                link="https://www.instagram.com/zainsadaqat.com"
                width={32}
                height={32}
              />
              <SocialMediaIcon
                img={LinkedInIcon}
                alt="Zain Sadaqat LinkedIn profile"
                link="https://www.linkedin.com/in/zain-sadaqat/"
                width={32}
                height={32}
              />
              <SocialMediaIcon
                img={GitHubIcon}
                alt="Zain Sadaqat GitHub account"
                link="https://github.com/zainsadaqat"
                width={32}
                height={32}
              />
            </SocialMediaIconWrapper>
            <div className="flex flex-col items-center justify-start md:flex-row cursor-pointer my-8">
              <PrimaryButton text="Let's Chat" icon={WhatsAppIcon} />
              <SecondaryButton text="Know More" icon={KnowMoreIcon} />
            </div>
          </div>
          <div
            id="right-side"
            className="p-4 my-8 w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          >
            <MyPicture
              img={ProfilePicture}
              alt="Zain Sadaqat Profile Picture"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
