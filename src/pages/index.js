import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import BlogCard from '../components/cards/home-blog';
import ServiceCard from '../components/cards/home-service';

import Layout from '../components/layout';

import AccountIcon from '../images/icon_accountant.png';
import CourtIcon from '../images/icon_court.png';
import TaxIcon from '../images/icon_tax.png';

import HomeHero from '../components/hero/hero';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeBlogs {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              description
              date(formatString: "MMMM DD, YYYY")
              path
            }
            excerpt(pruneLength: 60)
            id
          }
        }
      }
    }
  `);

  return (
    <div className='home'>
      <SEO pageTitle='Home' />
      <Layout>
        <HomeHero />
        <div className='section service-section'>
          <div className='container'>
            <h2 className='section-title'>Our Services</h2>
            <h3 className='section-sub-title'>
              We are the best at our services
            </h3>
            <div className='service__card_container'>
              <ServiceCard
                icon={AccountIcon}
                title='Accounting'
                content={[
                  'Accounting Clean Up',
                  'Audit and Investor Ready financial statements',
                  'Secure online back up of important documentation',
                ]}
              />
              <ServiceCard
                icon={CourtIcon}
                title='Local Tax Compliance'
                content={[
                  'Accounting Clean Up',
                  'Audit and Investor Ready financial statements',
                  'Secure online back up of important documentation',
                ]}
              />
              <ServiceCard
                icon={TaxIcon}
                title='Income Tax Preparation'
                content={[
                  'Accounting Clean Up',
                  'Audit and Investor Ready financial statements',
                  'Secure online back up of important documentation',
                ]}
              />
            </div>
          </div>
        </div>

        <div className='section blog-section'>
          <div className='container'>
            <h2 className='section-title'>Our Blog</h2>
            <h3 className='section-sub-title'>Check out our latest blog</h3>
            <div className='blog__card_container'>
              {data.allMarkdownRemark.edges.map((item) => (
                <BlogCard
                  key={item.node.id}
                  image={
                    item.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  title={item.node.frontmatter.title}
                  date={item.node.frontmatter.date}
                  content={item.node.excerpt}
                  slug={item.node.frontmatter.path}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='cta-section container section text-center'>
          <h3 className='cta__text'>
            Are things like taxes & bookkeeping keeping you from running your
            business?
          </h3>
          <Link to='/contact' className='btn btn-cta'>
            Lets Talk!
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
