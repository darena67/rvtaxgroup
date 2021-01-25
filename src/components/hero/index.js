import React from "react"
import "./hero.scss"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import HeroImage from "../../images/hero-headshot.png"
import HeroQuotes from "../../images/hero-quotes.png"

const Hero = () => {
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
      className="hero"
      fluid={data.backgroundImage.childImageSharp.fluid}
    >
      <div className="hero__content container">
        <div className="hero__textContainer">
          <h1>
            Your taxes.
            <span className="text-highlight"> Our</span> problem!
          </h1>
          <button className="btn">Get Started</button>
        </div>
        <div className="hero__imageContainer">
          {/* <Img
            className="hero__image"
            fluid={data.heroMainImage.childImageSharp.fluid}
          />
         <img src={HeroImage} className="hero__image" alt="" />
        */}
          <div className="hero__quote">
            <img src={HeroQuotes} alt="double quote" className="hero__doublequote" />
            <img src={HeroImage} className="hero__image" alt="hero" />
            <p>
              Hi! I am Daria. I am here to take accounting stress out of your
              cannabis business.
            </p>
            <p>
              Cannabis CPA serving dispensaries, distributors and cultivators in
              the state of California.
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
