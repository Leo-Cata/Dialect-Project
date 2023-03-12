import React from 'react';
import { person1 } from '../assets';
const About = () => {
  return (
    <div className="flex justify-center space-y-8 lg:space-y-0 lg:space-x-32 my-32 lg:my-64 lg:flex-row flex-col">
      <div className="lg:mx-0 mx-auto w-[90%] lg:w-auto">
        <img src={person1} alt="person reading illustration" />
      </div>
      <div className="lg:w-1/4 space-y-8 items-center w-3/4 m-auto">
        <div className="text-3xl md:text-5xl space-x-3 font-bold">
          <span>The</span>
          <span className="text-mainCyan">world's #1</span>
          <span>way to learn a languague</span>
        </div>
        <div className="text-lg text-secondaryFont space-y-4">
          <p>
            Learning with us is fun, and research shows that it works! With
            quick, bite-sized lessons, you'll earn points and unlock new levels
            while gaining real-world communication skills.
          </p>
          <p>
            Learn a language right here with hundreds of free language-learning
            lessons. Get access to compact lessons from the experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
