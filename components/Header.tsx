import React from "react";

const Header = () => {
  return (
    <nav className='w-full border-b p-6 sticky top-0 z-20 bg-white shadow-sm'>
      <img
        src='/assets/images/full_colored.svg'
        alt='GDG cloud kolkata'
        className='w-52 md:w-80 max-w-sm h-auto'
      />
    </nav>
  );
};

export default Header;
