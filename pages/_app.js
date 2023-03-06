import { Router } from "next/router";
import { SSRProvider } from "react-bootstrap";
import 'react-loading-skeleton/dist/skeleton.css'
import "../assets/sass/main.scss";
import Hubspot from '../components/global/hubspot';
import { HubspotProvider } from 'next-hubspot';

export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    console.log("Loading...");
  });
  return <>
    <SSRProvider>
      <HubspotProvider portalId="27004540">
        <Component {...pageProps} />;
        <Hubspot />
      </HubspotProvider>
    </SSRProvider>
  </>
}
