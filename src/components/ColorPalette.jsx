import React, { useState } from 'react';

const colorPalettes = {
    KENT: [
      '#F8F8E5', '#FDF1A9', '#FAD6D6', '#F5EAD7', '#FFFFE0', '#FFF5DC',
      '#E9F7EF', '#F6DDCC', '#EAECEE' // added
    ],
    TOPLAC: [
      '#D9E4DD', '#CDE7B0', '#F1F5A8', '#FFD8BE', '#E5C1CD', '#C7CEEA',
      '#D1CFE2', '#F6CED8', '#FFE9D6' // added
    ],
    EVERNEW: [
      '#FFE5B4', '#F2BAC9', '#C5D8A4', '#A9CCE3', '#FAD9D6', '#EAD2AC',
      '#D7E4F2', '#F9E2AE', '#E0C9A6' // added
    ],
  };
  

const ColorPalette = () => {
  const [selected, setSelected] = useState('KENT');

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Brighto Paints Color Palette</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8 text-lg font-semibold">
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
        <div className="flex flex-wrap justify-center gap-6">
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
