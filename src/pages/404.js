import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      noFoundImage: file(relativePath: { eq: "404-Error.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="notFound container">
        <Link className="notFound__link" to="/">
          <Img
            className="notFound__image"
            fluid={data.noFoundImage.childImageSharp.fluid}
          />
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
