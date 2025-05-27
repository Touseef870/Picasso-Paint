import React from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

const BannerSection = () => {
  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* Banner 1 */}
        <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-40 md:h-52 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Banner 2 */}
        <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-40 md:h-52 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default BannerSection;
