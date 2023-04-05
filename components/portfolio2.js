import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio2 = () => {
  return (
    <div className="testimonial section-padding section-bg">
      <div className="container">
        <SectionTitle title="Propiedad Destacada" />
        <p className="text-center mb-4 pb-4">Estupendo 3 dormitorios + 2 baños en Poblenou ¡Consúltanos!</p>
        <div className="rwo">
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
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf01.webp" alt='pf01' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf02.webp" alt='pf02' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf03.webp" alt='pf03' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf04.webp" alt='pf04' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf05.webp" alt='pf05' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf06.webp" alt='pf06' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf07.webp" alt='pf07' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf08.webp" alt='pf08' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf09.webp" alt='pf09' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/portfolio2/pf10.webp" alt='pf10' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
