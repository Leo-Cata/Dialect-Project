import React from 'react';
import languagues from '../constants/languagues';

const FooterLinks = () => {
  return (
    <div className="flex justify-evenly py-14">
      {/* Dialect links */}
      <div>
        <h3 className="text-mainFont font-bold text-2xl pb-5">Dialect</h3>
        <ul className="text-lg text-secondaryFont space-y-3">
          <li>About Us</li>
          <li>Careers</li>
          <li>Dialect Blog</li>
          <li>Press</li>
        </ul>
      </div>
      {/* Learn More Links */}
      <div>
        <h3 className="text-mainFont font-bold text-2xl pb-5">Learn More</h3>
        <ul className="text-lg text-secondaryFont space-y-3">
          {languagues.map((lang) => (
            <li key={lang.name}>Learn {lang.name}</li>
          ))}
        </ul>
      </div>
      {/* Products links */}
      <div>
        <h3 className="text-mainFont font-bold text-2xl pb-5">Products</h3>
        <ul className="text-lg text-secondaryFont space-y-3">
          <li>Dialect</li>
          <li>Dialect for Businesses</li>
          <li>Dialect Kids</li>
          <li>Dialect VR</li>
          <li>Dialect AR</li>
        </ul>
      </div>
      {/* Support Links */}
      <div>
        <h3 className="text-mainFont font-bold text-2xl pb-5">Support</h3>
        <ul className="text-lg text-secondaryFont space-y-3">
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
