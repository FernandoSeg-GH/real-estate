import React from 'react';
import Layout from "../components/global/layout";
import WhyChooseUs from "../components/why-choose-us";
import Portfolio from "../components/portfolio";
import Renders from "../components/renders";

function Reformas() {
  return (
    <Layout title='CanVai Reformas'>
        <WhyChooseUs />
        <Portfolio />
        <Renders />
    </Layout>
  )
}

export default Reformas