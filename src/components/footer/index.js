import React from "react"
import "./footer.scss"

import Logo from "../../images/logo.png"
import FBIcon from "../../images/icon_fb.png"
import LinkedIcon from "../../images/icon_linkedin.png"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src={Logo} className="footer__logo" alt="logo"></img>
        <div className="footer__contact">
          <span>Any Question?</span>
          <span className="footer__number">+1-1245-14582</span>
          <span>mail@doamin.com</span>
        </div>
        <div className="footer__social">
          <div>Connect with us</div>
          <div className="footer__iconContainer">
            <a href="facebook.com">
              <img src={FBIcon} alt="" />
            </a>
            <a href="linkedin.com">
              <img src={LinkedIcon} alt="" />
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
