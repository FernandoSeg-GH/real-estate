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
                        src="images/pp.webp"
                        alt="user 01"
                      />
                    </div>
                    <h3 className="user__name">Pía Pasqualini</h3>
                    <p className="user__title">Inmobiliario <em>AICAT 11939</em></p>
                  </div>
                  <p className="user__description">
                    Magíster en Administración de Empresas (ADE). Título de Agente Inmobiliaria, licenciada AICAT n*11.939.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/mp.webp"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Marcelo Leopoldo Pasqualini</h3>
                    <p className="user__title">Arquitecto</p>
                  </div>
                  <p className="user__description">
                    Magíster en Economía Urbana. Posgrado en Real Estate, MBA para Directivos de PyMES.
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
