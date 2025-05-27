import React from 'react';
import { BsMailbox } from 'react-icons/bs';
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
    <div className="w-full bg-gray-900 text-white text-sm py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        
        {/* Left Items - Grid on Mobile for Better Wrap */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400" />
            <span>+92 0331-PICASSO (7422776)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            <span>D-16, Manghopir Road, Site Area, Karachi</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-green-400" />
            <span>Mon - Sat 09:00 AM - 05:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <BsMailbox className="text-green-400" />
            <span className="break-all">picassopaintindustries@gmail.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 self-center lg:self-auto">
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
