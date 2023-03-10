import React, { createContext, useState } from 'react';
//imports necessary hooks and react
export const LanguagueContext = createContext();
//export the contexts

export const LanguagueProvider = ({ children }) => {
  //exports the provider
  const [isOpen, setIsOpen] = useState(false);
  const [langChosen, setLangChosen] = useState('Languague');

  const handleOpen = () => {
    //set true/false to open drowpdown
    setIsOpen((prev) => !prev);
  };

  const handleLangChosen = (event) => {
    //when lang is choosen in dropdown, close it and set lang in button
    setIsOpen((prev) => !prev);
    setLangChosen(event.target.textContent);
  };

  return (
    //returns the provider and the props we wanna pass
    <LanguagueContext.Provider
      value={{
        isOpen,
        langChosen,
        handleLangChosen,
        handleOpen,
      }}>
      {children}
    </LanguagueContext.Provider>
  );
};
