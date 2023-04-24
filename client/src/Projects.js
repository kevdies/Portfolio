import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

function Projects() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">My Projects</h1>
      <Row>
        <Col md="4">
          <Card>
            <CardImg top src="/AWE logo.png" alt="Aweful Skydiving" />
            <CardBody>
              <CardTitle>Aweful Skydiving</CardTitle>
              <CardText>
                <h5>
                  A skill-focused event platform for skydivers built with React,
                  Ruby on Rails, and PostgreSQL.
                </h5>
                <ul>
                  <li>
                    Created with React, Ruby on Rails, Active Record, Active
                    Storage, Reactstrap, Bootstrap, and PostgreSQL.
                  </li>
                  <li>
                    Implemented user authentication and authorization using
                    bcrypt.
                  </li>
                  <li>
                    Utilized Active Record for efficient database queries and
                    management.
                  </li>
                  <li>
                    Developed a responsive User Interface using Bootstrap and
                    Reactstrap.
                  </li>
                </ul>
              </CardText>
              <Button
                color="primary"
                href="https://youtu.be/7JUL1CPlHqg"
                target="_blank"
              >
                Demo
              </Button>{" "}
              <Button
                color="secondary"
                href="https://github.com/kevdies/aweful"
                target="_blank"
              >
                GitHub
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardImg top src="/project2.png" alt="Project 2" />
            <CardBody>
              <CardTitle>Project 2</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                laoreet tortor ac eros lobortis ultricies.
              </CardText>
              <Button color="primary" href="#">
                Demo
              </Button>{" "}
              <Button color="secondary" href="#">
                GitHub
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardImg top src="/project3.png" alt="Project 3" />
            <CardBody>
              <CardTitle>Project 3</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                laoreet tortor ac eros lobortis ultricies.
              </CardText>
              <Button color="primary" href="#">
                Demo
              </Button>{" "}
              <Button color="secondary" href="#">
                GitHub
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;


