import React from "react"
import {Link} from "gatsby"
import CheckIcon from "@material-ui/icons/Check"
import "./home-service-card.scss"
import { GatsbyImage } from "gatsby-plugin-image";

const ServiceCard = ({ icon, title, content }) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard__icon_container">
        <GatsbyImage image={icon} className="serviceCard__icon" />
      </div>
      <h3 className="serviceCard__title">{title}</h3>
      <ul className="serviceCard__list">
        {content.map((item,index) => (
          <li key={index}>
            <CheckIcon className="icon" /> <div>{item.text}</div>
          </li>
        ))}
      </ul>
      <div className="btn-container">
        <Link to="/contact/" className="btn-line">more info</Link>
      </div>
    </div>
  );
}

export default ServiceCard
