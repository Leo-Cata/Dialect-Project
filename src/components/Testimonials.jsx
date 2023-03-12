import React from 'react';
import Carousel from './Carousel';

const Testimonials = () => {
  return (
    <div className="bg-secondaryYellow py-16">
      <div className="flex items-center flex-col pb-20 space-y-2">
        <h1 className="text-3xl lg:text-5xl text-mainFont font-bold text-center">
          People Love <span className="text-mainCyan">Dialect</span>
        </h1>
        <p className="text-secondaryFont w-3/4 lg:w-1/4 text-center lg:text-lg">
          Learning with us is fun, and research shows that it works! Learning a
          language on Dialect is completely free.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Testimonials;
