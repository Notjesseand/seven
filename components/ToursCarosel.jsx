import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// import image1 from "@/public/tour1.jpeg";
import { ToursAds } from "./styles";

const ToursCarosel = () => {
  return (
    <div className="">
      <Swiper
        breakpoints={{
          // when window width is >= 768px
          308: {
            slidesPerView: 1,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper px-8"
      >
        {ToursAds.map((items, index) => {
          return (
            <SwiperSlide
              key={index}
              className="swiper-slide rounded-md flex items-center justify-center mt-8"
            >
              <img
                src={items.image}
                alt=""
                className="h-[530px] md:h-96 w-full max-w-full max-h-full object-cover object-center rounded px-5"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ToursCarosel;
