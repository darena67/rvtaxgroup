import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./footer.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import { GatsbyImage } from "gatsby-plugin-image"

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
			RedEyeLogoImage: file(relativePath: {eq: "logo.png"}) {
				childImageSharp {
					gatsbyImageData(height: 60 layout: FIXED)
				}
			}
    }
  `);
  const yaml = data.pagesYaml;

  return (
    <footer>
      <div className="container">
        <GatsbyImage image={data.RedEyeLogoImage.childImageSharp.gatsbyImageData} className="footer__logo" alt="Logo" imgStyle={{ objectFit: "contain" }} />
        <div className="footer__contact">
          <span>Any Questions?</span>
          <span className="footer__number">{yaml.phone}</span>
          <span>
            <a href={`mailto:${yaml.email}`}>{yaml.email}</a>
          </span>
        </div>
        <div className="footer__social">
          <div>Connect with us</div>
          <div className="footer__iconContainer">
            <a href={yaml.fb} className="footer__socialIcons">
              <FacebookIcon fontSize="large" />
            </a>
            <a href={yaml.linkedin} className="footer__socialIcons">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href={yaml.twitter} className="footer__socialIcons">
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
