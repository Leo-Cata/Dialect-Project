import React from 'react';
import { person1 } from '../assets';
const About = () => {
  return (
    <div className="flex justify-center space-x-32 my-64">
      <img src={person1} alt="person reading illustration" />
      <div className="w-1/4 space-y-8">
        <div className="text-5xl space-x-3 font-bold">
          <span>The</span>
          <span className="text-mainCyan">world's #1</span>
          <span>way to learn a languague</span>
        </div>
        <div className="text-[18px] text-secondaryFont space-y-4">
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
