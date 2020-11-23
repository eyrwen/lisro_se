import React from "react"

const Layout = ({ location, title, children, author }) => {
  return (
    <div className="global-wrapper">
      {/* <Menu author={author} /> */}
      {children}
    </div>
  )
}

export default Layout
