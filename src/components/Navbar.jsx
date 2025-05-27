import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import avatarAli from '../assets/Log.png';

import { MdArrowDropDown } from 'react-icons/md';

const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
<nav className="w-full bg-white shadow-md z-50 sticky top-0">
<div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">

        <div>
          <img src={avatarAli} alt="Logo" className="h-16 w-auto" />
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>

          {/* Dropdown Products */}
          <li
            className="relative cursor-pointer hover:text-blue-600"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              Products <MdArrowDropDown />
            </div>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white border shadow-md z-20 text-sm">
                <li className="px-4 py-2 hover:bg-blue-50">EVERNEW</li>
                <li className="px-4 py-2 hover:bg-blue-50">TOPLAC</li>
                <li className="px-4 py-2 hover:bg-blue-50">KENT</li>
                <li className="px-4 py-2 hover:bg-blue-50">INTERIOR</li>
                <li className="px-4 py-2 hover:bg-blue-50">EXTERIOR</li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Search Input */}
        <div className="hidden md:flex items-center border rounded-md px-2 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-sm px-1"
          />
          <FaSearch className="text-gray-500 ml-1" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <li>Home</li>
            <li>About</li>
            <div>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Products <MdArrowDropDown />
              </div>
              {dropdownOpen && (
                <ul className="ml-4 mt-2 text-sm">
                  <li className="py-1">EVERNEW</li>
                  <li className="py-1">TOPLAC</li>
                  <li className="py-1">KENT</li>
                  <li className="py-1">INTERIOR</li>
                  <li className="py-1">EXTERIOR</li>
                </ul>
              )}
            </div>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
            <div className="flex items-center border rounded-md px-2 py-1 mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-sm w-full"
              />
              <FaSearch className="text-gray-500 ml-1" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
