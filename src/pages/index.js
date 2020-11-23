import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

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
    x: 25,
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
    rose: file(absolutePath: { regex: "/rose.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

class DiagonalBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false,
    }
  }

  render() {
    const { translateX, color, zIndex, fontColor, title } = this.props
    const colorStyle = {
      backgroundColor: color,
      borderColor: color,
    }
    return (
      <div
        className="diagonal-box"
        style={{
          zIndex,
          ...colorStyle,
        }}
      >
        <div className="content">
          <span
            style={{
              color: fontColor,
              transform: `translateX(${translateX}vw)`,
            }}
          >
            {title}
          </span>
        </div>
      </div>
    )
  }
}
