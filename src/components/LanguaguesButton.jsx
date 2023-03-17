import React, { useContext } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { LanguagueContext } from '../context/LanguagueContext';
import languagues from '../constants/languagues';

const LanguaguesButton = () => {
  //get states and functions from the provider
  const { isOpen, langChosen, handleLangChosen, handleOpen } =
    useContext(LanguagueContext);
  console.log(isOpen);
  return (
    <div className="relative flex flex-col items-center rounded-md bg-white px-4">
      <button
        onClick={handleOpen}
        className="flex justify-around items-center py-4 w-full sm:w-44">
        {langChosen}
        {isOpen ? (
          <FiChevronUp className="mx-1" />
        ) : (
          <FiChevronDown className="mx-1" />
        )}
      </button>

      <div className={isOpen ? 'block' : 'hidden'}>
        <ul className="absolute left-0 top-16 w-full text-center bg-secondaryYellow rounded-md border border-[#DAD0AF] scaleDropdown">
          {languagues.map((lang) => (
            <li
              onClick={handleLangChosen}
              value="2"
              key={lang.name}
              className={
                langChosen === lang
                  ? 'py-2 bg-mainYellow rounded-md'
                  : 'py-2 hover:bg-mainYellow cursor-pointer rounded-md'
              }>
              {lang.name} {lang.flag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguaguesButton;
