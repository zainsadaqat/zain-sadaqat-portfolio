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
    <footer id="Contact" className="min-h-[40vh] bg-[#222]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-around flex-wrap md:flex-row">
          {/* Col 1 */}
          <div className="my-8 mx-4">
            <Logo />
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
              <li className="ml-4">
                <a href="https://www.instagram.com/zainsadaqat.dev">
                  <SocialMediaIcon
                    img={InstagramIcon}
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li className="ml-4">
                <a href="https://www.linkedin.com/in/zain-sadaqat/">
                  <SocialMediaIcon
                    img={LinkedInIcon}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li className="ml-4">
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
          {/* Col 2 */}
          <div className="my-8 mx-4">
            <h3 className="text-[#fff] font-semibold">Resources</h3>
            <ul className="my-2 text-[#bfbfbf]">
              <li className="my-2 hover:underline">
                <a href="#Home">Home</a>
              </li>
              <li className="my-2 hover:underline">
                <a href="#Services">Services</a>
              </li>
              <li className="my-2 hover:underline">
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li className="my-2 hover:underline">
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li className="my-2 hover:underline">
                <a href="#Schedule a Meeting">Schedule a Meeting</a>
              </li>
              <li className="my-2 hover:underline">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="my-8 mx-4">
            <h3 className="text-[#fff] font-semibold">Contact Me</h3>
            <ul className="my-2 text-[#bfbfbf]">
              <li className="my-2">
                <a
                  href="mailto:contact@zainsadaqat.com"
                  className="text-[#bfbfbf] block"
                >
                  <span className="hover:underline">
                    contact@zainsadaqat.com
                  </span>
                </a>
              </li>
              <li className="my-2">
                <a
                  href="mailto:zain.sadaqet@gmail.com"
                  className="text-[#bfbfbf] block"
                >
                  <span className="hover:underline">
                    zain.sadaqet@gmail.com
                  </span>
                </a>
              </li>
              <li className="my-2">
                <a href="tel:+923151467374" className="text-[#bfbfbf] block">
                  <span className="hover:underline">+92 315 146 7374</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Col 4 */}
          <div className="my-8 mx-4">
            <h3 className="text-[#fff] font-semibold">About Me</h3>
            <p className="max-w-[250px] my-2 text-[1rem] text-[#bfbfbf]">
              Full Stack Web Developer, UI/UX Designer and Digital Marketer with
              a Bachelor's in Computer Science.
            </p>
          </div>
        </div>
        <div className="text-[#fff] text-center py-8">
          <p className="text-[0.75rem]">
            Offering my services to the 🌏 with ❤️ from 🇵🇰
          </p>
          <p className="text-[0.75rem] mt-4">
            &copy;
            {new Date().getFullYear()} Zain Sadaqat, All rights are reserved!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
