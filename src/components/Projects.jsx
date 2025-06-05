import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { portfolioData } from "../constant/porftfolio";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // duration in ms, customize as needed
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4" data-aos="fade-down">
        <div>
          <h2 className="text-2xl font-semibold">Our Portfolio</h2>
          <p className="text-sm text-gray-500 mt-1 max-w-md">
            Lorem ipsum dolor sit amet elit. Eum nihil et molestiae ea perferendis.
            Voluptas dolorum maxime molestiae perferendis.
          </p>
        </div>
        <button className="border px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition" data-aos="fade-up">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`relative group h-64 overflow-hidden rounded-xl shadow-md ${item.span ? 'md:col-span-2' : ''}`}
            data-aos="zoom-in" // animation applied here
            data-aos-delay={index * 100} // staggered delay for nice effect
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
              <button className="mt-2 text-sm underline">{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
