import React from 'react';
import Layout from "../components/global/layout";
import Inmob from "../components/inmob";
import Partners from "../components/partners"
import Portfolio2 from "../components/portfolio2"

function Inmuebles() {
  return (
    <Layout title='Can Vai Inmuebles'>
        <Inmob />
        <Partners />
        <Portfolio2 />
    </Layout>
  )
}

export default Inmuebles