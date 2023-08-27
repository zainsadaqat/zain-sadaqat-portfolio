import React, { useState } from 'react';
import Logo from './Logo';
import HamburgerIcon from '../assets/HamburgerIcon.png';
import CrossIcon from '../assets/CrossIcon.png';
import MobileMenuItem from './MobileMenuItem';
import MobileMenuItemWrapper from './MobileMenuItemWrapper';

const Navbar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const handleClick = (e) => {
    console.log('Clicked!');
    setOpenNavBar(!openNavBar);
  };
  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <div>
          <Logo mobile />
        </div>
        {!openNavBar ? (
          <div onClick={handleClick}>
            <img src={HamburgerIcon} alt="Hamburger" width={24} height={24} />
          </div>
        ) : (
          <div onClick={handleClick}>
            <img src={CrossIcon} alt="Cross" width={24} height={24} />
          </div>
        )}
      </nav>
      {openNavBar ? (
        <div className="min-h-[100vh]">
          <MobileMenuItemWrapper>
            <MobileMenuItem text="Home" />
            <MobileMenuItem text="Services" />
            <MobileMenuItem text="Portfolio" />
            <MobileMenuItem text="Testimonials" />
            <MobileMenuItem text="FAQs" />
            <MobileMenuItem text="Contact" />
          </MobileMenuItemWrapper>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
