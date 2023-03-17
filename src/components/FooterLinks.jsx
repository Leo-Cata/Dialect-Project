import React from 'react';
import languagues from '../constants/languagues';

const FooterLinks = () => {
  return (
    <div className="flex items-center md:justify-evenly py-14 flex-col md:flex-row text-center md:items-start md:text-left">
      {/* Dialect links */}
      <div>
        <h3 className="text-mainFont font-bold md:text-2xl py-5 text-lg">
          Dialect
        </h3>
        <ul className="md:text-lg text-secondaryFont space-y-3 [&_li]:cursor-pointer">
          <li>About Us</li>
          <li>Careers</li>
          <li>Dialect Blog</li>
          <li>Press</li>
        </ul>
      </div>
      {/* Learn More Links */}
      <div>
        <h3 className="text-mainFont font-bold md:text-2xl py-5 text-lg">
          Learn More
        </h3>
        <ul className="md:text-lg text-secondaryFont space-y-3 [&_li]:cursor-pointer">
          {languagues.map((lang) => (
            <li key={lang.name}>Learn {lang.name}</li>
          ))}
        </ul>
      </div>
      {/* Products links */}
      <div>
        <h3 className="text-mainFont font-bold md:text-2xl py-5 text-lg">
          Products
        </h3>
        <ul className="md:text-lg text-secondaryFont space-y-3 [&_li]:cursor-pointer">
          <li>Dialect</li>
          <li>Dialect for Businesses</li>
          <li>Dialect Kids</li>
          <li>Dialect VR</li>
          <li>Dialect AR</li>
        </ul>
      </div>
      {/* Support Links */}
      <div>
        <h3 className="text-mainFont font-bold md:text-2xl py-5 text-lg">
          Support
        </h3>
        <ul className="md:text-lg text-secondaryFont space-y-3 [&_li]:cursor-pointer">
          <li>Contact</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Afiliate Program</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
