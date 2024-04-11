import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="JS CRUD"
              description="I have performed Add , delete, update using javascripit with array methods and another logic."
              ghLink="https://github.com/rajsinhbarad/CRUD.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bootstarp Layout"
              description="I have completed responsive website using grid system and other classes in Bootstrap."
              ghLink="https://github.com/rajsinhbarad/allan-johnson.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="React CRUD"
              description="I have performed Add , delete, update using React with array methods and another logic."
              ghLink="https://github.com/rajsinhbarad/React-CRUD.git"            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
