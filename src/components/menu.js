import React from "react"

export default ({ author }) => {
  return (
    <div className="menu-container">
      <div className="menu">
        <MenuHeader author={author} />
        <MenuItem title={"Education"} />
        <MenuItem title={"Experience"} />
        <MenuItem title={"Certifications"} />
        <MenuItem title={"Skills"} />
      </div>
      <div className="menu-decoration" />
    </div>
  )
}

const MenuItem = ({ title }) => {
  return <div className="menu-element selectable">{title}</div>
}

const MenuHeader = ({ author }) => {
  return (
    <div className="menu-element header">
      <div className="head">{author.name}</div>
      <div className="subhead">{author.summary}</div>
    </div>
  )
}
