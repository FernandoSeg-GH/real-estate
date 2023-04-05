import React from 'react'
import { MdOutlineMonetizationOn, MdOutlineLoyalty, MdOutlineRealEstateAgent, MdOutlineOtherHouses } from "react-icons/md";
import SectionTitle from "./global/section-title";
import FeaturedListing from "./featured-listing";
import PropertyListing from "./property-listing";

function Inmob() {
  return (
    <div className="wChoose section-padding section-bg">
    <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="wChoose__intro" style={{textAlign:'justify'}}>
            <SectionTitle title="Servicios Inmuebles" position="left" />
            <p className="fs-5">¿Qué te ofrecemos?</p>
            <p>
                Ofrecemos todos los servicios necesarios para que tus operaciones inmobiliarias sucedan de la forma más eficiente.
            </p>
            <p>
                Podemos asesorarte y guiarte a lo largo de todo el proceso, y ayudarte a elegir la opción que mejor se adapte a tus necesidades.
            </p>
            <p>
                Dando cumplimiento al <strong>Decreto 12/2010</strong> del 2 de febrero, somos agentes inmobiliarios matriculados por AICAT.
            </p>
            </div>
        </div>
        <div className="col-lg-8 col-md-6">
            <div className="wChoose__content">
            <div className="row">
                <div className="col-lg-6 mb-4">
                <div className="wChoose__content__item">
                    <div className="icon">
                    <MdOutlineMonetizationOn />
                    </div>
                    <h3>Venta</h3>
                    <p>
                        Pon en venta tu propiedad, te guiamos a lo largo de todo el proceso.
                    </p>
                </div>
                </div>
                <div className="col-lg-6 mb-4">
                <div className="wChoose__content__item">
                    <div className="icon">
                    <MdOutlineRealEstateAgent />
                    </div>
                    <h3>Alquiler</h3>
                    <p>
                        Consigue inquilinos fiables y solventes, gana tranquilidad.
                    </p>
                </div>
                </div>
                <div className="col-lg-6 mb-4">
                <div className="wChoose__content__item">
                    <div className="icon">
                    <MdOutlineLoyalty />
                    </div>
                    <h3>Tasaciones</h3>
                    <p>
                        Te ofrecemos una valoración real de tu inmueble según el mercado.
                    </p>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="wChoose__content__item">
                    <div className="icon">
                    <MdOutlineOtherHouses />
                    </div>
                    <h3>Home Staging</h3>
                    <p>
                        Logra vender o alquilar más rápido, siempre al mejor precio.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Inmob