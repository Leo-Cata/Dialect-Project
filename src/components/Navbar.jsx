import React, { useState } from 'react';
import { logo } from '../assets';
import { BiMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex md:justify-around md:py-8 text-mainFont md:items-center">
      {/* icon and name */}
      <div className="hidden md:flex flex-row items-center text-2xl cursor-pointer transition hover:scale-105 duration-200">
        <img src={logo} alt="dialect logo" />
        <p className="pl-1">Dialect</p>
      </div>
      {/* links */}
      <div className="hidden md:block">
        <ul className="flex space-x-5 [&_li]:cursor-pointer">
          <li className="hover:text-black transition hover:scale-105 duration-100">
            How It Works
          </li>
          <li className="hover:text-black transition hover:scale-105 duration-100">
            Reviews
          </li>
          <li className="hover:text-black transition hover:scale-105 duration-100">
            Live Lesson
          </li>
          <li className="hover:text-black transition hover:scale-105 duration-100">
            Pricing
          </li>
        </ul>
      </div>

      {/* log in */}
      <div className="gap-4 hidden md:flex">
        <button className="border py-2 px-6 border-mainFont rounded-md transition hover:bg-mainYellow hover:border-mainYellow duration-200 hover:scale-105">
          Log in
        </button>
        <button className="py-2 px-6 bg-mainFont rounded-md text-white transition hover:scale-105 duration-200">
          Sign Up
        </button>
      </div>

      {/* mobile menu */}
      <div className="bg-[#30DDBC] w-full text-5xl flex flex-col  rounded-b-[2.5rem] md:hidden shadow-md">
        <div className="flex justify-between">
          <div className="flex items-center  mx-4">
            <img src={logo} alt="dialect logo" />
            <p className="pl-1">Dialect</p>
          </div>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`text-6xl self-end px-6 ${
              menuOpen
                ? 'rotate-180 transition-transform ease-in-out duration-300'
                : 'transition ease-out duration-300'
            }`}>
            {menuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
        <div className={menuOpen ? 'block' : 'hidden'}>
          <div>
            <ul className="text-center [&_li]:my-8 [&_li]:cursor-pointer [&_li]:underline text-4xl">
              <li>How It Works</li>
              <li> Reviews</li>
              <li>Live Lesson</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 my-8 text-3xl">
            <button className=" border py-2 px-6 border-mainFont rounded-md">
              Log in
            </button>
            <button className="py-2 px-6 bg-mainFont rounded-md text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
