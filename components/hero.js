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
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <img src="images/cv1.webp" alt="hero1" />
              <div className="image-two" style={{display:'flex',flexWrap:'wrap',gap:'1rem',marginBottom:'2rem'}}>
                <img src="images/atr.webp" alt="hero2" />
                <img src="images/aicat.webp" alt="hero3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
