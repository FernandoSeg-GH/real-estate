import { Router } from "next/router";
import { SSRProvider } from "react-bootstrap";
import 'react-loading-skeleton/dist/skeleton.css'
import "../assets/sass/main.scss";
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    console.log("Loading...");
  });
  return <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    <SSRProvider>
      <Component {...pageProps} />;
    </SSRProvider>
  </>
}
