import React, { useState, useContext } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const languagues = [
  'English',
  'French',
  'Spanish',
  'German',
  'Russian',
  'Italian',
  'Portuguese',
  'Turkish',
  'Chinese',
  'Arabic',
  'Japanese',
];

const LanguaguesButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [langChoosen, setLangChoosen] = useState('Languague');

  const handleOpen = () => {
    //set true/false to open drowpdown
    setIsOpen((prev) => !prev);
  };

  const handleLangChoosen = (event) => {
    //when lang is choosen in dropdown, close it and set lang in button
    setIsOpen((prev) => !prev);
    setLangChoosen(event.target.textContent);
  };

  return (
    <div className="relative flex flex-col items-center rounded-md bg-white w-[10rem]">
      <button
        onClick={handleOpen}
        className="flex justify-around items-center p-4 w-full">
        {langChoosen}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && (
        <div>
          <ul className="absolute left-0 top-16 w-full text-center bg-secondaryYellow rounded-md border border-[#DAD0AF]">
            {languagues.map((lang) => (
              <li
                onClick={handleLangChoosen}
                value="2"
                key={lang}
                className={
                  langChoosen === lang
                    ? 'py-2 bg-mainYellow rounded-md'
                    : 'py-2 hover:bg-mainYellow cursor-pointer rounded-md'
                }>
                {lang}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguaguesButton;
