import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import avatarAli from '../assets/Log.png';
import SearchDialogBox from './search/SearchDialogBox';
import { products } from '../constant/products'

const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    setIsLoading(true);
    // Simulate API call or filtering
    const timer = setTimeout(() => {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

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
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src={avatarAli} alt="Logo" className="h-14 w-auto" />
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

          <li>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setIsSearchDialogOpen(true)}
              className="flex items-center border rounded-md p-2 hover:bg-gray-50"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setIsSearchDialogOpen(true)}
            className="flex items-center border rounded-md p-2 hover:bg-gray-50"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-lg">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            {[...navItems, ...productItems].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 px-2 rounded hover:bg-gray-50 ${isActive(item.path, item.exact) ? 'text-teal-500 font-semibold' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <SearchDialogBox
        isOpen={isSearchDialogOpen}
        setIsOpen={setIsSearchDialogOpen}
        title="Search Products"
        placeholder="Search products..."
        filteredData={filteredProducts}
        onSearchQueryChange={setSearchQuery}
        searchQuery={searchQuery}
        loading={isLoading}
      />
    </nav>
  );
};

export default MainNavbar;