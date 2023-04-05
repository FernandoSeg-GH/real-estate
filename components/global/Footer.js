import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import HubspotForm from "../HubspotForm";

const Footer = () => {
  return (
    <>
      <div id="hub" className="py-1">
        <div className="hubspotFormWrapper">
          <h3>Contáctanos</h3>
          <p>Cotiza tu inmueble o conoce nuevas oportunidades de mercado.</p>
          <div>
            <HubspotForm />
            <div className="customBlock" />
          </div>
        </div>
      </div>
      <div className="footer footer-padding-t">
        <div className="container">
          <div className="row footer-padding">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer__logo">
                <h1>CanVai S.L.</h1>
                <p style={{ color: 'white' }}>NIF B72506785</p>
                <img src='/favicon.ico' width='50' height='50' style={{ borderRadius: '0.5rem' }}></img>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer__content">
                <h3>Ubicación</h3>
                <ul>
                  <li>
                    Av. Diagonal & c/ de Bilbao, Barcelona 08018
                  </li>
                  <li>
                    <GoLocation />{" "}
                    <a
                      href="https://www.google.com/maps/place/Avinguda+Diagonal+%26+Carrer+de+Bilbao,+08018+Barcelona/@41.4061994,2.1968254,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a33be71c8e59:0x49f36ffffe315c87!8m2!3d41.4061994!4d2.1990194"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Google Maps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer__social">
                <h3>Redes Sociales</h3>
                <p>¡Síguenos para obtener novedades!</p>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/canvaisl/"
                      target="_blank"
                      aria-label="Facebook"
                      className="icon"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/canvaisl/"
                      target="_blank"
                      aria-label="Instagram"
                      className="icon"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="LinkedIn"
                      target="_blank"
                      href="https://www.linkedin.com/company/can-vai-sl/"
                      className="icon"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="map" id="ieatmaps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.521384263392!2d2.1968253511289704!3d41.40619937916071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a33be71c8e59%3A0x49f36ffffe315c87!2sAvinguda%20Diagonal%20%26%20C%2F%20de%20Bilbao%2C%2008018%20Barcelona!5e0!3m2!1ses!2ses!4v1680690235430!5m2!1ses!2ses"
            allowfullscreen=""
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div className="container">
          <div className="footer__copyright m-20px-t m-20px-b">
            <div className="row">
              <div className="col-12">
                <p className="m-0 text-center">&copy; 2023 All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .hubspotFormWrapper {
            position: relative;
            max-width: 600px;
            margin: 0 auto;
            padding: 0 1rem;
            margin-top: 5rem;
            margin-bottom: 3rem;

          }
          .customBlock {
            height: 65px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            background: #edeae5;
            z-index: 1;
          }

          @media (max-width: 356px) {
            .customBlock {
              height: 80px;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default Footer
