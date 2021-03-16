import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import BlogCard from "../components/cards/home-blog";
import ServiceCard from "../components/cards/home-service";

import Layout from "../components/layout";

import HomeHero from "../components/hero/hero";
import SEO from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`query HomePage {
  pagesYaml(page: {eq: "home"}) {
    hero_quote
    home_services {
      name
      service {
        text
      }
      icon {
        childImageSharp {
          gatsbyImageData(width: 300 layout: CONSTRAINED)
        }
      }
    }
  }
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
    edges {
      node {
        frontmatter {
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
          title
          description
          date(formatString: "MMMM DD, YYYY")
          path
        }
        fields {
          slug
        }
        excerpt(pruneLength: 160)
        id
      }
    }
  }
}
`);

  return (
    <div className="home">
      <SEO
        pageTitle="Home"
        description="Affordable Go-To firm for Cannabis accounting needs. We take care of Bookkeeping, SUT & Excise taxes, and of course 280 mitigation! Call us today!!"
      />
      <Layout>
        <HomeHero heroQuote={data.pagesYaml.hero_quote} />
        <div className="section service-section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <h3 className="section-sub-title">
              We are the best at our services
            </h3>
            <div className="service__card_container">
              {data.pagesYaml.home_services.map((item, index) => (
                <ServiceCard
                  key={index}
                  icon={item.icon.childImageSharp.gatsbyImageData}
                  title={item.name}
                  content={item.service}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="section blog-section">
          <div className="container">
            <h2 className="section-title">Our Blog</h2>
            <h3 className="section-sub-title">Check out our latest blog</h3>
            <div className="blog__card_container">
              {data.allMarkdownRemark.edges.map((item) => (
                <BlogCard
                  key={item.node.id}
                  image={item.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                  title={item.node.frontmatter.title}
                  date={item.node.frontmatter.date}
                  content={item.node.excerpt}
                  slug={item.node.fields.slug}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="cta-section container section text-center">
          <h3 className="cta__text">
            Are things like taxes & bookkeeping keeping you from running your
            business?
          </h3>
          <Link to="/contact/" className="btn btn-cta">
            Lets Talk!
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
