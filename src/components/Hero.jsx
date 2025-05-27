import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/banner1.jpg';
import img2 from '../assets/banner2.jpg';
import img3 from '../assets/banner3.webp';
import img4 from '../assets/banner4.jpg';

const ImageCarousel = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1} // Show only one image at a time
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {[img1, img2, img3, img4].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[70vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
