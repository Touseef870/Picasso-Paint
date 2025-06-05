import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { colorPalettes } from "../constant/colors.js";

const ColorPalette = () => {
  const [selected, setSelected] = useState('KENT');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-down">
          Brighto Paints Color Palette
        </h2>

        {/* Tabs */}
        <div
          className="flex justify-center gap-6 mb-8 text-lg font-semibold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {['KENT', 'TOPLAC', 'EVERNEW'].map((type) => (
            <button
              key={type}
              onClick={() => setSelected(type)}
              className={`pb-1 border-b-2 transition-all duration-300 ${
                selected === type ? 'border-black text-black' : 'border-transparent text-gray-500'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Color Dots */}
        <div
          className="flex flex-wrap justify-center gap-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {colorPalettes[selected].map((color, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div
                className="w-[90px] h-[90px] rounded-full transition duration-300 shadow-sm"
                style={{ backgroundColor: color }}
              ></div>
              <p className="mt-2 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Colors
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorPalette;
