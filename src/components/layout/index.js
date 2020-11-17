import React from "react"
import Header from "../header"

import "../../common/styles/main.scss"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
