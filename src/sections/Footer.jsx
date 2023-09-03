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
          <div className="my-4 text-center md:text-left text-[0.75rem]">
            <a
              href="mailto:contact@zainsadaqat.com"
              className="text-[#fff] block"
            >
              <span className="text-[#878787]">Mail to: </span>
              <span className="hover:underline">contact@zainsadaqat.com</span>
            </a>
            <br />
            <a href="tel:+923151467374" className="text-[#fff] block">
              <span className="text-[#878787]">Phone # </span>
              <span className="hover:underline">+92 315 146 7374</span>
            </a>
          </div>
        </div>
        <div className="my-8">
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
        <div className="text-[#fff] text-center md:text-left py-8">
          <p className="text-[0.75rem]">
            Offering my services to the 🌏 with ❤️ from 🇵🇰
          </p>
          <p className="text-[0.75rem] mt-4">
            &copy;
            {new Date().getFullYear()} Zain Sadaqat!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
