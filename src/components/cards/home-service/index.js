import React from "react"
import CheckIcon from "@material-ui/icons/Check"
import "./home-service-card.scss"

const ServiceCard = ({ icon, title, content }) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard__icon_container">
        <img src={icon} alt="" />
      </div>
      <h3 className="serviceCard__title">{title}</h3>
      <ul className="serviceCard__list">
        {content.map(item => (
          <li>
            <CheckIcon className="icon" /> <div>{item}</div>
          </li>
        ))}
      </ul>
      <div className="btn-container">
        <button className="btn-line">more info</button>
      </div>
    </div>
  )
}

export default ServiceCard
