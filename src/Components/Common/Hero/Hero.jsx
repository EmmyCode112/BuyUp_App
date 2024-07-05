import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Hero.css'
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

const swiperStyles = {
  container: {
    width: "100%",
    margin: "0",
  },
  slide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    height: "100%",
    width: "100%",
    margin: "auto",
  },
};


const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-between hero">
      <div className="h-left overflow-hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
        >
          <SwiperSlide style={swiperStyles.slide}>
            <div className="swipe-con first">
              <h1 className="text-[45px] max-sm:text-[25px]">Designed for business</h1>
              <p className="h-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusantium asperiores magnam. Corrupti cum autem odio quam libero? Et, aspernatur?</p>
              <div className="h-btn">
                <button>Check Out</button>
                <button>About Us</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={swiperStyles.slide}>
            <div className="swipe-con first">
              <h1 className="text-[45px] max-sm:text-[25px]">Visit product page</h1>
              <p className="h-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusantium asperiores magnam. Corrupti cum autem odio quam libero? Et, aspernatur?</p>
              <div className="h-btn">
                <button>Buy Now</button>
                <button>Rent Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={swiperStyles.slide}>
            <div className="swipe-con first">
              <h1 className="text-[45px] max-sm:text-[25px]">Lovely team</h1>
              <p className="h-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusantium asperiores magnam. Corrupti cum autem odio quam libero? Et, aspernatur?</p>
              <div className="h-btn">
                <button>Contact Us</button>
                <button>Join Team</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </section>
  );
};

export default Hero
