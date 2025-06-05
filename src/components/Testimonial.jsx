import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Costumer1 from "../assets/costumer1.png";
import Costumer2 from "../assets/costumer2.png";
import Costumer3 from "../assets/costumer3.png";
import Costumer4 from "../assets/costumer4.png";

const reviews = [
  {
    id: 1,
    name: "Ali Khan",
    image: Costumer1,
    stars: 5,
    content:
      "I have been using this product for over six months now, and I am truly impressed by the quality and performance. From the moment I placed the order, the customer service team was very responsive and helpful, answering all my questions promptly. The product itself exceeded my expectations in terms of durability and ease of use. It has made my daily tasks much easier and more enjoyable. I highly recommend this to anyone looking for a reliable and high-quality solution. I will definitely be purchasing from this brand again in the future!",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    image: Costumer2,
    stars: 4,
    content:
      "Overall, I had a very positive experience with this company. The delivery process was smooth and quick, arriving earlier than expected. The packaging was secure, and the product looked exactly as described on the website. The only minor downside was that the instructions could have been a bit clearer, but I managed to figure things out with a little trial and error. The product performs well and meets my needs perfectly. I’m satisfied with my purchase and would consider buying other products from this brand.",
  },
  {
    id: 3,
    name: "Zain Malik",
    image: Costumer3,
    stars: 5,
    content:
      "From start to finish, my experience with this company was exceptional. The attention to detail in the product design is evident, and the quality is unmatched. I especially appreciate how the company values customer feedback and continuously improves their offerings. The product works flawlessly, and the after-sales support was very helpful when I had a question about usage. This level of professionalism and dedication to customer satisfaction is rare these days. I wholeheartedly recommend this product to anyone looking for something dependable and well-crafted.",
  },
];

const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 sm:w-5 sm:h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.04 9.386c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.959z" />
  </svg>
);

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 bg-white">
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        data-aos="fade-up"
      >
        {/* Review Content */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800" data-aos="fade-down" data-aos-delay="100">
            Customer Review
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed" data-aos="fade-left" data-aos-delay="200">
            {reviews[activeIndex].content}
          </p>
          <div
            className="flex justify-center md:justify-start space-x-1 sm:space-x-2"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled={i < reviews[activeIndex].stars} />
            ))}
          </div>
          <p className="text-lg sm:text-xl font-bold text-gray-900 mt-2" data-aos="zoom-in" data-aos-delay="400">
            - {reviews[activeIndex].name}
          </p>
        </div>

        {/* Customer Image */}
        <div
          className="flex-shrink-0"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img
            src={reviews[activeIndex].image}
            alt={reviews[activeIndex].name}
            className="w-32 h-24 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>
      </div>

      {/* Horizontal Scroll Selector */}
      <div
        className="mt-10"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((review, idx) => (
            <button
              key={review.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex flex-col items-center cursor-pointer transition-transform ${
                idx === activeIndex ? "scale-110" : "scale-95 opacity-70"
              }`}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-indigo-400"
              />
              <p className="mt-2 text-sm font-semibold text-gray-700 text-center">
                {review.name}
              </p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < review.stars} />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
