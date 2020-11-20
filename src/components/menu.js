import { Link } from "gatsby"
import React from "react"

export default ({ author }) => {
  return (
    <div className="menu-container">
      <div className="menu">
        <MenuHeader author={author} />
        <MenuItem title={"Education"} linkTo={"/education"} />
        <MenuItem title={"Experience"} />
        <MenuItem title={"Certifications"} />
        <MenuItem title={"Skills"} />
      </div>
      <div className="menu-decoration" />
    </div>
  )
}

const MenuItem = ({ title, linkTo }) => {
  return (
    <Link to={linkTo} className="menu-element selectable">
      {title}
    </Link>
  )
}

const MenuHeader = ({ author }) => {
  return (
    <Link to="/" className="menu-element header">
      <div className="head">{author.name}</div>
      <div className="subhead">{author.summary}</div>
    </Link>
  )
}
