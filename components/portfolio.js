import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <div className="testimonial section-padding section-bg">
      <div className="container">
        <SectionTitle title="Portfolio" />
        <div className="rwo">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center'}}>
                    <img src="/images/portfolio/1.webp" width='600' height='450' alt='pf01' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center'}}>
                    <img src="/images/portfolio/2.webp" width='600' height='450' alt='pf02' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center'}}>
                    <img src="/images/portfolio/3.webp" width='600' height='450' alt='pf03' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center'}}>
                    <img src="/images/portfolio/4.webp" width='600' height='450' alt='pf04' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center'}}>
                    <img src="/images/portfolio/5.webp" width='600' height='450' alt='pf05' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center'}}>
                    <img src="/images/portfolio/6.webp" width='600' height='450' alt='pf06' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center'}}>
                    <img src="/images/portfolio/7.webp" width='600' height='450' alt='pf07' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center'}}>
                    <img src="/images/portfolio/8.webp" width='600' height='450' alt='pf08' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
