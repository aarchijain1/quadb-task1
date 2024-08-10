import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Aarchi
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="#contact">
            <button
              type="button"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact
            </button>
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center px-4 py-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
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
          <div className="hidden md:flex md:order-1 md:space-x-8">
            <a
              href="#home"
              className="text-white hover:text-blue-700"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-blue-700"
            >
              About
            </a>
            <a
              href="#service"
              className="text-white hover:text-blue-700"
            >
              Services
            </a>
            <a
              href="#project"
              className="text-white hover:text-blue-700"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}
        onClick={toggleMenu}
      >
        <div
          className="bg-black w-64 h-full p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block py-2 px-3 text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block py-2 px-3 text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
