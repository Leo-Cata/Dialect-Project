import React from 'react';
import Buttons from './Buttons';

const CTA = () => {
  return (
    <div className="bg-mainCyan flex justify-evenly items-center py-10 lg:py-20 flex-col lg:flex-row ">
      <div className="flex flex-col text-3xl md:text-5xl text-mainFont max-w-[90%] sm:max-w-none">
        <span className="bg-white rounded-xl w-fit py-2 sm:py-4 px-2 sm:px-8 my-4">
          Thinking About
        </span>
        <span className="bg-mainYellow rounded-xl w-fit py-2 sm:py-4 px-2 sm:px-8 font-bold text-center">
          Languague Learning?
        </span>
      </div>
      <div className="w-3/4 md:w-1/3 md:text-lg space-y-8 my-4">
        <p className="">
          Learn a language right here with hundreds of free language-learning
          lessons. Get access to compact lessons from the experts and connect
          with a community of native speakers to help you master words faster.
        </p>
        <div className="flex justify-center md:justify-start">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default CTA;
