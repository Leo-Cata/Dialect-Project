import React from 'react';
import FooterLanguague from './FooterLanguague';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

const Footer = () => {
  return (
    <div className="bg-secondaryYellow">
      <div className="flex items-center flex-col py-16 border-b border-[#DAD0AF]">
        <h1 className="text-5xl text-mainFont font-bold">
          Have Any <span className="text-mainCyan">questions</span>?
        </h1>
        <p className="text-lg text-secondaryFont py-2">
          Visit our{' '}
          <span className="text-mainFont underline cursor-pointer">
            FAQ page
          </span>{' '}
          or email us at{' '}
          <span className="text-mainFont underline cursor-pointer">
            youremail@gmail.com
          </span>
        </p>
      </div>
      <FooterLinks />
      <FooterLanguague />
    </div>
  );
};

export default Footer;
