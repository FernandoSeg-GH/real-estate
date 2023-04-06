import { useRouter } from "next/router";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const router = useRouter();
  const [key, setKey] = useState("rent");
  const [query, setQuery] = useState("");
  const querySearchHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const submitHandlerRent = (e) => {
    e.preventDefault();
    router.push(`/search-rent?query=${query}`);
  };
  const submitHandlerSale = (e) => {
    e.preventDefault();
    router.push(`/search-sale?query=${query}`);
  };

  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 px-4 px-lg-5 pb-5">
            <h1 className="display-6">Arquitectura &amp; Inmobiliaria</h1>
            <h3 className="fs-6" style={{ fontWeight: '300', textAlign: 'justify' }}>
              Contamos con +30 años de trayectoria en arquitectura, construcción y reformas.
              Tenemos vasta experiencia en el rubro inmobiliario y asesoramos compras desde el exterior.
              Combinamos nuestros conocimientos en arquitecura y Real Estate para ofrecerte soluciones óptimas en tus inversiones inmobiliarias.
            </h3>
          </div>
          <div className="col-lg-6 p-0">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                slidesPerView: 1
              }}
            >
              <SwiperSlide>
                <div className="testimonial__hr">
                  <img src="/images/hero/hr1.webp" alt='hr1'></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__hr">
                  <img src="/images/hero/hr2.webp" alt='hr2'></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__hr">
                  <img src="/images/hero/hr3.webp" alt='hr3'></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__hr">
                  <img src="/images/hero/hr4.webp" alt='hr4'></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__hr">
                  <img src="/images/hero/hr5.webp" alt='hr5'></img>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
