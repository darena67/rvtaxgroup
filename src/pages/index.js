import React from "react"
import { Link } from "gatsby"
import BlogCard from "../components/cards/home-blog"
import ServiceCard from "../components/cards/home-service"

import Layout from "../components/layout"

import AccountIcon from "../images/icon_accountant.png"
import CourtIcon from "../images/icon_court.png"
import TaxIcon from "../images/icon_tax.png"

import BlogImage1 from "../images/blog-1.jpg"
import BlogImage2 from "../images/blog-2.png"
import BlogImage3 from "../images/blog-3.png"
import HomeHero from "../components/hero/hero"
import SEO from "../components/seo"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     backgroundImage: file(relativePath: { eq: "blog-1.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  
  return (
    <div className="home">
      <SEO pageTitle="Home" />
      <Layout>
        <HomeHero />
        <div className="section service-section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <h3 className="section-sub-title">
              We are the best at our services
            </h3>
            <div className="service__card_container">
              <ServiceCard
                icon={AccountIcon}
                title="Accounting"
                content={[
                  "Accounting Clean Up",
                  "Audit and Investor Ready financial statements",
                  "Secure online back up of important documentation",
                ]}
              />
              <ServiceCard
                icon={CourtIcon}
                title="Local Tax Compliance"
                content={[
                  "Accounting Clean Up",
                  "Audit and Investor Ready financial statements",
                  "Secure online back up of important documentation",
                ]}
              />
              <ServiceCard
                icon={TaxIcon}
                title="Income Tax Preparation"
                content={[
                  "Accounting Clean Up",
                  "Audit and Investor Ready financial statements",
                  "Secure online back up of important documentation",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="section blog-section">
          <div className="container">
            <h2 className="section-title">Our Blog</h2>
            <h3 className="section-sub-title">Check out our latest blog</h3>
            <div className="blog__card_container">
              <BlogCard
                image={BlogImage1}
                title="Glass Giveaway Smoke Sesh"
                date="October 5th, 2020"
                content="Med Lounge was so kind to send me the customized bong with my Stoner Mom logo used in today’s video. Their online glass shop is a great ..."
              />
              <BlogCard
                image={BlogImage2}
                title="Oregon Cannabis: Streamlined Licensing"
                date="October 5th, 2020"
                content="Med Lounge was so kind to send me the customized bong with my Stoner Mom logo used in today’s video. Their online glass shop is a great ..."
              />
              <BlogCard
                image={BlogImage3}
                title="Pot Brownie: Edge High"
                date="October 5th, 2020"
                content="Med Lounge was so kind to send me the customized bong with my Stoner Mom logo used in today’s video. Their online glass shop is a great ..."
              />
            </div>
          </div>
        </div>
        <div className="cta-section container section text-center">
          <h3 className="cta__text">
            Are things like taxes & bookkeeping keeping you from running your
            business?
          </h3>
          <Link to="/contact" className="btn btn-cta">
            Lets Talk!
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
