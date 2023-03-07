import React, { useState } from 'react';
import { quotes, review1, review2, review3 } from '../assets';
import { GoDash } from 'react-icons/go';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const people = [
  {
    id: 1,
    img: review1,
    name: 'Johnathan Smith',
    title: 'Accountant',

    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius ipsum est, a condimentum ex auctor a. Aenean non sapien volutpat, consectetur arcu at, tincidunt neque. Etiam malesuada felis consequat velit suscipit, ut imperdiet urna semper.',
  },
  {
    id: 2,
    img: review2,

    name: 'Sarah Johnson',
    title: 'Web Developer ',

    text: 'Sed nec rhoncus tortor. Nunc posuere ante id nisl varius feugiat. Sed condimentum tortor dolor, sit amet hendrerit orci aliquet eget. Mauris aliquam odio ac tempus facilisis. Nunc ac odio id arcu facilisis cursus id non mi. Sed non eleifend ante.  ',
  },
  {
    id: 3,
    img: review3,

    name: 'Ryan Williams',
    title: 'Chef',

    text: 'Morbi mi nibh, fringilla ut convallis eget, venenatis sed ex. Vivamus pretium dui lacinia dapibus lobortis. Donec ultrices dui quam, eu euismod metus elementum non. In hac habitasse platea dictumst. Pellentesque bibendum enim et eros viverra.  ',
  },
  {
    id: 4,
    img: review2,

    name: 'Emma Brown',
    title: 'Flight Attendant',

    text: 'Sed lobortis diam at lacinia sagittis. Donec efficitur magna a ipsum rhoncus mattis. Proin venenatis massa sit amet odio dapibus, sit amet lacinia elit convallis. Quisque enim magna, sagittis vel cursus iaculis, pulvinar eu quam. Integer eu mollis dui, nec euismod.  ',
  },
  {
    id: 5,
    img: review3,

    name: 'Matthew Miller',
    title: 'Social Media Manager',

    text: 'Sed vulputate, lacus eget convallis gravida, nunc felis vehicula ipsum, at tincidunt sapien mi ut nisi. Vivamus sit amet velit velit. Morbi blandit ac justo sed posuere. Nullam at tortor egestas, ultricies elit nec, porttitor lectus. Morbi consequat aliquet orci quis.  ',
  },
  {
    id: 6,
    img: review1,

    name: 'Olivia Davis',
    title: 'Construction Worker',
    text: 'Curabitur scelerisque rhoncus libero non hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in rhoncus magna. Cras lobortis lacinia justo, non tincidunt nibh elementum vitae.  ',
  },
  {
    id: 7,
    img: review3,
    name: 'David Lee',
    title: 'Graphic Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique, nisi vel facilisis commodo, sapien turpis vulputate magna, id commodo ex metus eu elit. Praesent ultrices dolor eu justo bibendum, eu lobortis eros vestibulum. ',
  },
  {
    id: 8,
    img: review1,
    name: 'Sophia Chen',
    title: 'Marketing Manager',
    text: 'Fusce eu est nec libero blandit sollicitudin. Etiam condimentum, elit eu euismod dignissim, nulla felis lobortis lorem, in feugiat magna nunc nec est. Aenean a ante quis augue iaculis convallis non non quam. Duis imperdiet sagittis tristique. ',
  },
  {
    id: 9,
    img: review2,
    name: 'Daniel Kim',
    title: 'Software Engineer',
    text: 'Suspendisse volutpat sapien nec odio blandit, sed molestie mauris faucibus. Suspendisse potenti. Duis semper, purus ac dignissim pretium, felis tortor venenatis nulla, vel pellentesque ipsum enim vel neque. In quis ex justo. ',
  },
];

const Carousel = () => {
  // state to get and set indexes in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // state used to set the transition class
  const [TransitionClass, setTransitionClass] = useState('');

  //when prev button is clicked
  const prevHandler = () => {
    //set transition class to element
    setTransitionClass('carousel-items--scale-down');
    //wait 200ms and
    setTimeout(() => {
      //set transition class to nothing
      setTransitionClass('');
      //set current index to elements before the last one if the prev index is 0 or just go back 3 elements
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? people.length - 3 : prevIndex - 3,
      );
    }, 200);
  };

  //when next button is clicked
  const nextHandler = () => {
    //set transition class to element
    setTransitionClass('carousel-items--scale-down');
    //wait 200ms
    setTimeout(() => {
      //set transition class to nothing
      setTransitionClass('');
      //if prev index is 3 elements before the last one, set index to first one, if not add 3 to prev index
      setCurrentIndex((prevIndex) =>
        prevIndex === people.length - 3 ? 0 : prevIndex + 3,
      );
    }, 200);
  };

  //calculate number of pages equal the length of the array minus the number of items per page
  const itemsPerPage = 3;
  const numPages = Math.ceil(people.length / itemsPerPage);

  //get the page of the pagination youre in, set current index equal to the start of the next page
  //so if page 2-1=1*3=3, elements 4,5 and 6 will be rendered
  const handlePageClick = (page) => {
    // set transition class
    setTransitionClass('carousel-items--scale-down');
    // after 200ms
    setTimeout(() => {
      // set class to non
      setTransitionClass('');
      setCurrentIndex((page - 1) * itemsPerPage);
    }, 200);
  };

  return (
    <div>
      <div className="w-full m-auto relative group bg-secondaryYellow flex justify-between ">
        <button onClick={prevHandler} className="">
          <HiOutlineChevronLeft />
        </button>
        <div
          className={`flex justify-center space-x-8 ${TransitionClass} carousel-items`}>
          {people.slice(currentIndex, currentIndex + 3).map((person) => (
            <div key={person.name} className="w-1/5 bg-white rounded-xl">
              <div className="flex flex-row ">
                <div className="flex py-10 px-5 ">
                  <img src={person.img} alt={person.name} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-mainFont font-bold text-lg">
                    {person.name}
                  </h3>
                  <p className="text-secondaryFont">{person.title}</p>
                </div>
              </div>
              <div className="px-5 pb-10">
                <p className="text-secondaryFont">{person.text}</p>
              </div>
              <div className="px-5 flex items-center space-x-1 pb-12">
                <img src={quotes} alt="" className="" />
                <div className="w-full h-[2px] bg-[#DEE5E4]"></div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextHandler}>
          {' '}
          <HiOutlineChevronRight />
        </button>
      </div>
      {/* pagination */}
      {/* center and 2xl text */}
      <div className="flex justify-center text-2xl items-center">
        {/* create a new array of length equals to the number of pages and map it to display "numPages" of dash icon */}
        {/* if the current idex divided by the number of items per page is equal to the index of the current page, make it bigger, else give it an alpha  */}
        {[...Array(numPages)].map((_, i) => (
          <div
            key={i}
            onClick={() => handlePageClick(i + 1)}
            className={
              currentIndex / itemsPerPage === i
                ? 'text-mainFont text-3xl '
                : 'text-black/40'
            }>
            <GoDash />
          </div>
        ))}
      </div>
      {/* pagination ends */}
    </div>
  );
};

export default Carousel;
