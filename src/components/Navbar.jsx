import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Icon from '../assets/Icon.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-purple-400 to-blue-800 text-gray-300'>
      <div >
        <h1 className='font-thin text-2xl italic font-serif text-white'>BG</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
          <li className='text-white hover:bg-white font-semibold hover:text-slate-400 hover:font-semibold duration-500 rounded'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='text-white hover:bg-white font-semibold hover:text-slate-400  hover:font-semibold duration-500 rounded'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='text-white hover:bg-white font-semibold hover:text-slate-400  hover:font-semibold duration-500 rounded'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        {/* <li className='text-white hover:bg-white font-semibold hover:text-slate-400  hover:font-semibold duration-500 rounded'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li> */}
        <li className='text-white hover:bg-white font-semibold hover:text-slate-400  hover:font-semibold duration-500 rounded'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-purple-400 to-blue-800 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;