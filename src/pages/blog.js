import React from 'react';
import { Link, graphql } from 'gatsby';
import HeroOther from '../components/heroOthers';
import Layout from '../components/layout';
import BlogIllustration from '../images/illustration/blog-illustration.svg';
import BlogCard from '../components/cards/home-blog';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  return (
    <div className='blog'>
      <SEO pageTitle='Blog' />
      <Layout>
        <HeroOther
          title='blog'
          image={BlogIllustration}
          intro={data.pagesYaml.intro}
        />

        <div className='container section'>
          <div className='blog__card_container'>
            {data.allMarkdownRemark.edges.map((item) => (
              <BlogCard
                key={item.node.id}
                image={item.node.frontmatter.thumbnail?.childImageSharp?.fluid}
                title={item.node.frontmatter.title}
                date={item.node.frontmatter.date}
                content={item.node.excerpt}
                slug={item.node.fields.slug}
              />
            ))}
          </div>
        </div>
        <div className='cta-section container text-center'>
          <h3 className='cta__text '>Need something else?</h3>
          <Link to='/contact' className='btn btn-cta'>
            Lets Talk!
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage {
    pagesYaml(page: {eq: "blog"}) {
      intro
    }
    allMarkdownRemark {
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
          }
          fields {
            slug
          }
          excerpt(pruneLength: 60)
          id
        }
      }
    }
  }
`;
