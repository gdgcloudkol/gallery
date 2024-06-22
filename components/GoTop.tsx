"use client";

import { useEffect, useState } from "react";

const GoTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };
  return (
    isVisible && (
      <div
        className={`absolute right-10 bottom-10 group inline-block`}
        onClick={scrollToTop}
      >
        <button className='block'>
          <div className='grid  place-content-center z-40 fixed w-12 h-12 rounded-full right-4 bottom-4 cursor-pointer leading-7 text-center bg-secondary p-4 group-hover:bg-gray-700 duration-150'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#8AB4F8'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='group-hover:translate-y-[-2px] duration-100'
            >
              <path d='m5 12 7-7 7 7' />
              <path d='M12 19V5' />
            </svg>
          </div>
        </button>
      </div>
    )
  );
};

export default GoTop;
