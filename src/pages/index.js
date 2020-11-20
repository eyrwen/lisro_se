import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const colorOrder = [
    { color: "#D9ADB5", fontColor: "#592341" },
    { color: "#592341", fontColor: "#D9ADB5" },
    { color: "#012840", fontColor: "#A66660" },
    { color: "#A66660", fontColor: "#012840" },
  ]
  const labelOrder = ["Education", "Experience", "Certifications", "Skills"]
  const labelSpacing = {
    x: 300,
    y: 45,
  }
  return (
    <Layout author={data.site.siteMetadata.author}>
      <div className="all-diagonal-container">
        {labelOrder.map((label, index) => (
          <DiagonalBox
            key={label}
            title={label}
            order={index}
            color={colorOrder[index].color}
            fontColor={colorOrder[index].fontColor}
            zIndex={index}
            translateY={index * labelSpacing.y}
            translateX={index * labelSpacing.x}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Education" } }) {
      html
    }
  }
`

const DiagonalBox = ({
  title,
  translateY = 0,
  translateX = 0,
  zIndex = 0,
  color,
  fontColor,
}) => {
  return (
    <div
      className="diagonal-box-container"
      style={{
        transform: `translateY(${translateY + 100}px)`,
        zIndex,
      }}
    >
      <div className="diagonal-box" style={{ backgroundColor: color }}>
        <div className="content">
          <h3
            style={{
              color: fontColor,
              transform: `translateX(${translateX}px)`,
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}
