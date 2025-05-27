'use client';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Product1 from '../assets/product1.png';
import Product2 from '../assets/product2.png';
import Product3 from '../assets/product3.png';
import Product4 from '../assets/product4.png';
import Product5 from '../assets/product5.png';
import Product6 from '../assets/product6.png';



const products = [
  {
    id: 1,
    name: 'Brighto Stain Free',
    price: 'Rs.12,000.00',
    image: Product1,
  },
  {
    id: 2,
    name: 'Plastic Emulsion',
    price: 'Rs.12,250.00',
    image: Product2,
  },
  {
    id: 3,
    name: 'Quick Wash Emulsion',
    price: 'Rs.12,500.00',
    image: Product3,
  },
  {
    id: 4,
    name: 'Super Emulsion',
    price: 'Rs.15,000.00',
    image: Product4,
  },
  {
    id: 5,
    name: 'Wall Emulsion',
    price: 'Rs.16,000.00',
    image: Product5,
  },
  {
    id: 6,
    name: 'Wall Emulsion',
    price: 'Rs.16,000.00',
    image: Product6,
  },
  {
    id: 7,
    name: 'Wall Emulsion',
    price: 'Rs.16,000.00',
    image: Product4,
  },
  {
    id: 8,
    name: 'Wall Emulsion',
    price: 'Rs.16,000.00',
    image: Product3,
  },
  {
    id: 9,
    name: 'Wall Emulsion',
    price: 'Rs.16,000.00',
    image: Product2,
  },
  {
    id: 10,
    name: 'Wall Emulsion',
    price: 'Rs.16,000.00',
    image: Product1,
  },
];

const ProductSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#F0EEE8]  py-24 px-4 sm:px-4">
      <h2 className="text-3xl font-bold text-center mb-2 ">Our Best Selling Paints Products</h2>
      <p className="text-center text-gray-600 mb-6">
        Buy premium quality paint products for your interior and exterior at economical prices. Book your order now!
      </p>

      {/* Scroll Container */}
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full "
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scroll-smooth no-scrollbar px-8 "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className=" bg-[#F0EEE8] flex-shrink-0 w-[250px]   transition duration-300 text-center p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[180px] object-contain mb-3"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-blue-600 font-medium">{product.price}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* View All Button */}
      <div className="text-right mt-6 px-8">
        <button className="bg-black text-white py-2 px-5 rounded hover:bg-gray-800 transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;
