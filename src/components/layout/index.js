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
        onAccept={() => {
          Cookies.set('gatsby-gdpr-google-analytics', true, {path: "/"});
          Cookies.set('gatsby-gdpr-google-tagmanager', true, {path: "/"});
          Cookies.set('gatsby-gdpr-facebook-pixel', true, {path: "/"});
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Layout
