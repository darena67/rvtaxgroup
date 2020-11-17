import React from "react"
import "./about-card.scss"

const AboutCard = ({ image, name }) => {
  return (
    <div className="aboutCard">
      <img src={image} alt="Svetlana" />
      <div className="about__CardContent">
        <h3 className="about__title">{name}</h3>
        <p>
          Svetlana has over ten years of various accounting experience. She has
          worked on the audit side of public accounting and held a couple of
          senior accountant positions in the banking and tourism industries.
        </p>
        <p>
          Svetlana is a Quickbooks expert and an accounting wizard. At Red Eye
          CPA Svetlana is in charge of Cannabis bookkeeping and preparation of
          financial statements.
        </p>
      </div>
    </div>
  )
}

export default AboutCard
