import React from 'react';
import './App.css';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import Footer from './sections/Footer';
import AppointmentSection from './sections/AppointmentSection';
import ReactGA4 from 'react-ga4';

function App() {
  return (
    <React.Fragment>
      ReactGA4.initialize('G-N7M2FJYQEJ');
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
