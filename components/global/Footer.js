import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { GoLocation } from "react-icons/go";
import { MAILCHAIMP } from "../../config";

const HubspotForm = () => {
  return (
    <div>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hsforms.net/forms/embed/v2.js"
      ></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          hbspt.forms.create({
            region: "na1",
            portalId: "23634215",
            formId: "ed507b14-41b6-4b6e-b172-4ad7b096b4bd",
            target: "#hubspotForm",
            onFormSubmit: function($form) {
              console.log("Form submitted");
            }
          });
        `,
        }}
      />
      <div id="hubspotForm"></div>
      <style>{`
        .hs-form-field {
          display: flex;
          flex-direction: column;
          max-width: 700px;
          margin: 0 auto;
          background: yellow;
        }
        .hs-input {
          display: flex;
          flex-direction: column;
          max-width: 700px;
          margin: 0 auto;
          background: yellow!important;
        }
        .hs-form-field label {
          font-size: 14px;
          font-weight: 500;
          color: #000;

        }
        .hs-form-field input {
          border: 1px solid #000;
          border-radius: 5px;
          padding: 10px;
          margin-top: 5px;
        }
        .hs-form-field input:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

//SUBSCRIBE FORM
// function SubscribeForm({ status, message, onValidated }) {
//   let email;
//   const submit = (e) => {
//     e.preventDefault();
//     onValidated({
//       EMAIL: email.value,
//     });
//   };

//   return (
//     <form>
//       <div className="footer__subscribe">
//         <input
//           ref={(node) => (email = node)}
//           type="email"
//           required
//           placeholder="Correo electrónico"
//         />
//         <button className="button-primary" type="submit" onClick={submit}>
//           Suscribirse
//         </button>
//       </div>

//       <div className="message col m-10px-t">
//         {status === "sending" && (
//           <div className=" alert alert-warning">sending...</div>
//         )}
//         {status === "error" && (
//           <div
//             className="alert alert-danger"
//             dangerouslySetInnerHTML={{ __html: message }}
//           />
//         )}
//       </div>
//       {status === "success" && (
//         <div
//           className="alert alert-success"
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//     </form>
//   );
// }

const Footer = () => {
  return (
    <div className="footer footer-padding-t">
      <div className="container">
        <div className="row">
          <div className="footer__top mx-auto">
            <h3>Más de 15 años en el sector inmobiliario</h3>
            <p>Contáctenos para cotizar su inmueble o para conocer oportunidades en el mercado.</p>
            {/* <MailchimpSubscribe
              url={MAILCHAIMP}
              render={({ subscribe, status, message }) => (
                <SubscribeForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            /> */}
            <HubspotForm />
          </div>
        </div>
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
    </div>
  );
};

export default Footer;
