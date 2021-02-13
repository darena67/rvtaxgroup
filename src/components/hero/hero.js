import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./home-hero.scss"


const HomeHero = ({heroQuote}) => {
  const data = useStaticQuery(graphql`
    query {

      backgroundImage: file(relativePath: { eq: "hero-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      HeroHeadshotImage: file(relativePath: { eq: "hero-headshot.png" }) {
        childImageSharp {
          fixed(width: 478 height: 571 quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      HeroQuoteImage: file(relativePath: { eq: "hero-quotes.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

    }
  `)
  return (
    <BackgroundImage
      className="homehero"
      fluid={data.backgroundImage.childImageSharp.fluid}
    >
      <div className="container">
        <div className="hero__image">
          <Img fixed={data.HeroHeadshotImage.childImageSharp.fixed} className="hero__image" alt="Dasha Nagal CPA/EA" />
        </div>

          <div className="hero__blockquote">
          <div
            className='hero__quote'
            dangerouslySetInnerHTML={{ __html: heroQuote }}
          ></div>
        </div>
        <h1 className="hero__text">
          Your taxes.
          <span className="text-highlight"> Our</span> problem!
        </h1>
        <Link to="/contact/" className="btn hero__btn">
          Get Started
        </Link>
      </div>
    </BackgroundImage>
  )
}

export default HomeHero
