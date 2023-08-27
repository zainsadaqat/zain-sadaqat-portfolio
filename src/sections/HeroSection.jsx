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
  const openWhatsApp = () => {
    // window.open('https://api.whatsapp.com/send?phone=+923151467374', '_blank');
    window.open('https://wa.me/+923151467374', '_blank');
  };
  return (
    <section id="Home" className="bg-darkGreen min-h-[100vh]">
      <Navbar />
      <div>
        <div id="left-side" className="p-4">
          <MainHeading />
          <SocialMediaIconWrapper>
            <li>
              <a href="https://www.twitter.com/zain_sadaqat">
                <SocialMediaIcon
                  img={XIcon}
                  alt="Twitter"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className="ml-8">
              <a href="https://www.instagram.com/zainsadaqat.dev">
                <SocialMediaIcon
                  img={InstagramIcon}
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className="ml-8">
              <a href="https://www.linkedin.com/in/zain-sadaqat/">
                <SocialMediaIcon
                  img={LinkedInIcon}
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className="ml-8">
              <a href="https://github.com/zainsadaqat">
                <SocialMediaIcon
                  img={GitHubIcon}
                  alt="GitHub"
                  width={32}
                  height={32}
                />
              </a>
            </li>
          </SocialMediaIconWrapper>
          <div className="cursor-pointer my-8" onClick={openWhatsApp}>
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
