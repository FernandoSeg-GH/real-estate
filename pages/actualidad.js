import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from "../components/global/layout";
import SectionTitle from "../components/global/section-title";
import blogs from "../public/json/actualidad.json";

function Actualidad({ blogs }) {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    setBlog(blogs);
  }, []);

  return (
    <Layout title='Can Vai Blog'>
      <div className="testimonial section-padding section-bg">
        <div className="container">
          <SectionTitle title="Actualidad" position='left' />
          <p className="fs-6">Lo último del mercado inmobiliario. Infórmate para estar al tanto de las novedades de Real Estate.</p>
          <div className="row">
            {blog && blogs.map((item, index) => (
              <div className="col-md-6 col-sm-12 mb-4 d-flex align-self-stretch" key={index}>
                <div className="testimonial__item d-flex flex-column">
                  <Link
                    href={`/actualidad/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[¿?]/g, '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="d-flex flex-column gap-3"
                  >
                    <div className="card">
                      <img
                        className="img-fluid rounded"
                        src={item.image}
                        alt={`user ${index + 1}`}
                      />
                    </div>
                    <div className='d-flex flex-column gap-1 nav-link'>
                      <strong className="fs-4">{item.title}</strong>
                      <p className="fs-6">{item.description}</p>
                    </div>
                  </Link>
                  <Link
                    href={`/actualidad/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[¿?]/g, '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '')}`}
                    className='mt-auto'
                  > Read More </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogs,
    },
  };
}

export default Actualidad;
