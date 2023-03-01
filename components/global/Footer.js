import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { GoLocation } from "react-icons/go";
import { MAILCHAIMP } from "../../config";
import { useEffect, useState } from "react";


const HubspotForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/shell.js";
    script.async = true;
    script.onload = () => setLoading(false);
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <script
            charset="utf-8"
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-eu1.hsforms.net/forms/embed/v2.js"
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              hbspt.forms.create({
                region: "eu1",
                portalId: "27004540",
                formId: "d3eebe7c-97a6-48ca-9c26-5a68604f291f",
                target: "#hubspotForm",
                onFormSubmit: function($form) {
                  console.log("Form submitted");
                }
              });
            `,
            }}
          />
          <div id="hubspotForm"></div>

          <style>{``}</style>
        </div>
      )}
    </div>
  );
};


const Footer = () => {
  return (
    <div className="footer footer-padding-t">
      <div className="container">
        <div className="row">
          <div className="footer__top mx-auto">
            <h3>Más de 15 años en el sector inmobiliario</h3>
            <p className="text-white">Contáctenos para cotizar su inmueble o para conocer oportunidades en el mercado.</p>
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
  )
}

export default Footer

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
