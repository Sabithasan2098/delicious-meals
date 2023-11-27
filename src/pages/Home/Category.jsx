import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

//images--
import slide1 from "../../../public/most-popular-1.avif";
import slide3 from "../../../public/most-popular-3.jpg";
import slide4 from "../../../public/most-popular-4.jpg";
import slide5 from "../../../public/most-popular-5.jpg";
import slide6 from "../../../public/most-popular-6.jpg";
import slide7 from "../../../public/most-popular-7.jpg";
import slide8 from "../../../public/most-popular-8.jpg";

const Category = () => {
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
