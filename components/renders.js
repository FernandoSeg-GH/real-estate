import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";

const Renders = () => {
  return (
    <div className="testimonial section-padding section-bg">
      <div className="container">
        <SectionTitle title="Renders" />
        <div className="rwo">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
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
                    <img src="/images/renders/ren1.webp" alt='ren1' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren2.webp" alt='ren2' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren3.webp" alt='ren3' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren4.webp" alt='ren4' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren5.webp" alt='ren5' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren6.webp" alt='ren6' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren7.webp" alt='ren7' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren8.webp" alt='ren8' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren9.webp" alt='ren9' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren10.webp" alt='ren10' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren11.webp" alt='ren11' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren12.webp" alt='ren12' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__pf">
                    <img src="/images/renders/ren13.webp" alt='ren13' style={{borderRadius:'0.2rem'}}></img>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renders;
