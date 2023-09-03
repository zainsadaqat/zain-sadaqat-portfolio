import React, { useState } from 'react';
import Logo from './Logo';
import HamburgerIcon from '../assets/HamburgerIcon.png';
import CrossIcon from '../assets/CrossIcon.png';
import MobileMenuItem from './MobileMenuItem';
import MobileMenuItemWrapper from './MobileMenuItemWrapper';
import WhatsAppIcon from '../assets/WhatsAppIcon.png';
import DesktopMenuItem from './DesktopMenuItem';

const Navbar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const handleClick = (e) => {
    setOpenNavBar(!openNavBar);
  };
  return (
    <nav id="Top">
      <div className="flex items-center justify-between py-8 px-4">
        <div>
          <Logo mobile />
        </div>
        <div>
          <ul className="hidden md:flex">
            <DesktopMenuItem text="Home" />
            <DesktopMenuItem text="Services" />
            <DesktopMenuItem text="Portfolio" />
            <DesktopMenuItem text="Testimonials" />
            <DesktopMenuItem text="FAQs" />
            <DesktopMenuItem text="Schedule a Meeting" />
            <DesktopMenuItem text="Contact" />
          </ul>
        </div>

        {!openNavBar ? (
          <div onClick={handleClick} className="block md:hidden">
            <img src={HamburgerIcon} alt="Hamburger" width={24} height={24} />
          </div>
        ) : (
          <div onClick={handleClick}>
            <img src={CrossIcon} alt="Cross" width={24} height={24} />
          </div>
        )}
      </div>
      {openNavBar ? (
        <div onClick={() => setOpenNavBar(false)} className="min-h-[100vh]">
          <MobileMenuItemWrapper>
            <MobileMenuItem text="Home" />
            <MobileMenuItem text="Services" />
            <MobileMenuItem text="Portfolio" />
            <MobileMenuItem text="Testimonials" />
            <MobileMenuItem text="FAQs" />
            <MobileMenuItem text="Schedule a Meeting" />
            <MobileMenuItem text="Contact" />
          </MobileMenuItemWrapper>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
