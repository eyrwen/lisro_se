/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            resume
            source
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <span>
          <a href={social?.resume}>
            <FontAwesomeIcon icon="file-alt" aria-label="Resume" size="lg" />
          </a>
          <a href={social?.source}>
            <FontAwesomeIcon
              icon={["fab", "github"]}
              aria-label="Source Code"
              size="lg"
            />
          </a>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              aria-label="Twitter"
              size="lg"
            />
          </a>
        </span>
      )}
    </div>
  )
}

export default Bio
