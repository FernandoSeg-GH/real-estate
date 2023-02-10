import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="testimonial section-padding section-bg">
      <div className="container">
        <SectionTitle title="Nosotros" />
        <div className="rwo">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                }
              }}
            >
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/pp.jpg"
                        alt="user 01"
                      />
                    </div>
                    <h3 className="user__name">Pía Pasqualini</h3>
                    <p className="user__title">Inmobiliario <em>AICAT 11939</em></p>
                  </div>
                  <p className="user__description">
                    description
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/mp.jpg"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Marcelo Leopoldo Pasqualini</h3>
                    <p className="user__title">Arquitecto</p>
                  </div>
                  <p className="user__description">
                    description
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/mp.jpg"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Empleado</h3>
                    <p className="user__title">Ocupación</p>
                  </div>
                  <p className="user__description">
                    description
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
