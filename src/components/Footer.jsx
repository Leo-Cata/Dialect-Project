import React from 'react';
import FooterLanguague from './FooterLanguague';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

const Footer = () => {
  return (
    <div className="bg-secondaryYellow">
      <div className="flex items-center flex-col py-16 border-b border-[#DAD0AF]">
        <h1 className="text-3xl md:text-5xl text-mainFont font-bold">
          Have Any <span className="text-mainCyan">questions</span>?
        </h1>
        <p className="md:text-lg text-secondaryFont py-2 px-2 text-center [&_span]:text-mainFont [&_span]:underline [&_span]:cursor-pointer">
          Visit our <span>FAQ page</span> or email us at{' '}
          <span>youremail@gmail.com</span>
        </p>
      </div>
      <FooterLinks />
      <FooterLanguague />
    </div>
  );
};

export default Footer;
