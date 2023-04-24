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
            I am a versatile Full Stack Software Engineer with expertise in
            object-oriented programming, web development, and database
            management. My proficiency includes JavaScript, Ruby, React, and
            Ruby on Rails, and I am skilled in SQL, PostgreSQL, HTML, CSS,
            Bootstrap, Reactstrap, Render, Git, Agile Methodologies, Test Driven
            Development, MVC Architecture, API Integration, REST API, User
            Authentication, and Data Validation.
          </p>
          <p className="lead">
            Aside from my passion for Full Stack Software Engineering, I have
            several hobbies that keep me active and energized. I love spending
            time outdoors and engaging in activities such as skydiving, road
            biking, mountain biking, hiking, backpacking, bikepacking, and
            camping. My experience in the entertainment, outdoor, and skydiving
            industries has given me exceptional leadership and organizational
            skills.
          </p>
          <p className="lead">
            Before becoming a Full Stack Software Engineer, I worked as a
            Skydiving Instructor at the Midwest Freefall Parachute Center, a
            Rigger and Stagehand for the International Allegiance of Theatrical
            Stage Employees in Washington D.C., and as a Backcountry Water
            Treatment Operator for the National Park Service in Yosemite,
            California. I also worked as a Restaurant Manager for Panda Veg in
            Richmond, Virginia.
          </p>
          <p className="lead">
            I obtained my Full Stack Software Engineer certification from
            Flatiron School, where I studied Ruby on Rails and JavaScript. My hobbies allow me to maintain a healthy
            work-life balance, stay active, and connect with nature. I believe
            that a well-rounded lifestyle is essential to being a successful
            Full Stack Software Engineer, and my hobbies provide me with the
            energy and inspiration to excel in my work.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
