import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import TestimonialCard from '../components/TestimonialCard';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const TestimonialsSection = () => {
  return (
    <section
      id="Testimonials"
      className="min-h-[100vh] bg-lightYellow pt-8 px-4"
    >
      <div className="max-w-[1200px] mx-auto">
        <SubHeading text="Testimonials" />
        <SubTitle text="Here is the feedback I got by my satisfied Clients" />
        <div className="flex items-center justify-center flex-wrap py-8">
          <TestimonialCard
            feedback="I really had a good experience with zainsadaqat. The seller provided all the work and feedback on a constantly pace, communication was quick and easy. I totally recommend if you need some designs to be done for a reasonable price, quick delivery and good price."
            author="codeandwaves"
            country="Netherlands 🇳🇱"
          />

          <TestimonialCard
            feedback="Very responsive service provider. Very patient and customer oriented. He was ready to overdeliver without hesitation. Thanks a lot!"
            author="zlatanstevic"
            country="Switzerland 🇨🇭"
          />

          <TestimonialCard
            feedback="So glad I found zainsadaqat! fantastic work and collaboration!"
            author="ssup__"
            country="Israel 🇮🇱"
          />

          <TestimonialCard
            feedback="Zain is a very diligent and hardworking designer. It was the most convenient project collaboration. He takes extra effort to clearly understand your requirement and treats the project as his own. Very involved and proactive."
            author="tulikalpa"
            country="India 🇮🇳"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
