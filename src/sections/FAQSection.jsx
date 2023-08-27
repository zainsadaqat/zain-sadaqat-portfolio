import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import FAQ from '../components/FAQ';

const FAQSection = () => {
  return (
    <section id="FAQs" className="min-h-[100vh] bg-[#FAFAFA] pt-8 px-4">
      <SubHeading text="FAQs" />
      <SubTitle text="Here’re most commonly asked questions asked by clients" />
      <article>
        <FAQ
          question="Are you open to part-time jobs?"
          answer="Yes, I'm open for remote part-time jobs!"
        />
        <FAQ
          question="Are you open to part-time jobs?"
          answer="Yes, I'm open for remote part-time jobs!"
        />
        <FAQ
          question="Are you open to part-time jobs?"
          answer="Yes, I'm open for remote part-time jobs!"
        />
        <FAQ
          question="Are you open to part-time jobs?"
          answer="Yes, I'm open for remote part-time jobs!"
        />
      </article>
    </section>
  );
};

export default FAQSection;
