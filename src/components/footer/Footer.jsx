import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#343a40", color: "#fff", padding: "30px 0" }}>
      <Container fluid>
        <Row>
           <Col md={4} className="text-center mb-3">
            <h6 className="mb-3">Quick Links</h6>
            <ul style={{ listStyle: "none ", paddingLeft: 0 }} className="d-flex flex-column gap-3">
               <Link to="home" style={{color:"gray"}}>Home</Link>
               <Link to="about" style={{color:"gray"}}>About</Link>
               <Link to="projects" style={{color:"gray"}}>Projects</Link>
               <Link to="contact" style={{color:"gray"}}>Contact</Link>
            </ul>
          </Col>
          <Col md={4} className="text-center mb-4 d-flex align-items-center justify-content-center gap-3 ">
             <a href="https://linkedin.com/in/sanathana-karuppasamay-9149b2315" className="text-white"><i className=" fab fa-linkedin"></i></a> 
             <a href="https://wa.me/919361043172" className="text-white"><i className=" fab fa-whatsapp"></i></a> 
          </Col>
          <Col md={4} className="text-center mb-3 ">
            <Row className="mx-auto">
                <h5 className="mb-3  ">Contact</h5>
              <Col xs={12} className="text-center">
              <p className="lead" style={{fontSize:"15px"}}>sivanmuthu04@gmail.com </p>
                 <p className="lead" style={{fontSize:"15px"}}>9361043172</p>
                    <p className="lead" style={{fontSize:"15px"}}>Tirunelveli</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr style={{ borderColor: "#555" }} />
        <Row>
          <Col className="text-center">
            <p>© {new Date().getFullYear()} Santhana Karuppasamy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
 