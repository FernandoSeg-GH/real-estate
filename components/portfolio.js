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
                  slidesPerView: 4,
                  spaceBetween: 10,
                }
              }}
            >
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center',padding:'0.5rem'}}>
                    <img src="/images/portfolio/1.webp" width='500' height='250' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center',padding:'0.5rem'}}>
                    <img src="/images/portfolio/2.webp" width='500' height='250' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center',padding:'0.5rem'}}>
                    <img src="/images/portfolio/3.webp" width='500' height='250' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center',padding:'0.5rem'}}>
                    <img src="/images/portfolio/4.webp" width='500' height='250' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center',padding:'0.5rem'}}>
                    <img src="/images/portfolio/5.webp" width='500' height='250' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center',padding:'0.5rem'}}>
                    <img src="/images/portfolio/6.webp" width='500' height='250' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center',padding:'0.5rem'}}>
                    <img src="/images/portfolio/7.webp" width='500' height='250' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item" style={{display:'flex',justifyContent:'center',padding:'0.5rem'}}>
                    <img src="/images/portfolio/8.webp" width='500' height='250' style={{borderRadius:'0.2rem'}}></img>
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
