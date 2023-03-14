import React from 'react';
import FooterSocials from './FooterSocials';

const siteLanguages = [
  'Română',
  'Français',
  'Español',
  'Deutsch',
  'Русский',
  'Italiano',
  '中文',
  'Čeština',
  'हिन्दी',
];

const FooterLanguague = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="w-11/12 h-px bg-[#DAD0AF]" />
      <div className="my-6">
        <h3 className="text-mainFont font-bold text-2xl pb-5 text-center md:text-left">
          Site Languague
        </h3>
        <ul className="flex md:text-lg text-secondaryFont md:space-x-5 flex-col md:flex-row text-center space-y-4 md:space-y-0">
          {siteLanguages.map((siteLangs) => (
            <li className="cursor-pointer" key={siteLangs}>
              {siteLangs}
            </li>
          ))}
        </ul>
        <FooterSocials />
      </div>
    </div>
  );
};

export default FooterLanguague;
