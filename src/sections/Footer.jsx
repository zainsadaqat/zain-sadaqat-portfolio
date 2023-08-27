import React from 'react';
import Logo from '../components/Logo.jsx';
import SocialMediaIconWrapper from '../components/SocialMediaIconWrapper.jsx';
import SocialMediaIcon from '../components/SocialMediaIcon.jsx';
import XIcon from '../assets/XLogo.png';
import InstagramIcon from '../assets/InstagramIcon.png';
import LinkedInIcon from '../assets/LinkedInLogo.png';
import GitHubIcon from '../assets/GitHubIcon.png';

const Footer = () => {
  return (
    <footer id="Contact" className="min-h-[50vh] bg-[#222] pt-8 px-4">
      <div>
        <Logo />
      </div>
      <div>
        <p className="text-[#cdcdcd]">contact@zainsadaqat.com</p>
      </div>
      <div>
        <SocialMediaIconWrapper>
          <li>
            <a href="https://www.twitter.com/zain_sadaqat">
              <SocialMediaIcon
                img={XIcon}
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li className="ml-8">
            <a href="https://www.instagram.com/zainsadaqat.dev">
              <SocialMediaIcon
                img={InstagramIcon}
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li className="ml-8">
            <a href="https://www.linkedin.com/in/zain-sadaqat/">
              <SocialMediaIcon
                img={LinkedInIcon}
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li className="ml-8">
            <a href="https://github.com/zainsadaqat">
              <SocialMediaIcon
                img={GitHubIcon}
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
          </li>
        </SocialMediaIconWrapper>
      </div>
      <p className="text-center text-[#fff] mt-16">
        &copy;{new Date().getFullYear()} All rights are reserved!
      </p>
    </footer>
  );
};

export default Footer;
