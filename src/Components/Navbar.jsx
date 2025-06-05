import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0F1729] z-50">
        <div  className=" max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <span id='logo' className="max700  font-bold text-2xl">Sourabh</span>

          {/* Desktop Menu */}
          <ul id='desktop-div' className="max700 md:flex gap-8 text-white text-lg">
            <li><a href="#Home" className="hover:text-blue-100 font-medium">Home</a></li>
            <li><a href="#About" className="hover:text-blue-100 font-medium">About</a></li>
            <li><a href="#Skills" className="hover:text-blue-100 font-medium">Skills</a></li>
            <li><a href="#Projects" className="hover:text-blue-100 font-medium">Projects</a></li>
            <li><a href="#Education" className="hover:text-blue-100 font-medium">Education</a></li>
            <li><a href="#Contact" className="hover:text-blue-100 font-medium">Contact</a></li>
          </ul>

          {/* Mobile Icon */}
          <div onClick={toggleMenu} className="md:hidden cursor-p text-white">
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu (below navbar) */}
      {open && (
        <div className="md:hidden w-full bg-[#0a192f] text-white flex flex-col items-center space-y-6 py-8 pt-24 z-40 relative">
          <h2 className="text-white font-bold text-3xl">Sourabh</h2>
          <a href="#Home" onClick={toggleMenu} className="hover:text-blue-400">Home</a>
          <a href="#About" onClick={toggleMenu} className="hover:text-blue-400">About</a>
          <a href="#Skills" onClick={toggleMenu} className="hover:text-blue-400">Skills</a>
          <a href="#Projects" onClick={toggleMenu} className="hover:text-blue-400">Projects</a>
          <a href="#Education" onClick={toggleMenu} className="hover:text-blue-400">Education</a>
          <a href="#Contact" onClick={toggleMenu} className="hover:text-blue-400">Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
