import React from 'react';
import './App.css';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import Footer from './sections/Footer';
import AppointmentSection from './sections/AppointmentSection';

function App() {
  return (
    <React.Fragment>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <AppointmentSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
