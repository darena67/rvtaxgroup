import React from "react"
import "./about-card.scss"
import Img from "gatsby-image"

const AboutCard = ({  name, photo, desc, position }) => {
  return (
    <div className="aboutCard">
      <Img fluid={photo} className="about__photo"/>
      <div className="about__CardContent">
      <h3 className="about__title">{name}<span>{position}</span></h3>
        <div className="about__description" dangerouslySetInnerHTML={{ __html: desc }}></div>
      </div>
    </div>
  )
}

export default AboutCard
