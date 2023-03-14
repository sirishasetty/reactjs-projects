import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Header_logo from '../assets/header_logo.jpg';
// import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ca6314] text-gray-300'>
      <div>
        <img src={Header_logo} alt='Logo Image' style={{ width: '200px', height:'70px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>  
        <a href='/'>Home</a>
        </li>
        <li>
        <a href='/about'>About</a>
        </li>
        <li>
        <a href='/skills'>Skills</a>        
        </li>
        <li>
          <a href='/work'>Work</a>
        </li>
              <li>
        <a href='/contact'>Contact</a>
                  
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
                 <a href='/home'>Home</a>

        </li>
        <li className='py-6 text-4xl'>
          {' '}
        <a href='/about'>About</a>
          
        </li>
        <li className='py-6 text-4xl'>
          {' '}
                  <a href='/skills'>Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
                 <a href='/work'>Work</a>

        </li>
        <li className='py-6 text-4xl'>
          {' '}
        <a href='/contact'>Contact</a>
          
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/chaya-d-33a7611b3/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/sirishasetty'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:devarasettychayasirisha@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;