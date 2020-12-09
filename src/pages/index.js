import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const ContentTypes = {
  EDUCATION: "Education",
  EXPERIENCE: "Experience",
  CERTIFICATIONS: "Certifications",
  SKILLS: "Skills",
}

const labelOrder = [
  ContentTypes.EDUCATION,
  ContentTypes.EXPERIENCE,
  ContentTypes.CERTIFICATIONS,
  ContentTypes.SKILLS,
]

const labelToColor = {
  [ContentTypes.EDUCATION]: {
    color: "#D9ADB5",
    header: "#592341",
    text: "#012840",
  },
  [ContentTypes.EXPERIENCE]: {
    color: "#592341",
    header: "#D9ADB5",
    text: "#bd746e",
  },
  [ContentTypes.CERTIFICATIONS]: {
    color: "#012840",
    header: "#bd746e",
    text: "#D9ADB5",
  },
  [ContentTypes.SKILLS]: {
    color: "#bd746e",
    header: "#012840",
    text: "#592341",
  },
}

const ContentHeader = ({ label, text, sub }) => {
  return (
    <div>
      <h4
        style={{
          color: labelToColor[label].header,
          display: "inline-block",
          paddingRight: 32,
        }}
      >
        {text}
      </h4>
      <span style={{ color: labelToColor[label].text }}>{sub}</span>
    </div>
  )
}

const Content = ({ label, children }) => {
  return (
    <div className="content" style={{ color: labelToColor[label].text }}>
      {children}
    </div>
  )
}

const DatedSpan = ({ text, date }) => {
  return (
    <span>
      {text}
      <em className="light" style={{ paddingLeft: 32 }}>
        {date}
      </em>
    </span>
  )
}

const labelToContent = {
  [ContentTypes.EDUCATION]: (
    <Content label={ContentTypes.EDUCATION}>
      <ContentHeader
        label={ContentTypes.EDUCATION}
        text="Shippensburg University"
        sub={<DatedSpan text="Shippensburg, PA." date=" Aug. 2014-May 2018" />}
      />
      <div>
        <strong>Major:</strong> Software Engineering, B.S.
      </div>
      <div>
        <strong>GPA:</strong> 3.52 <em>(Cum Laude)</em>
      </div>
    </Content>
  ),
  [ContentTypes.EXPERIENCE]: (
    <div>
      <Content label={ContentTypes.EXPERIENCE}>
        <ContentHeader
          label={ContentTypes.EXPERIENCE}
          text="Software Engineer II"
          sub={<DatedSpan text="BAE Systems" date="July 2018-(Current)" />}
        />
      </Content>
      <hr
        style={{
          backgroundColor: labelToColor[ContentTypes.EXPERIENCE].header,
        }}
      />
      <Content label={ContentTypes.EXPERIENCE}>
        <ContentHeader
          label={ContentTypes.EXPERIENCE}
          text="Full Stack Developer"
          sub={
            <DatedSpan
              text="Shippensburg University"
              date="Aug. 2017-May 2018"
            />
          }
        />
      </Content>
    </div>
  ),
  [ContentTypes.CERTIFICATIONS]: (
    <Content label={ContentTypes.CERTIFICATIONS}>
      <DatedSpan
        text="Certified SAFe® 4 Practitioner"
        date="Feb. 2020-Feb. 2021"
      />
    </Content>
  ),
  [ContentTypes.SKILLS]: (
    <Content label={ContentTypes.SKILLS}>
      <div>
        <strong>Proficient:</strong> Java, C, Python, Ruby, Git, SVN, JUnit,
        SQL, Javascript, HTML/CSS, React, Redux, Agile (XP/Scrum), TDD
      </div>
      <div>
        <strong>Intermediate:</strong> C++, CMake, DDS, Cesium, MongoDB,
        MaterialUI, Godot, GraphQL, Gatsby, Netlify
      </div>
      <div>
        <strong>Familiar:</strong> C#, Maven, Jetty, Docker, SpringBoot
      </div>
    </Content>
  ),
}

class Home extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout author={data.site.siteMetadata.author}>
          {labelOrder.map((label, index) => (
          <div
            className="content-container"
            style={{
              backgroundColor: labelToColor[label].color,
              color: labelToColor[label].header,
            }}
            >
            <div className="title">{label}</div>
              {labelToContent[label]}
        </div>
        ))}
      </Layout>
    )
  }
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
  }
`
