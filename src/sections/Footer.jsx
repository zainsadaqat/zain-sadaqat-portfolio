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
    <footer id="Contact" className="relative min-h-[50vh] bg-[#222] pt-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div>
            <Logo />
          </div>
          <div>
            <p className="text-[#fff] my-4">
              <span className="text-[#878787]">Mail to: </span>
              <span className="hover:underline">contact@zainsadaqat.com</span>
            </p>
            <p className="text-[#fff] my-4">
              <span className="text-[#878787]">Phone # </span>
              <span className="hover:underline">+92 315 146 7374</span>
            </p>
          </div>
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
        <p className="text-[#fff] pb-8">
          <p>Offering my services to the 🌏 with ❤️ from 🇵🇰</p>
          <p>
            &copy;
            {new Date().getFullYear()} Zain Sadaqat!
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
