import React from 'react';
import Home from './Home';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F1729] z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 relative flex items-center justify-between">
        
    
        <span className="text-white font-bold text-2xl">Sourabh</span>

        
        <ul className="hidden md:flex gap-8 text-white text-lg absolute left-1/2 transform -translate-x-1/2">
         <a href="#Home"> <li className="hover:text-blue-100 font-medium cursor-pointer">Home</li></a>
          <a href="#About"><li className="hover:text-blue-100 font-medium cursor-pointer">About</li></a>
         <a href="#Skills"> <li className="hover:text-blue-100 font-medium cursor-pointer">Skills</li></a>
          {/* <li className="hover:text-blue-100 font-medium cursor-pointer">Experience</li> */}
         <a href="#Projects"> <li className="hover:text-blue-100 font-medium cursor-pointer">Projects</li></a>
         <a href="#Education"> <li className="hover:text-blue-100 font-medium cursor-pointer">Education</li></a>
         <a href="#Contact "> <li className="hover:text-blue-100 font-medium cursor-pointer">Contact</li></a>
        </ul>

     
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
