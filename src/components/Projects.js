import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project_1.png";
import projImg2 from "../assets/img/project_3.png";
import projImg3 from "../assets/img/project_4.png";
import projImg4 from "../assets/img/project_5.png";
import projImg5 from "../assets/img/project_9.png";
import projImg6 from "../assets/img/project_8.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "ANDROMEDA",
      description: "REACTJS, BOOTSTRAP, PHP, MYSQL",
      imgUrl: projImg1,
    },
    {
      title: "ADMIN PANEL WOMEN CENTER",
      description: "REACTJS, TAILWIND, INTEGRATION API",
      imgUrl: projImg2,
    },
    {
      title: "ZOOTOPIA",
      description: "REACTJS, BOOTSTRAP, FIREBASE",
      imgUrl: projImg3,
    },
    {
      title: "KEBUN RAYA INDROKILO",
      description: "BOOTSTRAP, CODEIGNITER, MYSQL",
      imgUrl: projImg4,
    },
    {
      title: "TENDERPLUS",
      description: "BOOTSTRAP, CODEIGNITER, MYSQL",
      imgUrl: projImg5,
    },
    {
      title: "GUBUK VENTIR",
      description: "BOOTSTRAP, JAVASCRIPT",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some of the projects I've created with different
                    technologies.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
