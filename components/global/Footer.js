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
      <div className="hubspotFormWrapper">
          <h3>Contáctanos</h3>
          <p className="">Cotiza tu inmueble o conoce nuevas oportunidades de mercado.</p>
        <div className="">
          <HubspotForm  />
          <div className="customBlock"/>
        </div>
      </div>
      <div className="footer footer-padding-t">
        <div className="container">
          <div className="row footer-padding">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer__logo">
                <h1>CanVai S.L.</h1>
                <p style={{color:'white'}}>NIF B72506785</p>
                <img src='/favicon.ico' width='50' height='50' style={{borderRadius:'0.5rem'}}></img>
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
          <div className="footer__copyright m-20px-t m-20px-b">
            <div className="row">
              <div className="col-12">
                <p className="m-0 text-center">&copy; 2023 All right reserved.</p>
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
            height: 60px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            background: #fff;
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
