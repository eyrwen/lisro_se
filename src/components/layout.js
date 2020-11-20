import React from "react"

import Menu from "./menu"

const Layout = ({ location, title, children, author }) => {
  return (
    <div className="global-wrapper">
      {/* <Menu author={author} /> */}
      {children}
    </div>
  )
}

export default Layout
