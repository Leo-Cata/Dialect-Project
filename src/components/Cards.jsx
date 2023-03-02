import React from 'react';
import {
  cardWorld,
  cardBook,
  cardBricks,
  cardChat,
  cardClipboard,
  cardWatch,
} from '../assets';
const Cards = () => {
  return (
    <div className="flex flex-col">
      <div className="text-5xl space-x-4 w-1/3 text-center self-center font-bold">
        <span className="text-mainCyan">Changing</span>
        <span>the way people learn new languages</span>
      </div>
      {/* cards */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-6 m-10 max-w-7xl">
          <div className="bg-secondaryYellow rounded-xl py-8">
            <img
              src={cardWorld}
              alt="world globe illustration"
              className="pb-8 px-4"
            />
            <div className="px-4 text-secondaryFont text-lg space-x-1">
              <span>More than</span>
              <span className="font-bold text-mainFont">
                1000 language combinations
              </span>
              <span>so you can learn from your native language</span>
            </div>
          </div>
          <div className="bg-secondaryYellow rounded-xl py-8">
            <img src={cardBook} alt="book illustration" className="pb-8 px-4" />
            <div className="px-4 text-lg text-secondaryFont space-x-1">
              <span className="font-bold text-mainFont">50 topics</span>
              <span>to prepare you for the most common situations</span>
            </div>
          </div>
          <div className="bg-secondaryYellow rounded-xl py-8">
            <img
              src={cardBricks}
              alt="bricks illustration"
              className="pb-8 px-4"
            />
            <div className="px-4 text-lg text-secondaryFont space-x-1">
              <span className="font-bold text-mainFont">
                36 vocabulary builders
              </span>
              <span>to install words fast for constant improvement</span>
            </div>
          </div>
          <div className="bg-secondaryYellow rounded-xl py-8">
            <img src={cardChat} alt="chat illustration" className="pb-8 px-4" />
            <div className="px-4 text-lg text-secondaryFont space-x-1">
              <span className="font-bold text-mainFont">
                41 real conversations
              </span>
              <span>to give you fluency in learning languages</span>
            </div>
          </div>
          <div className="bg-secondaryYellow rounded-xl py-8">
            <img
              src={cardClipboard}
              alt="clipboard illustration"
              className="pb-8 px-4"
            />
            <div className="px-4 text-secondaryFont text-lg space-x-1">
              <span className="font-bold text-mainFont">
                Grammer features & conjugation tables
              </span>
              <span>to shortcut your progress</span>
            </div>
          </div>
          <div className="bg-secondaryYellow rounded-xl py-8">
            <img
              src={cardWatch}
              alt="watch illustration"
              className="pb-8 px-4"
            />
            <div className="px-4 text-secondaryFont text-lg space-x-1">
              <span>Quick</span>
              <span className="font-bold text-mainFont">daily lessons</span>
              <span>for constant improvement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
