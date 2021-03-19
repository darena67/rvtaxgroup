import React from "react";
import "./service-card.scss";
import { GatsbyImage } from "gatsby-plugin-image";

const ServicePageCard = ({ image, title, subtitle, content }) => {
  return (
    <div className="servicePageCard">
      <GatsbyImage image={image} className="servicePageCard__image" alt="service card" />
      <div className="servicePageCard__heading">
        <h3>{title}</h3>
        <h6>{subtitle}</h6>
      </div>
      <p className="servicePageCard__content">{content}</p>
    </div>
  );
};

export default ServicePageCard;
