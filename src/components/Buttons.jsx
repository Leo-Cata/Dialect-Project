import React from 'react';
import LanguaguesButton from './LanguaguesButton';
import LearningButton from './LearningButton';
const Buttons = () => {
  return (
    <div className="mt-12 text-[18px] space-x-3 flex flex-row">
      {/* <button className="bg-white rounded-md py-4 px-14">Spanish</button>
      <button className="bg-mainFont rounded-md py-[15px] px-[35px] text-white">
        Start Learning
      </button> */}
      <LanguaguesButton />
      <LearningButton />
    </div>
  );
};

export default Buttons;
