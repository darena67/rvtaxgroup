import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./footer.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  let data = useStaticQuery(graphql`
    query FooterContact {
      pagesYaml(page: { eq: "contact" }) {
        fb
        email
        phone
        linkedin
        intro
        address
        twitter
      }
    }
  `);
  data = data.pagesYaml;

  return (
    <footer>
      <div className="container">
        <StaticImage src="../../images/logo.png" className="footer__logo" alt="Logo" width="146" />
        <div className="footer__contact">
          <span>Any Question?</span>
          <span className="footer__number">{data.phone}</span>
          <span>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </span>
        </div>
        <div className="footer__social">
          <div>Connect with us</div>
          <div className="footer__iconContainer">
            <a href={data.fb} className="footer__socialIcons">
              <FacebookIcon fontSize="large" />
            </a>
            <a href={data.linkedin} className="footer__socialIcons">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href={data.twitter} className="footer__socialIcons">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          © 2021 RedEyeCPA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
