import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import brand_logo from "../Assets/bluetick_consultants.png"
const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed top-0 w-full bg-opacity-85">
    <div className="mx-auto flex justify-between items-center flex-wrap">
      <img src={brand_logo} className='h-[35px] w-[120px]'></img>
      <ul className="flex gap-4 flex-wrap">
        <li><ScrollLink to="hero" smooth={true} duration={500}
        className="text-gray-600 font-[500] cursor-pointer hover:text-blue-500">HOME</ScrollLink></li>
        <li><ScrollLink to="what-we-offer" smooth={true} duration={500} 
        className="text-gray-600 font-[500] cursor-pointer hover:text-blue-500">PRODUCTS</ScrollLink></li>
        <li><ScrollLink to="blogs" smooth={true} duration={500} 
        className="text-gray-600 font-[500] cursor-pointer hover:text-blue-500">BLOGS</ScrollLink></li>
        <li><ScrollLink to="lets-connect" smooth={true} duration={500} 
        className="text-gray-600 font-[500] cursor-pointer hover:text-blue-500">CONTACT US</ScrollLink></li>
      </ul>
    </div> 
  </nav>
  );
};

export default Navbar;
