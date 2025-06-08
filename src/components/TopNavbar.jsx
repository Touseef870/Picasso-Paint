import React from 'react';
import { BsMailbox, BsWhatsapp } from 'react-icons/bs';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm py-3 px-4 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Left Items - Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-3 md:gap-x-6">
          <div className="flex items-center gap-2 group min-w-[200px] md:min-w-0">
            <div className="p-2 bg-blue-600 rounded-full group-hover:bg-blue-500 transition-all shrink-0">
              <FaPhoneAlt className="text-white text-xs" />
            </div>
            <a href="tel:+9203317422776" className="hover:text-blue-400 transition-colors whitespace-nowrap">
              +92 0331-PICASSO (7422776)
            </a>
          </div>

          <div className="flex items-center gap-2 group min-w-[200px] md:min-w-0">
            <div className="p-2 bg-red-600 rounded-full group-hover:bg-red-500 transition-all shrink-0">
              <FaMapMarkerAlt className="text-white text-xs" />
            </div>
            <span className="hover:text-red-400 transition-colors whitespace-nowrap">
              D-16, Manghopir Road, Site Area, Karachi
            </span>
          </div>

          <div className="flex items-center gap-2 group min-w-[200px] md:min-w-0">
            <div className="p-2 bg-emerald-600 rounded-full group-hover:bg-emerald-500 transition-all shrink-0">
              <FaClock className="text-white text-xs" />
            </div>
            <span className="hover:text-emerald-400 transition-colors whitespace-nowrap">
              Mon-Sat: 9AM - 5PM
            </span>
          </div>

          <div className="flex items-center gap-2 group min-w-[200px] md:min-w-0">
            <div className="p-2 bg-green-600 rounded-full group-hover:bg-green-500 transition-all shrink-0">
              <BsMailbox className="text-white text-xs" />
            </div>
            <a href="mailto:picassopaintindustries@gmail.com" className="hover:text-green-400 transition-colors whitespace-nowrap">
              picassopaintindustries@gmail.com
            </a>
          </div>
        </div>

        {/* Right Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
          <a href="#" className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full transition-colors shrink-0" aria-label="Facebook">
            <FaFacebookF className="text-white text-sm" />
          </a>
          <a href="#" className="p-2 bg-gray-700 hover:bg-blue-400 rounded-full transition-colors shrink-0" aria-label="Twitter">
            <FaTwitter className="text-white text-sm" />
          </a>
          <a href="#" className="p-2 bg-gray-700 hover:bg-pink-600 rounded-full transition-colors shrink-0" aria-label="Instagram">
            <FaInstagram className="text-white text-sm" />
          </a>
          <a href="#" className="p-2 bg-gray-700 hover:bg-blue-700 rounded-full transition-colors shrink-0" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white text-sm" />
          </a>
          <a href="#" className="p-2 bg-gray-700 hover:bg-green-500 rounded-full transition-colors shrink-0" aria-label="WhatsApp">
            <BsWhatsapp className="text-white text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;