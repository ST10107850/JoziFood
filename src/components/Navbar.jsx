import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 md:px-10 ${scrolling ? "bg-[#161515]" : "md:bg-transparent"} bg-[#161515]`}>
      <div className="flex flex-row justify-between items-center py-4 px-4">
        {/* Logo */}
        <NavLink to="/">
          <h1 className='text-yellow-400  text-2xl md:text-5xl font-dancing'>
            J<span className='text-white'>f</span>M
          </h1>
        </NavLink>

        {/* Hamburger Menu Icon for Mobile */}
        <button 
          className="text-[#fff72e] text-3xl md:hidden" 
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        {/* Nav Links */}
        <nav className={`absolute left-0 top-full w-full md:relative md:flex md:justify-end md:space-x-5 md:bg-transparent bg-[#161515] transition-all ease-in-out duration-300 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <NavLink to="/" className="block md:inline text-[#fff72e] text-xl hover:text-white py-2 md:py-0 px-4">Home</NavLink>
          <NavLink to="/menu" className="block md:inline text-[#fff72e] text-xl hover:text-white py-2 md:py-0 px-4">Menu</NavLink>
          <a href="#about" className="block md:inline text-[#fff72e] text-xl hover:text-white py-2 md:py-0 px-4">About</a>
          <a href="#contact" className="block md:inline text-[#fff72e] text-xl hover:text-white py-2 md:py-0 px-4">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
