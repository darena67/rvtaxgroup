import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import HeroOther from "../components/heroOthers"
import Layout from "../components/layout"
import BlogIllustration from "../images/illustration/blog-illustration.svg"
import BlogCard from "../components/cards/home-blog"
import SEO from "../components/seo"

const ServicePage = () => {
  const data =useStaticQuery(graphql`
  query Myquery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`) ;
console.log(data)
  return (
    <div className="blog">
      <SEO pageTitle="Blog" />
      <Layout>
        <HeroOther
          title="blog"
          subtitle={[
            "Check out our latest blogs",
          ]}
          image={BlogIllustration}
        />
        {/* {data.allMarkdownRemark.edges.map(item=>(
          <Img fluid={item.node.frontmatter.featuredImage.childImageSharp.fluid} />
        ))} */}
         {/* <Img fluid={data.} /> */}
        <div className="container section">
        <div className="blog__card_container">
        {data.allMarkdownRemark.edges.map(item=>(
          <BlogCard
                image={item.node.frontmatter.featuredImage.childImageSharp.fluid}
                title={item.node.frontmatter.title}
                date={item.node.frontmatter.date}
                content={item.node.frontmatter.description}
              />
        ))}
              
            </div>
        </div>
        <div className="cta-section container text-center">
          <h3 className="cta__text ">Need something else?</h3>
          <Link to="/contact" className="btn btn-cta">
            Lets Talk!
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default ServicePage
