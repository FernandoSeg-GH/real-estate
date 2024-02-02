/* import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegComment,
  FaTwitter,
} from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import Layout from "../../components/global/layout";
import InnerPageLayout from "../../components/inner-page-layout";
import RelatedBlog from "../../components/related-blog";
import { API_URL } from "../../config";
import md from "markdown-it";
import moment from 'moment';
import 'moment-timezone';

const SingleBlog = ({ blogs, slug }) => {
  const blog = blogs?.filter((data) => data?.attributes.slug === slug);
  const { title, image, subtitle, description, date, user } =
    blog[0]?.attributes;

  return (
    <Layout title={title}>
      <InnerPageLayout title={title} />
      <div className="blog__item__info--wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-4 mx-auto">
              <div className="image">
                <img
                  src={`${API_URL}${image?.data?.attributes.url}`}
                  className="img-fluid"
                  alt={title}
                />
                <div className="image__user">
                  <p>
                    <AiOutlineUser /> {user.data.attributes.username}
                  </p>
                  <p>
                    <MdUpdate />
                    {moment(date).tz("America/New_York").format('MMMM Do YYYY')}
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="content__header">
                  <h1>{title}</h1>
                  <p className="subtitle">{subtitle}</p>
                </div>
                <div className="content__body">
                  <div
                    className="content__body__description"
                    dangerouslySetInnerHTML={{
                      __html: md().render(description),
                    }}
                  />
                </div>
                <div className="content__share">
                  <p>Share this article:</p>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href={`https://www.facebook.com/sharer.php?u=https%3A%2F%2Freala-next-js-zyly.vercel.app%2Fblog%2F${slug}%2F`}
                      >
                        <FaFacebookF /> Share
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?source=https%3A%2F%2Freala-next-js-zyly.vercel.app%2Fblog%2F${slug}%2F&text=${title}:https%3A%2F%2Freala-next-js-zyly.vercel.app%2Fblog%2F${slug}%2F`}
                      >
                        <FaTwitter /> Tweet
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Freala-next-js-zyly.vercel.app%2Fblog%2F${slug}%2F&title=${title}`}>
                        <FaLinkedinIn /> Share
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content__related">
                  <div className="row">
                    {blogs.slice(0, 2).map((blog) => (
                      <RelatedBlog blog={blog} key={blog.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/blogs?populate=*`);
  const allBlogs = await res.json();
  const blogs = allBlogs.data;

  return {
    props: {
      blogs,
      slug,
    },
  };
}
 */

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from "../../components/global/layout";
import blogs from "../../public/json/actualidad.json";

const BlogPost = ({ blog }) => {
  const { title, image, description, body } = blog;

  const [clientBody, setClientBody] = useState(null);
  useEffect(() => {
    setClientBody(body);
  }, []);

  return (
    <Layout title={`Can Vai Blog | ${title}`}>
      <div className='container col-lg-6'>
        <div className='my-4'>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
        <img className="img-fluid rounded" src={image} alt={title} style={{ objectFit: 'cover' }} />
        <div className='my-4 py-2' style={{ whiteSpace: 'pre-line' }}>
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  className="img-fluid"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ),
            }}
          >{clientBody}</ReactMarkdown>
        </div>
        <div className='testimonial__item mb-4'>
          <em>Recuerda que esto es una guía para que puedas prever con mayor certeza cuántos impuestos deberás pagar y así evitar sorpresas, pero deberás consultar con un especialista que conozca tu situación particular para reconfirmar los importes.</em>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.title.toLowerCase().replace(/\s+/g, '-').replace(/[¿?:]/g, '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '')},
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug.replace(/-/g, ' ');
  const blog = blogs.find((b) => b.title.toLowerCase().replace(/[¿?:]/g, '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '') === slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
}

export default BlogPost;
