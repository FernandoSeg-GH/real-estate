import Head from "next/head";
import Layout from "../components/global/layout";
import Hero from "../components/hero";
import FeaturedListing from "../components/featured-listing";
import PropertyListing from "../components/property-listing";
import Testimonial from "../components/testimonial";
import Partners from "../components/partners"
import { API_URL } from "../config";
import Hubspot from "../components/global/hubspot";
import { useEffect, useState } from "react";

// export default function Home({ property }) {
//   const { data } = property;  

export default function Home({ }) {

  return (
    <Layout title='Can Vai S.L.' >
      <Hero />
      <Partners />
      {/* <FeaturedListing data={data} /> */}
      {/* <PropertyListing data={data} /> */}
      <Testimonial />
      <Hubspot />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/properties?populate=*`);
//   const property = await res.json();
//   if (!property) {
//     console.log("No hay  nada")
//   } else {
//     console.log(property, "Mira acá")
//   }

//   return {
//     props: { property },
//   };
// }
