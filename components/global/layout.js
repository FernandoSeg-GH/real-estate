import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* <meta httpEquiv="Cache-Control" content="max-age=31536000" /> */}
      </Head>

      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Can-Vai Propiedades",
  description: "Más de 30 años de trayectoria en el rubro de la construcción, arquitectura y reformas",
  keywords: "real estate, inmobiliaria, propiedades, alquiler, venta, construcción, arquitectura, reformas, can-vai, canvai, canvai propiedades, can-vai propiedades, canvai propiedades, compra venta propiedades, compra venta inmuebles, compra venta departamentos, compra venta casas, compra venta terrenos, compra venta locales comerciales, compra venta oficinas, compra venta galpones, inmobiliaria barcelonaa,",
};

