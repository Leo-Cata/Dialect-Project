import React from 'react';
import { person2 } from '../assets';
const PremiumAbout = () => {
  return (
    <div className="flex justify-center w-full space-x-10 my-32">
      {/* title, text and button */}
      <div className="w-1/3 self-center space-y-10">
        <h1 className="text-mainFont font-bold text-5xl mb-5">
          Boost your learning with{' '}
          <span className="text-mainCyan">Dialect</span> plus
        </h1>
        <p className="text-secondaryFont text-lg">
          Learning with us is fun, and research shows that it works! Learning a
          language on Dialect is completely free, but you can remove ads and
          make faster progress with Plus. Try it free for 14 days!
        </p>
        <button className="bg-mainYellow text-xl px-9 py-4 text-mainFont">
          Start Learning
        </button>
      </div>
      {/* image */}
      <img src={person2} alt="person reading illustration" />
    </div>
  );
};

export default PremiumAbout;
