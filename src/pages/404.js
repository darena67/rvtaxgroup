import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`{
  noFoundImage: file(relativePath: {eq: "404-Error.png"}) {
    childImageSharp {
      gatsbyImageData(width: 700, layout: CONSTRAINED)
    }
  }
}
`);

  return (
    <Layout>
      <div className="notFound container">
        <Link className="notFound__link" to="/">
          <GatsbyImage
            image={data.noFoundImage.childImageSharp.gatsbyImageData}
            className="notFound__image" />
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
