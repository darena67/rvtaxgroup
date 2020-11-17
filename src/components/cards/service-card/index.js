import React from "react"
import "./service-card.scss"

const ServicePageCard = ({ image, title, subtitle, content }) => {
  return (
    <div className="servicePageCard">
      <div className="servicePageCard__image">
        <img src={image} alt="service card" />
      </div>
      <div className="servicePageCard__content">
        <h3>{title}</h3>
        <h6>{subtitle}</h6>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ServicePageCard
