import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import html from "/src/assets/images/html.png";
import css from "/src/assets/images/css3.png";
import js from "/src/assets/images/javascript.png";
import Figma from "/src/assets/images/figma.png";
import xd from "/src/assets/images/xd.png";
import photoshop from "/src/assets/images/photoshop.png";
import premiere from "/src/assets/images/premiere-pro.png";

const TechStack = () => {
  const techLogos = [
    { name: "HTML5", src: html },
    { name: "CSS3", src: css },
    { name: "Javascript", src: js },
    { name: "Figma", src: Figma },
    { name: "Adobe XD", src: xd },
    { name: "Premiere Pro", src: premiere },
    { name: "Photoshop", src: photoshop },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-4"
    >
      <section className="py-3 mt-3 text-center">
        <Container>
          <h4 className="fw-bold text-dark mb-2">Tools</h4>
          <p className="text-muted mb-5">
            Technologies I’ve been working with recently
          </p>
          <Row className="justify-content-center g-4 mb-5 py-5">
            {techLogos.map((tech, idx) => (
              <Col key={idx} xs={4} sm={3} md={2} lg={3}>
                <img
                  className="text-center mb-2"
                  src={tech.src}
                  alt={tech.name}
                  title={tech.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
                <h6>{tech.name}</h6>
              </Col>
            ))}
          </Row>
          <hr />
        </Container>
      </section>
    </motion.div>
  );
};

export default TechStack;
