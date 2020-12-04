import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/logo"

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
const labelSpacing = {
  x: 25,
}

const labelToColor = {
  [ContentTypes.EDUCATION]: {
    color: "#D9ADB5",
    header: "#592341",
    text: "#012840",
  },
  [ContentTypes.EXPERIENCE]: {
    color: "#592341",
    header: "#D9ADB5",
    text: "#A66660",
  },
  [ContentTypes.CERTIFICATIONS]: {
    color: "#012840",
    header: "#A66660",
    text: "#D9ADB5",
  },
  [ContentTypes.SKILLS]: {
    color: "#A66660",
    header: "#012840",
    text: "#592341",
  },
}

const ContentHeader = ({ label, text, sub }) => {
  return (
    <div>
      <h3
        style={{
          marginBlockStart: 0,
          marginBlockEnd: 0,
          color: labelToColor[label].header,
          display: "inline-block",
          paddingRight: 32,
        }}
      >
        {text}
      </h3>
      <span style={{ color: labelToColor[label].text }}>{sub}</span>
    </div>
  )
}

const Content = ({ label, children }) => {
  return (
    <div className="content" style={{ color: labelToColor[label].text }}>
      <hr style={{ backgroundColor: labelToColor[label].header }} />
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
    <>
      <Content label={ContentTypes.EXPERIENCE}>
        <ContentHeader
          label={ContentTypes.EXPERIENCE}
          text="Software Engineer II"
          sub={<DatedSpan text="BAE Systems" date="July 2018-(Current)" />}
        />
      </Content>
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
    </>
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
        <div className="all-diagonal-container">
          <header>
            <Logo />
            <div className="text-container">
              <div className="main">Lis Rose</div>
              <div className="sub">Ostrow</div>
              <div className="small">Software Engineer</div>
            </div>
          </header>
          {labelOrder.map((label, index) => (
            <DiagonalBox
              key={label}
              title={label}
              order={index}
              color={labelToColor[label].color}
              fontColor={labelToColor[label].header}
              zIndex={index}
              translateX={index * labelSpacing.x}
            >
              {labelToContent[label]}
            </DiagonalBox>
          ))}
        </div>
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

const DIAGONAL_BAR_HEIGHT = 50
const DIAGONAL_PADDING = 16
const HOVER_GROW = 10

class DiagonalBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hiddenContentHeight: 0,
      mounted: false,
      hover: false,
      open: false,
    }
  }

  componentDidMount() {
    this.setState({
      hiddenContentHeight: this.hideableContent.scrollHeight,
      mounted: true,
    })
  }

  render() {
    const { translateX, color, zIndex, fontColor, title, children } = this.props
    const colorStyle = {
      backgroundColor: color,
      borderColor: color,
    }
    let displayHeight = DIAGONAL_BAR_HEIGHT
    if (this.state.open) {
      displayHeight += this.state.hiddenContentHeight + DIAGONAL_PADDING
    } else if (this.state.hover) {
      displayHeight += HOVER_GROW
    }
    return (
      <div
        className="diagonal-box"
        style={{
          zIndex,
          height: displayHeight,
          paddingBottom: DIAGONAL_PADDING,
          ...colorStyle,
        }}
        onClick={() => {
          this.setState({ open: !this.state.open })
        }}
        onMouseEnter={() => {
          this.setState({ hover: true })
        }}
        onMouseLeave={() => {
          this.setState({ hover: false })
        }}
      >
        <div className="diagonal-inner">
          <div
            className="always-show"
            style={{
              color: fontColor,
              transform: `translateX(${translateX}vw)`,
            }}
          >
            {title}
          </div>
        </div>
        <div
          className="diagonal-inner"
          ref={el => {
            this.hideableContent = el
          }}
          style={{
            display: this.state.open || !this.state.mounted ? "" : "none",
          }}
        >
          {children}
        </div>
      </div>
    )
  }
}
