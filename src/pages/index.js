import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

class CollapsibleDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <div
          className="collapse"
          onClick={() => {
            this.setState({ open: !this.state.open })
          }}
        >
          <FontAwesomeIcon
            icon={this.state.open ? "minus" : "plus"}
            size="xs"
            aria-label={this.state.open ? "Collapse" : "Expand"}
          />
          <div>Details</div>
        </div>
        {this.state.open && children}
      </div>
    )
  }
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
        <h6 style={{ color: labelToColor[ContentTypes.EXPERIENCE].header }}>
          Collaborative Weapon Path Planner
        </h6>
        <div>
          A single page web app to support 3-dimensional mission planning for
          aerial assets. The goals of the product were to modernize mission
          planning and alleviate the stress of user input by incorporating
          automation and employing UX techniques.
        </div>
        <CollapsibleDetails>
          <ul>
            <li>
              Managed, supported, and developed major external service
              integrations including capabilities like manual import, manual
              data entry, and automated service requests
            </li>
            <li>
              Created an extensible export device to convert internal app state
              to human-friendly, and third-party usable JSON
            </li>
            <li>
              Implemented app start up workflow to guide the user through any
              necessary imports and dependencies and prevent confusing user
              states
            </li>
            <li>
              Implemented a key workflow planning feature that automates much of
              what used to be manual input by communicating with external
              service providers
            </li>
            <li>
              Added data fetching capability to assist in testing and
              distributed use
            </li>
            <li>
              Extended Cesium widgets to deliver customer-requested
              functionality and enhance existing widget functionality, such as:
              <ul>
                <li>
                  Implemented a custom aimation widget using MaterialUI
                  components that blend more seemlessly with the rest of the app
                  and are simplified to be more user-friendly than the Cesium
                  default
                </li>
                <li>
                  Extended Cesium timeline widget by adding timeline markers
                  that coincide with key mission events and are linked to map
                  locations
                </li>
              </ul>
            </li>
            <li>
              Refined support for external military text format to improve
              extensibilty and reuse capabilities
            </li>
            <li>
              Containerized runtime environment (Jetty and MongoDB) using Docker
              to reduce install footprint
            </li>
            <li>Supported and demoed at regular software delivery events</li>
          </ul>
        </CollapsibleDetails>
        <div>
          <strong>Relevant Skills: </strong>Java, React, Redux, MaterialUI,
          Cesium, Git, MongoDB, RabbitMQ, SpringBoot, Node, Webpack, JUnit,
          Jest, and Chrome developer tools
        </div>
        <hr
          style={{
            backgroundColor: labelToColor[ContentTypes.EXPERIENCE].header,
          }}
        />
        <h6 style={{ color: labelToColor[ContentTypes.EXPERIENCE].header }}>
          Advanced Technology Autorouter
        </h6>
        <div>
          On-board aircraft tool that routes the best path through points based
          on provided environmental data
        </div>
        <CollapsibleDetails>
          <ul>
            <li>
              Implemented a standalone weather module that retrieves up to date
              military weather and wind data and interprets into areas of
              avoidance to account for during route planning
            </li>
          </ul>
        </CollapsibleDetails>
        <div>
          <strong>Relevant Skills: </strong>C++, Git, DDS messaging, Visual
          Studio, layered architecture, Native Unit Test, and Google Test
        </div>
        <hr
          style={{
            backgroundColor: labelToColor[ContentTypes.EXPERIENCE].header,
          }}
        />
        <h6 style={{ color: labelToColor[ContentTypes.EXPERIENCE].header }}>
          Scrum Master
        </h6>
        <div>
          A role I performed in addition to my development role. My goal was to
          facilitate moving the team to a more Agile-driven process using key
          points from Scrum methodology and my SAFe certification.
        </div>
        <CollapsibleDetails>
          <ul>
            <li>
              Helped implement the team's initial development process by
              establishing a Sprint and Retrospective cadence
            </li>
            <li>
              Managed and implemented process changes based on team feedback,
              such as:
              <ul>
                <li>
                  Incorporated task-board review into daily stand-up meetings to
                  help focus discussion and ensure task completion data stays up
                  to date for accurate development statistics
                </li>
                <li>
                  Implemented a backlog cleanup plan with the team's Program
                  Manager to help streamline sprint planning and prevent backlog
                  bloat
                </li>
              </ul>
            </li>
            <li>
              Operated as a customer mediator to ensure customer expectations
              were achievable for delivery windows
            </li>
          </ul>
        </CollapsibleDetails>
        <div>
          <strong>Relevant Skills: </strong> Agile development, Scrum, SAFe,
          Kanban, leadership, planning, and coordination
        </div>
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
              text="BROADSIDE Center, Shippensburg University"
              date="Aug. 2017-May 2018"
            />
          }
        />
        <h6 style={{ color: labelToColor[ContentTypes.EXPERIENCE].header }}>
          Memory Chest
        </h6>
        <div>
          A collaborative effort between the Jornalism Department and Computer
          Science and Engineering Department to create a dynamic yearbook web
          app that combines multiple campus media publications into one, easy to
          reach place. The main goals of the product were to provide an easy
          view of university life for prospective students and alumni and to
          provide a web portal for campus media services to digitize
          publications.
        </div>
        <CollapsibleDetails title="Details">
          <ul>
            <li>
              Mapped related articles using a tagging system to encourage user
              exploration
            </li>
            <li>
              Lead sprint cycle planning discussions with customers to encourage
              customer investment in product details and ensure accurate
              software deliveries
            </li>
            <li>
              Lead sprint cycle planning with software team and assisted task
              decomposition to ensure accurate development time estimates{" "}
            </li>
            <li>
              Lead regular customer demos at the end of every sprint cycle
            </li>
            <li>Lead software development team as a senior developer</li>
            <li>
              Promoted prototype product to alumni and campus media services at
              events such as Minds@Work and Innovation Hour
            </li>
          </ul>
        </CollapsibleDetails>
        <div>
          <strong>Relevant Skills: </strong>Full Stack Web Development, Agile
          Development Process, Ruby on Rails, Javascript, SQL, Git, customer
          engagement, public speaking, minitest, and rspec
        </div>
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
