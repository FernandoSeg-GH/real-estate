import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import reformas from "../public/json/reformas.json";
import reformas2 from "../public/json/reformas2.json";

const Portfolio = () => {
  return (
    <div className="testimonial section-padding section-bg">
      <div className="container">
        <SectionTitle title="Portfolio" />
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                spaceBetween: 5
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 4
                },
              }}
            >
              {reformas.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial__pf">
                    <img src={image.url} alt={`pf${index + 1}`} style={{ borderRadius: '0.2rem' }} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-12 mt-5">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
                spaceBetween: 5
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 4
                },
              }}
            >
              {reformas2.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial__pf">
                    <img src={image.url} alt={`pf${index + 1}`} style={{ borderRadius: '0.2rem' }} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
