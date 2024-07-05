import React from "react";
import { testimonial } from "../../../assets/assets";
import Testimonial_items from "./Testimonial_items";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section>
      <h5 className="text-[tomato] my-5 text-[15px]">Testimonial</h5>
      <div className="gap-[30px] con">
        <Swiper
          spaceBetween={20}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation // Add navigation buttons
          autoplay={{ delay: 9000, disableOnInteraction: false }} // Add autoplay
          loop={true} // Enable looping
          breakpoints={{
            // when window width is >= 0px (default)
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonial.map((item, index) => (
            <SwiperSlide key={index}>
              <Testimonial_items
                imgURL={item.imgURL}
                Name={item.Name}
                details={item.details}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
