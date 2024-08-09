import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-20 top-0 start-0 border-b px-8 md:px-16 lg:px-24  mb-5 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a>
         
        <div className='text-2xl font-bold hidden md:inline self-center whitespace-nowrap '>Aarchi</div>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact</button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex space-x-6">
            <li>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            </li>
            <li>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            </li>
            <li>
            <a href="#service" className='hover:text-gray-400'>Services</a>
                
            </li>
            <li>
            <a href="#project" className='hover:text-gray-400'>Projects</a>
            </li>
            <li>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
