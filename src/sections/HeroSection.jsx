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
import MainHeading from '../components/MainHeading';
import SocialMediaIconWrapper from '../components/SocialMediaIconWrapper';

const HeroSection = () => {
  return (
    <section className="bg-darkGreen min-h-[100vh]">
      <Navbar />
      <div>
        <div id="left-side" className="p-4">
          <MainHeading />
          <SocialMediaIconWrapper>
            <li>
              <a href="https://www.twitter.com/zain_sadaqat">
                <SocialMediaIcon img={XIcon} alt="Twitter" />
              </a>
            </li>
            <li className="ml-8">
              <a href="https://www.instagram.com/zainsadaqat.dev">
                <SocialMediaIcon img={InstagramIcon} alt="Instagram" />
              </a>
            </li>
            <li className="ml-8">
              <a href="https://www.linkedin.com/in/zain-sadaqat/">
                <SocialMediaIcon img={LinkedInIcon} alt="LinkedIn" />
              </a>
            </li>
            <li className="ml-8">
              <a href="https://github.com/zainsadaqat">
                <SocialMediaIcon img={GitHubIcon} alt="GitHub" />
              </a>
            </li>
          </SocialMediaIconWrapper>
          <div className="my-8">
            <PrimaryButton
              text="Let's Chat"
              icon={WhatsAppIcon}
              color="darkGreen"
              background="lightGreen"
            />
            <SecondaryButton text="Know More" color="lightGreen" />
          </div>
        </div>
        <div id="right-side" className="p-4">
          <img src={ProfilePicture} alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
