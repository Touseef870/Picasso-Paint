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
    <section className="relative bg-white py-24 px-4 sm:px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Our Best Selling Paints Products</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Buy premium quality paint products for your interior and exterior at economical prices. Book your order now!
      </p>

      <div className="relative">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <FaChevronLeft size={14} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar px-4 sm:px-8 space-x-4 sm:space-x-6 snap-x snap-mandatory"
        >
          {productsGallon.map((product) => (
            <div
              key={product.id}
              onClick={() => handleClick(product.id)}
              className="snap-start flex-shrink-0 w-[48%] sm:w-[250px] p-4 rounded-xl bg-white text-center cursor-pointer transition-transform duration-300 ease-in-out transform"
            >
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[160px] sm:h-[220px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-[2px] rounded-lg">
                  <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <FaEye size={18} />
                    View Product
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-base sm:text-lg mt-3 text-gray-900">{product.name}</h3>
            </div>
          ))}
        </div>

        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition">
          <FaChevronRight size={14} />
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-black text-white py-2 px-5 rounded-md hover:bg-gray-900 transition shadow-md">View All</button>
      </div>
    </section>
  );
};

export default ProductSlider;
