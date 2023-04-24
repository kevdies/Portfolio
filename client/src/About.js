import React from "react";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Hello, I'm Kevin Diesenberg</h1>
      <Row className="mb-4 text-center">
        <Col md="4">
          <img
            src="/kevin-artichoke.png"
            alt="Kevin-Artichoke"
            className="img-fluid rounded mb-4"
          />
        </Col>
        <Col md="4">
          <img
            src="/portfolio-picture.png"
            alt="Lake-Huron"
            className="img-fluid rounded mb-4"
          />
        </Col>
        <Col md="4">
          <img
            src="/kevin-pink-shirt.png"
            alt="Kevin-Emily"
            className="img-fluid rounded mb-4"
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p className="lead">
            I am a software engineer with experience in React, Rails, and SQL. I
            enjoy solving complex problems and learning new technologies.
          </p>
          <p>
            In my free time, I like to read books, go on hikes, and play guitar.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
