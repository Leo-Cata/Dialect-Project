import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { review1, review2, review3, quotes } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

import { A11y, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';

const Testimonials = () => {
  //3 sets of slides, each containing 3 testimonials
  //have an array with 3 objects, each containing id, image, person name, title and text
  //for each loop and

  const people = [
    {
      id: 1,
      img: review1,
      name: 'Johnathan Smith',
      title: 'Accountant',

      text: 'Dialect is excellent - short and sweet and effective lessons and great quick review which is key to remembering. I love it! I’m learning Dutch!!  I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations. ',
    },
    {
      id: 2,
      img: review2,

      name: 'Sarah Johnson',
      title: 'Web Developer ',

      text: 'Dialect is excellent - short and sweet and effective lessons and great quick review which is key to remembering. I love it! I’m learning Dutch!!  I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations. ',
    },
    {
      id: 3,
      img: review3,

      name: 'Ryan Williams',
      title: 'Chef',

      text: 'Dialect is excellent - short and sweet and effective lessons and great quick review which is key to remembering. I love it! I’m learning Dutch!!  I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations. ',
    },
    {
      id: 4,
      img: review1,

      name: 'Emma Brown',
      title: 'Flight Attendant',

      text: 'Dialect is excellent - short and sweet and effective lessons and great quick review which is key to remembering. I love it! I’m learning Dutch!!  I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations. ',
    },
    {
      id: 5,
      img: review2,

      name: 'Matthew Miller',
      title: 'Social Media Manager',

      text: 'Dialect is excellent - short and sweet and effective lessons and great quick review which is key to remembering. I love it! I’m learning Dutch!!  I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations. ',
    },
    {
      id: 6,
      img: review3,

      name: 'Olivia Davis',
      title: 'Construction Worker',
      text: 'Dialect is excellent - short and sweet and effective lessons and great quick review which is key to remembering. I love it! I’m learning Dutch!!  I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations. ',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? people.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === people.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  return (
    // main wrapper
    <div className="w-full m-auto py-16 px-4 relative group bg-secondaryYellow flex justify-center space-x-8">
      {/* card starts */}
      <div className="w-1/5 bg-white rounded-xl ">
        {/* card img, name and title starts*/}
        <div className="flex pt-10 pb-7 pl-5">
          <img src={people[currentIndex].img} alt="" />
          <div className="flex flex-col justify-center ">
            <span className="text-mainFont font-bold text-lg">
              {people[currentIndex].name}
            </span>
            <span className="text-secondaryFont">
              {people[currentIndex].title}
            </span>
          </div>
        </div>
        {/* card img, name and title ends */}

        {/* card text  */}
        <div className="px-5 pb-10">
          <span className="text-secondaryFont">
            {people[currentIndex].text}
          </span>
        </div>

        {/* card bottom decoration */}
        <div className="px-5 flex items-center space-x-1 pb-12">
          <img src={quotes} alt="" className="" />
          <div className="w-full h-[2px] bg-[#DEE5E4]"></div>
        </div>
      </div>
      {/* card ends */}

      {/* card starts */}
      <div className="w-1/5 bg-white rounded-xl ">
        {/* card img, name and title starts*/}
        <div className="flex pt-10 pb-7 pl-5">
          <img src={people[currentIndex + 1].img} alt="" />
          <div className="flex flex-col justify-center ">
            <span className="text-mainFont font-bold text-lg">
              {people[currentIndex + 1].name}
            </span>
            <span className="text-secondaryFont">
              {people[currentIndex + 1].title}
            </span>
          </div>
        </div>
        {/* card img, name and title ends */}

        {/* card text  */}
        <div className="px-5 pb-10">
          <span className="text-secondaryFont">
            {people[currentIndex + 1].text}
          </span>
        </div>

        {/* card bottom decoration */}
        <div className="px-5 flex items-center space-x-1 pb-12">
          <img src={quotes} alt="" className="" />
          <div className="w-full h-[2px] bg-[#DEE5E4]"></div>
        </div>
      </div>
      {/* card ends */}

      {/* card starts */}
      <div className="w-1/5 bg-white rounded-xl ">
        {/* card img, name and title starts*/}
        <div className="flex pt-10 pb-7 pl-5">
          <img src={people[currentIndex + 2].img} alt="" />
          <div className="flex flex-col justify-center ">
            <span className="text-mainFont font-bold text-lg">
              {people[currentIndex + 2].name}
            </span>
            <span className="text-secondaryFont">
              {people[currentIndex + 2].title}
            </span>
          </div>
        </div>
        {/* card img, name and title ends */}

        {/* card text  */}
        <div className="px-5 pb-10">
          <span className="text-secondaryFont">
            {people[currentIndex + 2].text}
          </span>
        </div>

        {/* card bottom decoration */}
        <div className="px-5 flex items-center space-x-1 pb-12">
          <img src={quotes} alt="" className="" />
          <div className="w-full h-[2px] bg-[#DEE5E4]"></div>
        </div>
      </div>
      {/* card ends */}
      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} />
      </div>

      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactRight onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Testimonials;
