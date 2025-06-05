import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import avatarAli from '../assets/Log.png';

const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path, exact = false) => {
    return exact ? pathname === path : pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About' },
    { path: '/Service', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const productItems = [
    { path: '/AllItems', label: 'Product' }
   
  ];

  return (
    <nav className="w-full bg-white shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <img src={avatarAli} alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-teal-500 transition-colors ${isActive(item.path, item.exact) ? 'text-teal-500 font-semibold' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Products as plain links (no dropdown) */}
          {productItems.map((product) => (
            <li key={product.path}>
              <Link
                to={product.path}
                className={`hover:text-teal-500 transition-colors ${isActive(product.path) ? 'text-teal-500 font-semibold' : ''}`}
              >
                {product.label}
              </Link>
            </li>
          ))}

          {/* Search */}
          <div className="flex items-center border rounded-md px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-sm px-1 w-32"
            />
            <FaSearch className="text-gray-500 ml-1" />
          </div>
        </ul>

        {/* Mobile Toggle */}
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
                  className={`block py-1 ${isActive(item.path, item.exact) ? 'text-teal-500 font-semibold' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Products as simple links */}
            {productItems.map((product) => (
              <li key={product.path}>
                <Link
                  to={product.path}
                  className={`block py-1 ${isActive(product.path) ? 'text-teal-500 font-semibold' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {product.label}
                </Link>
              </li>
            ))}

            {/* Search Input */}
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
