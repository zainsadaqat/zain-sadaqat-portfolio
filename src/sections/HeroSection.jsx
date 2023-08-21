import React from 'react';
import Navbar from '../components/Navbar';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import SocialMediaIcon from '../components/SocialMediaIcon';
import InstagramIcon from '../assets/InstagramIcon.png';
import LinkedInIcon from '../assets/LinkedInIcon.png';
import GitHubIcon from '../assets/GitHubIcon.png';
import ProfilePicture from '../assets/ProfilePicture.png';
import XIcon from '../assets/XIcon.png';

const HeroSection = () => {
  return (
    <section className="bg-darkGreen min-h-[100vh]">
      <Navbar />
      <div>
        <div id="left-side" className="p-4">
          <h1 className="text-[2.5rem] font-bold text-lightGreen font-['Raleway']">
            Hey, I’m Zain Sadaqat, A Software Engineer.
          </h1>
          <ul className="flex items-center">
            <li>
              <a href="https://www.twitter.com/zain_sadaqat">
                <SocialMediaIcon img={XIcon} alt="Twitter" />
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.instagram.com/zainsadaqat.dev">
                <SocialMediaIcon img={InstagramIcon} alt="Instagram" />
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.linkedin.com/in/zain-sadaqat/">
                <SocialMediaIcon img={LinkedInIcon} alt="LinkedIn" />
              </a>
            </li>
            <li className="ml-4">
              <a href="https://github.com/zainsadaqat">
                <SocialMediaIcon img={GitHubIcon} alt="GitHub" />
              </a>
            </li>
          </ul>
          <PrimaryButton
            text="WhatsApp Me!"
            background="darkGreen"
            color="lightGreen"
          />
          <SecondaryButton text="Know More!" color="lightGreen" />
        </div>
        <div id="right-side">
          <img src={ProfilePicture} alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
