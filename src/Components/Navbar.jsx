import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <div className="md:hidden w-full">
      {/* Burger Icon */}
      <div onClick={toggleMenu} className="p-2 text-white">
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu (relative so it pushes content) */}
      {open && (
        <div className="w-full bg-[#0a192f] text-white flex flex-col items-center space-y-6 py-8 z-40">
          <h2 className='text-white font-bold text-3xl'>Sourabh</h2>
          <a href="#Home" onClick={toggleMenu} className="hover:text-blue-400">Home</a>
          <a href="#About" onClick={toggleMenu} className="hover:text-blue-400">About</a>
          <a href="#Skills" onClick={toggleMenu} className="hover:text-blue-400">Skills</a>
          <a href="#Projects" onClick={toggleMenu} className="hover:text-blue-400">Projects</a>
          <a href="#Education" onClick={toggleMenu} className="hover:text-blue-400">Education</a>
          <a href="#Contact" onClick={toggleMenu} className="hover:text-blue-400">Contact</a>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F1729] z-50">
      <div className="max-w-7xl mx-auto flex px-4 py-4  items-center justify-between">
        {/* Logo */}
        <span id='logo' className="text-white font-bold text-2xl">Sourabh</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-lg absolute left-1/2 transform -translate-x-1/2">
          <a href="#Home"><li className="hover:text-blue-100 font-medium cursor-pointer">Home</li></a>
          <a href="#About"><li className="hover:text-blue-100 font-medium cursor-pointer">About</li></a>
          <a href="#Skills"><li className="hover:text-blue-100 font-medium cursor-pointer">Skills</li></a>
          <a href="#Projects"><li className="hover:text-blue-100 font-medium cursor-pointer">Projects</li></a>
          <a href="#Education"><li className="hover:text-blue-100 font-medium cursor-pointer">Education</li></a>
          <a href="#Contact"><li className="hover:text-blue-100 font-medium cursor-pointer">Contact</li></a>
        </ul>

        {/* Mobile Menu Icon */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
