import React from "react";
import "./Hero.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import profile from "/src/assets/images/power.png";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <section className="HeroSection py-5 bg-white" id="home">
        <Container className="p-lg-5">
          <Row className="align-items-center">
            <Col
              xs={12}
              md={6}
              className="text-center  text-md-start mb-5 mb-md-0"
            >
              <h1 className="fw-bold">
                Hi, <span style={{ color: "blue" }}>I'm</span>
              </h1>
              <h1 className="fw-bold display-5">SANTHANA KARUPPASAMY</h1>
              <p className="lead text-secondary">
               A passionate <b className="text-dark fw-bold">UI/UX</b > Designer and <b className="text-dark fw-bold">Video Editor</b> focused on creating visually stunning designs and engaging video content that deliver seamless and impactful user experiences.
              </p>
            </Col>
            <Col xs={12} md={6} className="text-center">

            <div  className="dashed-border  position-relative    shadow border gradient-ring  responsive-profile-img">
                      <img className="img-fluid pic" 
                src={profile}
                alt="Hero"
                
              />
            </div>
         
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};
