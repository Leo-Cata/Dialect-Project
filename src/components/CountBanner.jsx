import React from 'react';
import { char1, char2 } from '../assets';

const CountBanner = () => {
  return (
    <div className="text-mainFont font-bold text-2xl md:text-3xl xl:text-4xl flex justify-evenly items-center bg-mainSalmon py-8 xl:py-24 flex-col xl:flex-row space-y-8 xl:space-y-0">
      <img src={char1} alt="character A" />
      <div>70,000 lessons taught</div>
      <div>40,000+ students enrolled</div>
      <div>11 languages</div>
      <img src={char2} alt="foreign character" />
    </div>
  );
};

export default CountBanner;
