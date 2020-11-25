import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import "./footer.scss"

import Logo from "../../images/logo.png"


import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Footer = () => {
  let data = useStaticQuery(graphql`
  query FooterContact{
    pagesYaml(page: {eq: "contact"}) {
      fb
      email
      phone
      linkedin
      intro
      address
    }
  }
  `)
  data = data.pagesYaml;
  
  return (
    <footer>
      <div className="container">
        <img src={Logo} className="footer__logo" alt="logo"></img>
        <div className="footer__contact">
          <span>Any Question?</span>
  <span className="footer__number">{data.phone}</span>
  <span>{data.email}</span>
        </div>
        <div className="footer__social">
          <div>Connect with us</div>
          <div className="footer__iconContainer">
            <a href={data.fb} className="footer__socialIcons">
              <FacebookIcon  fontSize="large" />
            </a>
            <a href={data.linkedin} className="footer__socialIcons" >
              <LinkedInIcon   fontSize="large" />
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          © 2020 RedeyeCPA. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
