import React from 'react';
import { background, world, heartface } from '../assets';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="hero w-full font-atkinson bg-no-repeat bg-cover">
      <Navbar />

      {/* big headinds, text and small buttons */}
      <div className="mt-16">
        <div className="flex justify-evenly">
          <img src={world} alt="" className="self-start" />
          <div className="flex flex-col justify-center items-center font-bold text-7xl gap-[20px]">
            <div className="bg-white rounded-3xl px-[38px] py-4">
              dialect Brings
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className=" bg-[#FFFAA4] rounded-3xl px-[38px] py-4">
                languague
              </div>
              <div className=" bg-white rounded-3xl px-[38px] py-4">
                learning
              </div>
            </div>
          </div>
          <img src={heartface} alt="" className="self-end" />
        </div>
      </div>
      {/* big headinds*/}

      {/* text and button */}
      <div className="text-center mt-7 pb-28">
        <div className="flex justify-center">
          <p className="text-[18px] w-2/6">
            Learn a language right here with hundreds of free language-learning
            lessons. Get access to compact lessons from the experts and connect
            with a community of native speakers to help you master words faster.
          </p>
        </div>
        <div className="flex justify-center mt-12 text-[18px] gap-3">
          <button className="bg-white rounded-md py-[15px] px-[55px]">
            Spanish
          </button>
          <button className="bg-[#003D31] rounded-md py-[15px] px-[35px] text-white">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
