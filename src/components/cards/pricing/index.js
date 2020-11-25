import React from "react"
import { Link } from "gatsby"
import "./pricing-card.scss"

import CheckIcon from "../../../images/icon_check.png"

const PricingCard = ({ title, subtitle, price, featureTitle, feature }) => {
  return (
    <div className="pricingCard">
      <h2>{title}</h2>
      <p className="pricingCard__subtitle">{subtitle}</p>
      <h3 className="pricingCard__pricing">{price}</h3>
      <h4 className="pricingCard__featureTitle">{featureTitle}</h4>
      <ul>
        {feature.map((item,index) => (
          <li key={index}>
            <img src={CheckIcon} alt="checkIcon" />
            {item.text}
          </li>
        ))}
      </ul>
      <div className="btn-container">
        <Link to="/contact" className="btn-line">
          inquire
        </Link>
      </div>
    </div>
  )
}

export default PricingCard
