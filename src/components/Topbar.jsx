import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/l-logo.svg'; // Adjust the import path accordingly
import moreIcon from '../assets/icons/more-icon.svg'; // Adjust the import path accordingly

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='fixed top-8 left-0 w-full h-16 bg-transparent flex justify-between items-center px-4'>
      {/* Left-side logo and title */}
      <ul className='flex items-center'>
        <Link to="/" className='flex items-center'>
          <li className='bg-transparent rounded-xl w-14 h-14 transition hover:scale-125'>
            <img className='w-13 h-13 px-1 py-1 drop-shadow-xl' src={logo} alt="logo" />
          </li>
        </Link>
        <Link to="/">
          <li className='font-bold transition ml-2 mt-2 bg-light drop-shadow-xl text-dark px-3 py-2 rounded-md hover:scale-110'>
            Learniverse
          </li>
        </Link>
      </ul>

      {/* Right-side more icon */}
      <ul className='relative'>
        <li className='bg-light w-12 h-12 rounded-md drop-shadow-xl transition hover:scale-105' onClick={toggleDropdown}>
          <img className='px-2 py-2 cursor-pointer' src={moreIcon} alt="more" />
        </li>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className='absolute top-12 right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10'>
            <ul className='text-gray-700'>
              <li className='px-4 py-2 hover:bg-gray-200 transition'>
                <Link to="/settings">Settings</Link>
              </li>
              <li className='px-4 py-2 hover:bg-gray-200 transition'>
                <Link to="/">Log Out</Link>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Topbar;
