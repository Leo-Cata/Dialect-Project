import React from 'react';
import { facebook, linkedin, twitter } from '../assets';

const FooterSocials = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <h3>Copyright @UIHUT 2022</h3>
      <div className="flex space-x-3">
        <img src={facebook} alt="facebook icon" className="cursor-pointer" />
        <img src={linkedin} alt="linkedin icon" className="cursor-pointer" />
        <img src={twitter} alt="twitter icon" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default FooterSocials;
