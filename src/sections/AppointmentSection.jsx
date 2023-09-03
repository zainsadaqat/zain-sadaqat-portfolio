import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';

const AppointmentSection = () => {
  return (
    <section
      id="Schedule a Meeting"
      className="min-h-[100vh] bg-[#FAFAFA] pt-8 px-4"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="my-8">
          <SubHeading text="Schedule a Meeting" />
          <SubTitle text="1:1 meeting with Zain Sadaqat" />
        </div>

        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/zain_sadaqat/30min"
          style={{ minWidth: '320px' }}
        >
          <iframe
            src="https://calendly.com/zain_sadaqat/30min"
            width="100%"
            height="600"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
