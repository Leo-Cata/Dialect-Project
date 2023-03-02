import React from 'react';
import { logo } from '../assets';
const Navbar = () => {
  return (
    <div className="flex justify-around py-8 font-atkinson text-mainFont">
      {/* icon and name */}
      <div className="flex flex-row items-center text-2xl">
        <img src={logo} alt="dialect logo" />
        <p className="pl-1">Dialect</p>
      </div>

      {/* links */}
      <div>
        <ul className="flex">
          <li className="pr-10">How It Works</li>
          <li className="pr-10"> Reviews</li>
          <li className="pr-10">Live Lesson</li>
          <li>Pricing</li>
        </ul>
      </div>

      {/* log in */}
      <div className="flex gap-4">
        <button className="border py-2 px-6 border-mainFont rounded-md">
          Log in
        </button>
        <button className="py-2 px-6 bg-mainFont rounded-md text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
