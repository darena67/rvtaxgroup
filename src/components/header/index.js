import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from 'gatsby';
import "./header.scss"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

const Header = () => {
  let data = useStaticQuery(graphql`
    query headerImage {
			RedEyeLogoImage: file(relativePath: {eq: "logo.png"}) {
				childImageSharp {
					gatsbyImageData(height: 60 layout: FIXED, placeholder: BLURRED, backgroundColor: "white")
				}
			}
    }
  `);
  const [show, setShow] = useState("")

  return (
    <header>
      <div className="navbar container">
        <Link to="/">
          {/*<StaticImage height="60" src="../../images/logo.png" className="navbar__logo" alt="Navigation Logo" />*/}
          <GatsbyImage image={data.RedEyeLogoImage.childImageSharp.gatsbyImageData} className="footer__logo" alt="Logo" imgStyle={{ objectFit: "contain" }} />
        </Link>
        <MenuIcon className="nav__icon" onClick={() => setShow("show")} />

        <nav className={show}>
          <Link to="/" activeClassName="active">
            home
          </Link>
          <Link to="/blog/" activeClassName="active">
            blog
          </Link>
          <Link to="/pricing/" activeClassName="active">
            pricing
          </Link>
          <Link to="/about/" activeClassName="active">
            about us
          </Link>
          <Link to="/contact/" activeClassName="active" className="contact-nav">
            contact
          </Link>
          <CloseIcon className="nav__closeicon" onClick={() => setShow("")} />
        </nav>
      </div>
    </header>
  )
}

export default Header
