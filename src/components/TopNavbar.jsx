import React from 'react';
import { BsMailbox } from 'react-icons/bs';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <div className="w-full bg-gray-900 text-white text-sm py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4">
        
        {/* Left Items */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400" />
            <span>+92 0331-PICASSO (7422776)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            <span>D-16, Manghopir Road, Site Area, Karachi, Pakistan.</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-green-400" />
            <span>Mon - Sat 09:00 AM - 05:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <BsMailbox className="text-green-400" />
            <span>picassopaintindustries@gmail.com</span>
          </div>
        </div>

        {/* Right Social Links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
