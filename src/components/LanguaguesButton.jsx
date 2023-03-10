import React, { useContext } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { LanguagueContext } from '../context/LanguagueContext';

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
  //get states and functions from the provider
  const { isOpen, langChosen, handleLangChosen, handleOpen } =
    useContext(LanguagueContext);

  return (
    <div className="relative flex flex-col items-center rounded-md bg-white w-[10rem]">
      <button
        onClick={handleOpen}
        className="flex justify-around items-center p-4 w-full">
        {langChosen}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && (
        <div>
          <ul className="absolute left-0 top-16 w-full text-center bg-secondaryYellow rounded-md border border-[#DAD0AF]">
            {languagues.map((lang) => (
              <li
                onClick={handleLangChosen}
                value="2"
                key={lang}
                className={
                  langChosen === lang
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
