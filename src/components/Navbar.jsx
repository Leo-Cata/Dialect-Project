import React, { useState } from 'react';
import { logo } from '../assets';
import { BiMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex md:justify-around md:py-8 text-mainFont md:items-center">
      {/* icon and name */}
      <div className="hidden md:flex flex-row items-center text-2xl">
        <img src={logo} alt="dialect logo" />
        <p className="pl-1">Dialect</p>
      </div>
      {/* links */}
      <div className="hidden md:block">
        <ul className="flex space-x-5">
          <li>How It Works</li>
          <li> Reviews</li>
          <li>Live Lesson</li>
          <li>Pricing</li>
        </ul>
      </div>

      {/* log in */}
      <div className="gap-4 hidden md:flex">
        <button className="border py-2 px-6 border-mainFont rounded-md">
          Log in
        </button>
        <button className="py-2 px-6 bg-mainFont rounded-md text-white">
          Sign Up
        </button>
      </div>

      {/* mobile menu */}
      <div className="bg-mainCyan w-full text-5xl flex flex-col border-b border-black/10 md:hidden">
        <div className="flex justify-between">
          <div className="flex items-center  mx-4">
            <img src={logo} alt="dialect logo" />
            <p className="pl-1">Dialect</p>
          </div>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-8xl self-end px-6">
            {menuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
        {menuOpen ? (
          <>
            <div>
              <ul className="text-center [&_li]:my-8 [&_li]:cursor-pointer">
                <li>How It Works</li>
                <li> Reviews</li>
                <li>Live Lesson</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="flex justify-center space-x-4 my-8">
              <button className="border py-2 px-6 border-mainFont rounded-md">
                Log in
              </button>
              <button className="py-2 px-6 bg-mainFont rounded-md text-white">
                Sign Up
              </button>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Navbar;
