import React from 'react';
import SubHeading from '../components/SubHeading';
import SubTitle from '../components/SubTitle';
import ProjectCard from '../components/ProjectCard';
import SpaceXAdventureImage from '../assets/SpaceXAdventureImage.png';
import WeatherAppImage from '../assets/WeatherAppImage.png';
import ArithmoImage from '../assets/ArithmoImage.png';
import MathMagiciansImage from '../assets/MathMagiciansImage.png';

const PortfolioSection = () => {
  return (
    <section id="Portfolio" className="min-h-[100vh] bg-lightYellow py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <SubHeading text="Portfolio" />
        <SubTitle text="Click on the cards to see my projects" />
        <div className="my-24">
          <ProjectCard
            name="SpaceX Adventures"
            desc="We've worked with the real live data from the SpaceX API. We've built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions."
            liveLink="https://spacex-adventures-hub.netlify.app/"
            sourceCode="https://github.com/zainsadaqat/spacex-adventures"
            img={SpaceXAdventureImage}
          />
        </div>

        <div className="my-24">
          <ProjectCard
            name="Weather App"
            desc="The application has a form where users can input a location. The application be able to retrieve weather data based on the user's input. The application display the temperature, humidity, and other weather conditions for the user's input location. The application displays an appropriate weather icon based on the weather condition."
            liveLink="https://zains-home-assignment-weather-app.netlify.app/"
            sourceCode="https://github.com/zainsadaqat/weather-app"
            img={WeatherAppImage}
          />
        </div>

        <div className="my-24">
          <ProjectCard
            name="Arithmo"
            desc="A Freelance Front End React Application all about Arithmo deployed on Netlify."
            liveLink="https://zainsadaqat-arithmo.netlify.app/"
            sourceCode="https://github.com/zainsadaqat/arithmo"
            img={ArithmoImage}
          />
        </div>

        <div className="my-24">
          <ProjectCard
            name="Math Magicians"
            desc="Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and Read a random math-related quote."
            liveLink="https://math-magician-app.netlify.app/calculator"
            sourceCode="https://github.com/zainsadaqat/math-magicians"
            img={MathMagiciansImage}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
