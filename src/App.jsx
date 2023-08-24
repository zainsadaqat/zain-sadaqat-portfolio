import React from 'react';
import './App.css';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
function App() {
  return (
    <React.Fragment>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
    </React.Fragment>
  );
}

export default App;
