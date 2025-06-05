import React, { useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from '../assets/hero1.avif';
import img2 from '../assets/hero2.jpg';
import img3 from '../assets/hero3.jpg';
import img4 from '../assets/product2.png';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // once:true = animation runs once on scroll
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-pink-50 px-4 py-8 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Content First Always */}
          <div
            className="space-y-6 lg:space-y-8 order-1 lg:order-1"
            data-aos="fade-right"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-teal-50 text-black px-4 py-2 rounded-full text-sm font-medium"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Sparkles className="w-4 h-4" />
              Premium Art-Grade Paints
            </div>

            {/* Main Heading */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Picasso Paint
                <br />
                <span className="text-gray-900">Vibrant Shades &</span>
                <br />
                <span className="relative">
                  Timeless Quality
                  You Trust
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Discover a bold spectrum of colors designed for professionals and creators. Picasso Paint delivers
              eco-friendly, richly pigmented solutions for every artistic surface.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Shop Premium Colors
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors">
                Explore Collections
              </button>
            </div>
          </div>

          {/* Images Second Always */}
          <div
            className="order-2 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Top Left Image */}
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={img1}
                  alt="Luxury skincare products"
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Top Right Image */}
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={img2}
                  alt="Organic skincare collection"
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  Cruelty Free
                </div>
              </div>

              {/* Bottom Left Image */}
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={img3}
                  alt="Vegan cosmetic products"
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  Vegan
                </div>
              </div>

              {/* Bottom Right Image */}
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={img4}
                  alt="Professional makeup tools"
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
