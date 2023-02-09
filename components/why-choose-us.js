import React from "react";
import SectionTitle from "./global/section-title";
import { MdOutlineHomeWork, MdOutlineKitchen, MdOutlineBuild, MdOutlineEngineering } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="wChoose section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="wChoose__intro">
              <SectionTitle title="Reformas" position="left" />
              <p className="fs-5">¿Qué servicios ofrecemos?</p>
              <p>
                Para ofrecer las mejores condiciones, garantías y transparencia, siendo franquiciados <strong>AQUÍ TU REFORMA</strong>, podemos ofrecerte tanto garantía de calidad por 2 años tras finalizadas las obras, como el cumplimiento de plazos por contrato.
              </p>
              <img
                src="images/cv3.png"
                alt="atr"
                className="img-fluid"

              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="wChoose__content">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdOutlineHomeWork />
                    </div>
                    <h3>Integrales</h3>
                    <p>
                      Realizamos reformas integrales, con tu inmueble completamente a estrenar! Esta es tu mejor opción si quieres dejar todo como nuevo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdOutlineKitchen />
                    </div>
                    <h3>Parciales</h3>
                    <p>
                      También hacemos reformas parciales. Baños, cocinas o cualquier aspecto puntual de tu inmueble que requiera una refacción.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdOutlineBuild />
                    </div>
                    <h3>Construcción</h3>
                    <p>
                      Realizamos construcciones y obra nueva. ¿Tienes un terreno y quieres construir la casa de tus sueños? ¡Juntos lo hacemos realidad!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdOutlineEngineering />
                    </div>
                    <h3>Experiencia</h3>
                    <p>
                      Tenemos más de 3 décadas ayudando tanto a familias a construir sus hogares, como a las empresas a alcanzar sus metas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
