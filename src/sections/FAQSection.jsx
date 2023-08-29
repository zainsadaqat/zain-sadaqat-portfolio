import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import FAQ from '../components/FAQ';

const FAQSection = () => {
  return (
    <section id="FAQs" className="min-h-[100vh] bg-[#FAFAFA] pt-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <SubHeading text="FAQs" />
        <SubTitle text="Here’re most commonly asked questions asked by clients" />
        <article className="py-16">
          <FAQ
            question="What technologies and programming languages do you specialize in?"
            answer="I've experience working with JavaScript, ReactJS, NodeJS, NextJS, Ruby on Rails, MERN Stack, Tailwind CSS, and React Ecosystem."
          />
          <FAQ
            question="Can you assist with website maintenance and updates after the initial development?"
            answer="Yes, Of Course!"
          />
          <FAQ
            question="What tools and software do you use for creating designs?"
            answer="I use Figma for creating designs."
          />
          <FAQ
            question="Do you provide wireframes or prototypes before finalizing the design?"
            answer="Based on requirements and budget Yes, I do provide Wireframes and Prototypes."
          />
          <FAQ
            question="Can you integrate your designs seamlessly with the development process?"
            answer="Yes, I can develop pixel perfect web applications same as the provided design."
          />
          <FAQ
            question="Can you adapt existing web designs to mobile app interfaces?"
            answer="Yes, I can design it according to mobile devices."
          />
          <FAQ
            question="How do you analyze data and metrics to measure campaign effectiveness?"
            answer="Defining Key Performance Indicators (KPIs), Data Collection and Integration, and Adjustment and Optimization."
          />
        </article>
      </div>
    </section>
  );
};

export default FAQSection;
