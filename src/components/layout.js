import React from "react"
import Bio from "./bio"
import Logo from "./logo"

const Layout = ({ location, title, children, author }) => {
  return (
    <div className="global-wrapper">
      <header>
        <Logo />
        <div className="text-container">
          <div className="main">Lis Rose</div>
          <div className="sub">Ostrow</div>
          <div className="small">Software Engineer</div>
        </div>
      </header>
      {children}
      <Bio />
    </div>
  )
}

export default Layout
