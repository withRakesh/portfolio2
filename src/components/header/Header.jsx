import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
 

const Header = () => {
  return (
    <Navbar
      className="navbar"
      sticky="top"
      bg="white"
      variant="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#">
          <i>
            <span style={{ color: "blue" }}>PortFolio</span>
          </i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto d-flex gap-4 ">
            <Link
              className="navbar-link text-secondary  text-decoration-none"
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Home
            </Link>
            <Link
              className="navbar-link text-secondary  text-decoration-none"
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              About
            </Link>
            <Link
              className="navbar-link text-secondary  text-decoration-none"
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Projects
            </Link>
            <Link
              className="navbar-link text-secondary  text-decoration-none"
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Contact
            </Link>
          </Nav>

          <Nav className="ms-auto d-flex flex-row gap-3 ">
            
            <Nav.Link
              href="https://linkedin.com/in/sanathana-karuppasamay-9149b2315"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin"
                style={{ color: "black", fontSize: "20px" }}
              ></i>
            </Nav.Link>
            <Nav.Link
              href=" https://wa.me/919361043172"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-whatsapp"
                style={{ color: "black", fontSize: "20px" }}
              ></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
