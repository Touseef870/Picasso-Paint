import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaEye } from 'react-icons/fa';
import { productsGallon } from '../constant/products';

const ProductSlider = () => {
  const scrollRef = React.useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="relative bg-white py-24 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-center mb-2">Our Best Selling Paints Products</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Buy premium quality paint products for your interior and exterior at economical prices. Book your order now!
      </p>

      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Scrollable Container with Grid Rows */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth no-scrollbar"
        >
          <div className="flex gap-6 w-fit px-8">
            {/* Split products into groups of visible column size */}
            {Array.from({ length: Math.ceil(productsGallon.length / 2) }, (_, index) => {
              const group = productsGallon.slice(index * 2, index * 2 + 2); // 2 rows per group
              return (
                <div
                  key={index}
                  className="grid grid-rows-2 sm:grid-rows-2 sm:grid-cols-1 gap-6 w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  {group.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleClick(product.id)}
                      className="bg-white p-3 rounded-lg  transition-all cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-lg group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-[120px] sm:h-[140px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-[2px] rounded-lg">
                          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                            <FaEye size={16} />
                            View
                          </div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm mt-2 text-gray-800 text-center">{product.name}</h3>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900 transition">View All</button>
      </div>
    </section>
  );
};

export default ProductSlider;
