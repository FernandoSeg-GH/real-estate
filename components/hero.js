import { useRouter } from "next/router";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

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
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mt-4">
            <h1 className="display-5">Empecemos tu reforma.</h1>
            <h3 className="mb-5 fs-5">
              Contamos con más de 30 años de trayectoria en el rubro de la construcción, arquitectura y reformas.
            </h3>

            <h2 className="display-5">Trabajemos tus inmuebles.</h2>
            <h4 className="mb-5 fs-5">
              Te asesoramos a lo largo de todo el proceso de tasación, alquiler o venta para que obtengas los mayores beneficios.
            </h4>
            <img src='/images/aicat.png' width='350' height='150' className='mt-5' style={{border:'0.5rem solid white',borderRadius:'0.5rem'}}></img>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <img src="images/cv1.webp" alt="hero" />
              <div className="image-two">
                <img src="images/atr.webp" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
