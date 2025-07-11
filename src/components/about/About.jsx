import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <section id="about">
        <Container className="bg-light p-5">
          <Row className="gap-5">
            <Col xs="12" md="6">
              <h4 className="fw-bold mb-3" style={{ color: "blue" }}>
                About Me
              </h4>
              <p className=" text-secondary mt-3">
              I’m a passionate UI/UX Designer with hands-on experience in crafting intuitive and visually engaging digital experiences. I specialize in designing user-centered, responsive interfaces that enhance usability and aesthetics across web and mobile platforms using tools like Figma, Adobe XD, and Sketch.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="mt-3 px-4 py-2 fw-semibold">
                  Resume
                </button>
              </a>
            </Col>
            <Col>
              <Row>
                <h4 className="fw-bold mb-3" style={{ color: "blue" }}>
                  Education
                </h4>
                <Col md="10" className="mt-3">
                  <h6 className="fw-bold">Bachelor in Computer Science</h6>
                  <p className=" text-muted mb-2 " style={{ fontSize: "16px" }}>
                    The Madurai Diraviyum Thayumanavar Hindu College
                  </p>
                  <div className="text-start d-flex justify-content-between text-muted small">
                    <span className="text-muted">Tirunelveli</span>
                    <span className="text-muted">2022 - 2025</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default About;
