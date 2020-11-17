import React from "react"
import { Link } from "gatsby"

import "./hero-others.scss"

const HeroOther = ({ title, subtitle, image }) => {
  return (
    <div className="heroOther">
      <div className="container">
        <div className="heroOther__content">
          <h1 className="heroOther__title">{title}</h1>
          {subtitle.map(item => (
            <h3 className="heroOther__subtitle">{item}</h3>
          ))}

          <Link to="/contact" className="heroOther__cta btn">
            Get Started
          </Link>
        </div>
        <img src={image} alt="" className="heroOther__ilustration" />
      </div>
    </div>
  )
}

export default HeroOther
