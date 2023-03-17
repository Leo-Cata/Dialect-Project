import React from 'react';
import { person2 } from '../assets';
const PremiumAbout = () => {
  return (
    <div className="flex justify-center w-full space-y-8 lg:space-y-0 lg:space-x-10 my-32 lg:flex-row flex-col">
      {/* title, text and button */}
      <div className="lg:w-1/4 w-3/4 self-center space-y-10">
        <h1 className="text-mainFont font-bold text-3xl lg:text-5xl mb-5">
          Boost your learning with{' '}
          <span className="text-mainCyan">Dialect</span> plus
        </h1>
        <p className="text-secondaryFont lg:text-lg">
          Learning with us is fun, and research shows that it works! Learning a
          language on Dialect is completely free, but you can remove ads and
          make faster progress with Plus. Try it free for 14 days!
        </p>
        <div className="flex justify-center lg:block lg:justify-start">
          <button className="bg-mainYellow text-xl px-9 py-4 text-mainFont rounded-md justify-self-center duration-200 hover:scale-105 hover:bg-yellow-200">
            Start Learning
          </button>
        </div>
      </div>
      {/* image */}
      <div className="lg:max-0 mx-auto w-[90%] lg:w-auto">
        <img src={person2} alt="person reading illustration" />
      </div>
    </div>
  );
};

export default PremiumAbout;
