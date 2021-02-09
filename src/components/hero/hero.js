import React from "react"
import HeroImage from "../../images/hero-headshot2.png"
import HeroQuotes from "../../images/hero-quotes2.png"

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
    }
  `)
  return (
    <BackgroundImage
      className="homehero"
      fluid={data.backgroundImage.childImageSharp.fluid}
    >
      <div className="container">
        <div className="hero__image">
          <img src={HeroImage} alt="Hero" />
        </div>

        <div className="hero__blockquote">
          <img src={HeroQuotes} alt="double quote" className="hero__doublequote" />
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
