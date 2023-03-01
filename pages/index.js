import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/global/layout";
import Hero from "../components/hero";
import FeaturedListing from "../components/featured-listing";
import PropertyListing from "../components/property-listing";
import Testimonial from "../components/testimonial";
import { API_URL } from "../config";
import Hubspot from "./hubspot";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export default function Home({ property }) {
//   const { data } = property;  


const HubspotForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "//js.hsforms.net/forms/shell.js";
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

            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-eu1.hsforms.net/forms/embed/v2.js"
          ></script>
          <script


            type="text/javascript"

            region="eu1"

            dangerouslySetInnerHTML={{
              __html: `
              hbspt.forms.create({
                portalId: "27004540",
                formId: "d3eebe7c-97a6-48ca-9c26-5a68604f291f",
                onFormSubmit: function($form) {
                  console.log("Form submitted");
                }
              });
            `,
            }}
          />
          <div id="hubspotForm"></div>
        </div>
      )}
    </div>
  );
};

export default function Home({ }) {

  return (
    <Layout title='CanVai S.L.' >
      <Hero />
      {/* <FeaturedListing data={data} /> */}
      {/* <PropertyListing data={data} /> */}
      <Testimonial />
      <Hubspot />
      <HubspotForm /> 
      <p>Test</p>
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
