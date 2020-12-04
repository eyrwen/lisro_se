import React from "react"
import Bio from "./bio"

const Layout = ({ location, title, children, author }) => {
  return (
    <div className="global-wrapper">
      {/* <Menu author={author} /> */}
      {children}
      {/* <Bio /> */}
    </div>
  )
}

export default Layout
