import React from 'react';
import { char1, char2 } from '../assets';

const CountBanner = () => {
  return (
    <div className="text-mainFont font-bold text-4xl flex justify-evenly items-center bg-mainSalmon py-24">
      <img src={char1} alt="character A" />
      <div>70,000 lessons taught</div>
      <div>40,000+ students enrolled</div>
      <div>11 languages</div>
      <img src={char2} alt="foreign character" />
    </div>
  );
};

export default CountBanner;
