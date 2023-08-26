import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';

const TestimonialsSection = () => {
  return (
    <section className="min-h-[100vh] bg-lightYellow pt-8 px-4">
      <SubHeading text="Testimonials" />
      <SubTitle text="Here is the feedback I got by my satisfied Clients" />
      <div>Testimonial Card will come here...</div>
    </section>
  );
};

export default TestimonialsSection;
