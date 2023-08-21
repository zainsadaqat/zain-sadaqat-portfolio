import React from 'react';
import Logo from '../components/Logo';
import HamburgerIcon from '../assets/HamburgerIcon.png';

const HeroSection = () => {
  return (
    <section className="bg-[#1F3029] min-h-[100vh]">
      <Logo />
      <img src={HamburgerIcon} alt="Hamburger" width={32} height={32} />
    </section>
  );
};

export default HeroSection;
