import React from 'react';
import Logo from '../assets/Log.png';


const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Logo & About */}
        <div className="space-y-12">
          <img src={Logo} alt="Picasso Logo" className="w-72 h-24" />
          <h3 className="text-lg font-semibold py-1 ">ABOUT OUR COMPANY</h3>
          <p className="text-sm leading-relaxed text-gray-700  ">
          The standard packages was established during 1984 as a offset tin printing and packaging manufacturing industry. Since then it has been engaged in the printing of tin plates and tin making business for large number of local and international customers example Paints, Ghee, chew tobacco manufacturing industries etc. 
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-6 text-sm text-gray-700">
            {['Home', 'About Us', 'Services', 'Gallery', 'Products', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-gray-700">
            Have questions, comments or just want to say hello:
          </p>
          <div className="text-sm text-gray-700 space-y-8">
            <p>📧 picassopaintindustries@gmail.com</p>
            <p>📞 0331-PICASSO (7422776)</p>
            <p>📞 0323-PICASSO (7422776)</p>
            <p>📍 D-16, Manghopir Road, Site Area, Karachi, Pakistan</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t pt-5 text-center text-sm text-gray-500">
        © 2023 All rights reserved. Designed by Picasso Paint Developers
      </div>
    </footer>
  );
};

export default Footer;
