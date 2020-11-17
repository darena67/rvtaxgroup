import React, { useState } from "react"
import { Link } from "gatsby"
import "./header.scss"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import Logo from "../../images/logo.png"

const Header = () => {
  const [show, setShow] = useState("")

  return (
    <header>
      <div className="navbar container">
        <Link to="/">
          <img src={Logo} className="navbar__logo" alt="" />
        </Link>
        <MenuIcon className="nav__icon" onClick={() => setShow("show")} />

        <nav className={show}>
          <Link to="/" activeClassName="active">
            home
          </Link>
          <Link to="/about" activeClassName="active">
            about us
          </Link>
          <Link to="/services" activeClassName="active">
            services
          </Link>
          <Link to="/pricing" activeClassName="active">
            pricing
          </Link>
          <Link to="/blog" activeClassName="active">
            blog
          </Link>
          <Link to="/contact" activeClassName="active" className="contact-nav">
            contact
          </Link>
          <CloseIcon className="nav__closeicon" onClick={() => setShow("")} />
        </nav>
      </div>
    </header>
  )
}

export default Header
