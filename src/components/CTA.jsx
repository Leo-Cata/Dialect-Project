import React from 'react';
import Buttons from './Buttons';

const CTA = () => {
  return (
    <div className="bg-mainCyan flex justify-evenly items-center py-20 ">
      <div className="flex flex-col text-5xl text-mainFont">
        <span className="bg-white rounded-xl w-fit py-4 px-8 my-4">
          Thinking About
        </span>
        <span className="bg-mainYellow rounded-xl w-fit py-4 px-8 font-bold">
          Languague Learning?
        </span>
      </div>
      <div className="w-1/3 text-lg">
        <p>
          Learn a language right here with hundreds of free language-learning
          lessons. Get access to compact lessons from the experts and connect
          with a community of native speakers to help you master words faster.
        </p>
        <div className="flex">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default CTA;
