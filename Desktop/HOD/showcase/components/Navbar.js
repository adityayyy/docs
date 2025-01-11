'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between relative">
      
      <div className="text-xl font-bold">My Website</div>

   
      <div className="hidden md:flex space-x-4">
        <button onClick={() => handleScroll('about')} className="hover:text-gray-400">
          About
        </button>
        <button onClick={() => handleScroll('showcase')} className="hover:text-gray-400">
          Showcase
        </button>
        <button onClick={() => handleScroll('contact')} className="hover:text-gray-400">
          Contact
        </button>
        <a href="/register" className="hover:text-gray-400">
          Register
        </a>
      </div>

      
      <div className="md:hidden">
        <GiHamburgerMenu
          className="cursor-pointer"
          size={24}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

    
      {isOpen && (
        <div className="absolute top-16 left-0 bg-gray-800 text-white w-full flex flex-col items-center space-y-4 md:hidden z-10">
          <button onClick={() => handleScroll('about')} className="hover:text-gray-400">
            About
          </button>
          <button onClick={() => handleScroll('showcase')} className="hover:text-gray-400">
            Showcase
          </button>
          <button onClick={() => handleScroll('contact')} className="hover:text-gray-400">
            Contact
          </button>
          <a
            href="/register"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)} // Close the menu after clicking
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
