import React from "react"
import { Link } from "gatsby"

import "./hero-others.scss"

const HeroOther = ({ title, image, intro }) => {
  return (
    <div className="heroOther">
      <div className="container">
        <div className="heroOther__content">
          <h1 className="heroOther__title">{title}</h1>
          <h3  className="heroOther__subtitle">{intro}</h3>
          <Link to="/contact/" className="heroOther__cta btn">
            Get Started
          </Link>
        </div>
        <img src={image} alt="Ilustration" className="heroOther__ilustration" />
      </div>
    </div>
  )
}

export default HeroOther
