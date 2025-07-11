import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import weatherImg from "/src/assets/images/roomsProject.png";
 
const Projects = () => {
  const projects = [
    {
      Img: weatherImg,
      title: "PG Finder",
      description:
        "PG Finder is a mobile-friendly web application designed to help users discover and book the best Paying Guest accommodations (PGs) near their location. The platform simplifies the process of finding PGs by offering location-based listings, search filters, ratings, and pricing—all in a clean, user-friendly interface.",
      link: "https://www.figma.com/proto/WFt2BGyIbfARQPEdTpD0nX?node-id=345-384&t=q7gKaMHF9I5iVPo8-6",
    },
  ];

  return (
    <div>
      <Container className="my-2">
        <h4 className="fw-bold text-dark mb-2 text-center mb-4" id="projects">
          Projects
        </h4>
        <Row className="g-4 p-3" xs={1} md={3}>
          {projects.map((project, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex">
              <Card className="h-100  d-flex flex-column justify-content-between overflow-hidden">
                <motion.img
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ height: "200px", objectFit: "cover" }}
                  src={project.Img}
                  alt={project.title}
                  variants={top}
                />
                <Card.Body className="d-flex flex-column flex-grow-1">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <Row>
                    <Col className="mb-2 ">
                      <a
                        href={project.link}
                        className="fs-6 text-dark "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-arrow-up-right-from-square mx-1"></i>
                        Live Demo
                      </a>
                    </Col>
                    <Col className="text-end">
                      <a
                        href={project.githubLink}
                        className="text-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
