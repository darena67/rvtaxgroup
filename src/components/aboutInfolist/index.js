import React from "react"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import "./about-infolist.scss"
import { GatsbyImage } from "gatsby-plugin-image";

const AboutInfoList = ({ image }) => {
  return (
    <div className="aboutInfolist container">
      <GatsbyImage image={image} className="container" alt="About Illustration" />
      <ul>
        <li>
          <CheckCircleIcon className="icon" />
          <div>We are upfront, knowledgeable, and diligent.</div>
        </li>
        <li>
          <CheckCircleIcon className="icon" />
          <div> We thoroughly research tax regulations.</div>
        </li>
        <li>
          <CheckCircleIcon className="icon" />
          <div>
            We make sure that you are tax compliant and you get as much tax
            benefit as you legally can.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AboutInfoList
