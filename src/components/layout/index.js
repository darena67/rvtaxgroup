import React from "react"
import Header from "../header"

import "../../common/styles/main.scss"
import Footer from "../footer"

import CookieConsent, { Cookies } from 'react-cookie-consent'


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        OnAccept={() => {
          Cookies.set('gatsby-gdpr-google-analytics', 'gatsby-gdpr-google-tagmanager', 'gatsby-gdpr-facebook-pixel', { value: true });
          alert("Accept was triggered by clicking the Accept button");
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Layout
