import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import './home-hero.scss';


const HomeHero = ({ heroQuote }) => {
  const data = useStaticQuery(graphql`{
  backgroundImage: file(relativePath: {eq: "hero-bg.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  HeroHeadshotImage: file(relativePath: {eq: "hero-van.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, backgroundColor: "white")
    }
  }
  HeroQuoteImage: file(relativePath: {eq: "hero-quotes.png"}) {
    childImageSharp {
      gatsbyImageData(width: 100, layout: FIXED, placeholder: BLURRED, backgroundColor: "white")
    }
  }
}
`);

  console.log('data', data);
  return (
    <BackgroundImage
      className="homehero"
      fluid={data.backgroundImage.childImageSharp.gatsbyImageData}
    >
      <div className="container">
        <div className="hero__headings">
          <h1 className="hero__heading hero__uppercase">
            Your taxes
          </h1>
          <div>
            <h1 className="hero__heading_border hero__uppercase">Our problem!</h1>
          </div>
            <Link to="/contact/" className="btn hero__btn">
              Get Started
            </Link>

        </div>

        <div className="hero__headings-mobile">
          <h1 className="hero__heading-mobile hero__uppercase">
            Your taxes <span className="heading-bold">Our problem!</span>
          </h1>
          <Link to="/contact/" className="btn hero__btn">
            Get Started
          </Link>

        </div>

        <div className="hero__image">
          <GatsbyImage
            image={data.HeroHeadshotImage.childImageSharp.gatsbyImageData}
            className="hero__image"
            alt="Dasha Nagal CPA/EA"/>
        </div>
        {/*
          <div className="hero__blockquote">
            <GatsbyImage
              image={data.HeroQuoteImage.childImageSharp.gatsbyImageData}
              alt="double quote"
              className="hero__doublequote" />
          <div
            className='hero__quote'
            dangerouslySetInnerHTML={{ __html: heroQuote }}
          ></div>
        </div>*/}

      </div>
    </BackgroundImage>
  );
};

export default HomeHero;
