import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import img1 from "../../../assets/Home-Slides/1.png";
import img2 from "../../../assets/Home-Slides/2.png";
import img3 from "../../../assets/Home-Slides/3.png";
import img4 from "../../../assets/Home-Slides/4.png";
import img5 from "../../../assets/Home-Slides/5.png";

const Slides = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        effect={"fade"}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="pb-8 md:pb-10">
            <img src={img} alt="idx" className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slides;
