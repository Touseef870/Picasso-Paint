import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import avatarAli from '../assets/Log.png';

const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  // Function to check if a link is active
  const isActive = (path, exact = false) => {
    return exact ? pathname === path : pathname.startsWith(path);
  };

  // Nav items data for cleaner code
  const navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  // Product dropdown items
  const productItems = [
    { path: '/products/evernew', label: 'EVERNEW' },
    { path: '/products/toplac', label: 'TOPLAC' },
    { path: '/products/kent', label: 'KENT' }
  ];

  return (
    <nav className="w-full bg-white shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <img src={avatarAli} alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-medium text-gray-700">
          <li className="hover:text-[#da2a30] cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#da2a30] cursor-pointer">
            <Link to="/About">About</Link>
          </li>

          {/* Dropdown Products */}
          <li
            className="relative cursor-pointer hover:text-gray-700"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className={`flex items-center gap-1 ${isActive('/products') ? 'text-teal-200 font-semibold' : ''
              }`}>
              Products <MdArrowDropDown />
            </div>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white border shadow-md z-20 text-sm rounded-md overflow-hidden">
                {productItems.map((product) => (
                  <li key={product.path}>
                    <Link
                      to={product.path}
                      className={`block px-4 py-2 hover:bg-blue-50 ${isActive(product.path) ? 'bg-blue-50 text-teal-200' : ''
                        }`}
                    >
                      {product.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="hover:text-[#da2a30] cursor-pointer">
            <Link to="/Service">Services</Link>
          </li>
          <li className="hover:text-[#da2a30] cursor-pointer">
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li className="hover:text-[#da2a30] cursor-pointer">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

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
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-1 ${isActive(item.path, item.exact) ? 'text-teal-200 font-semibold' : ''
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <div>
              <div
                className={`flex items-center gap-1 py-1 cursor-pointer ${isActive('/products') ? 'text-teal-200 font-semibold' : ''
                  }`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Products <MdArrowDropDown />
              </div>
              {dropdownOpen && (
                <ul className="ml-4 mt-1 text-sm space-y-1">
                  {productItems.map((product) => (
                    <li key={product.path}>
                      <Link
                        to={product.path}
                        className={`block py-1 ${isActive(product.path) ? 'text-teal-200' : ''
                          }`}
                      >
                        {product.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

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