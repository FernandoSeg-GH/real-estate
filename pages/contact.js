import React from "react";
import Layout from "../components/global/layout";
import InnerPageLayout from "../components/inner-page-layout";
import { CONTACTFROM } from "../config";

const Contact = () => {
  return (
    <Layout>
      <InnerPageLayout title="Contáctanos" />
      <div className="contact">
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="contact__info">
                  <h4>Zona</h4>
                  <p>Poblenou, 08018 Barcelona, España</p>
                </div>
                <div className="contact__info">
                  <h4>Correo</h4>
                  <p>info@can-vai.com</p>
                </div>
                <div className="contact__info">
                  <h4>Phone</h4>
                  <a href="tel:+880123456789">+34 624292516</a>
                  <br />
                  <a href="tel:+880123456789">+34 623338257</a>
                </div>
              </div>
              <div className="col-lg-8">
                <form id="contact-form" method="post" action={CONTACTFROM}>
                  <div className="d-lg-flex gap-lg-3 input">
                    <div className="w-100">
                      <label htmlFor="name">Nombre</label>
                      <input
                        name="name"
                        id="name"
                        required
                        type="text"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="w-100">
                      <label htmlFor="email">Correo</label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="Tu email"
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="subject">Asunto</label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      type="text"
                      placeholder="Tu consulta"
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      type="text"
                      rows="3"
                      placeholder="e.g reformas, inmuebles, ventas, etc."
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="button-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
