import React from 'react';
import { char1, char2, world, heartface, charA } from '../assets';
import Buttons from './Buttons';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="hero">
        <Navbar />

        {/* big headinds, text and small buttons */}
        <div className="mt-16">
          <div className="flex md:justify-evenly flex-col md:flex-row">
            <img
              src={world}
              alt="world globe illustration"
              className="self-center md:self-start w-[100px] h-[100px] md:w-auto md:h-auto my-4"
            />
            <div className="flex flex-col justify-center items-center font-bold text-2xl sm:text-5xl lg:text-7xl gap-5 text-center">
              <div className="bg-white rounded-3xl px-10 py-4">
                dialect Brings
              </div>
              <div className="flex flex-col lg:flex-row gap-5">
                <div className=" bg-mainYellow rounded-3xl px-10 py-4">
                  languague
                </div>
                <div className=" bg-white rounded-3xl px-10 py-4">learning</div>
              </div>
            </div>
            <img
              src={heartface}
              alt="heartface flag illustration"
              className="self-center md:self-end w-[100px] h-[100px] md:w-auto md:h-auto my-4"
            />
          </div>
        </div>
        {/* big headinds*/}

        {/* text and button */}
        <div className="text-center mt-7 pb-28">
          <div className="flex justify-center">
            <p className="text-lg w-3/4 md:w-2/6">
              Learn a language right here with hundreds of free
              language-learning lessons. Get access to compact lessons from the
              experts and connect with a community of native speakers to help
              you master words faster.
            </p>
          </div>

          <div className="flex items-center justify-evenly my-12 h-24">
            <img
              src={char1}
              alt=""
              className="invert opacity-[0.15] w-16 h-16 self-start hidden md:block"
            />
            <Buttons />
            <img
              src={char2}
              alt=""
              className="self-end w-16 h-16 invert opacity-[0.15] hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
