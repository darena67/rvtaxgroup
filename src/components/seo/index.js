import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const SEO = ({ pageTitle, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      title={pageTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `twitter:card`,
          content: description,
        },
        {
          property: `twitter:title`,
          content: pageTitle,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `ahrefs-site-verification`,
          content: `cf4cad69574200f12519dfb441cd6a43caf53b587e44276f8f0dd1a8eb988306`,
        },
      ]}
    />
  );
};

export default SEO;
