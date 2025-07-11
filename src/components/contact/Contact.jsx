import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  FormControl,
  Alert,
} from "react-bootstrap";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4pzxer9", "template_yyga7ur", form.current, {
        publicKey: "_nhmAJ_iKdWzL13Oh",
      })
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  return (
    <div>
      <Container className="h-100 py-5" id="contact">
        <Row>
          <h4 className=" text-center fw-bold ">Contact</h4>
          <Container className="p-3">
            <Row className="gap-4">
              <Col className=" md={6} xs={12} bg-light p-3 d-flex justify-content-center">
                <div className="p-5">
                  <h6 className="fw-bold">
                    <i className="fas fa-envelope"></i> Email :
                  </h6>
                  <h6 className="text-muted">sivanmuthu04@gmail.com</h6>
                  <h6 className="fw-bold">
                    <i className="fas fa-phone "></i> Phone no :
                  </h6>
                  <h6 className="text-muted">9361043172</h6>
                  <h6 className="fw-bold">
                    <i className="fas fa-map-marker-alt"></i> Adresss :
                  </h6>
                  <p className="text-muted">
                   52 a megaligapuram, salai st  tirunelveli junction -627001
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={6} className="h-100 py-3">
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Control
                        type="text"
                        name="from_name"
                        placeholder="Name:"
                        required
                        className="mb-3 p-3 rounded-0"
                        style={{ backgroundColor: "#FFFFFF" }}
                      />
                    </Col>

                    <Col xs={12} md={6}>
                      <Form.Control
                        type="tel"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        name="from_mobile"
                        placeholder="mobile:"
                        required
                        className="mb-3 p-3 rounded-0"
                        style={{ backgroundColor: "#FFFFFF" }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Control
                        type="email"
                        name="from_email"
                        placeholder="Email:"
                        required
                        className="mb-3 p-3 rounded-0"
                        style={{ backgroundColor: "#FFFFFF" }}
                      />
                    </Col>
                  </Row>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message..."
                    className="mb-3"
                    name="message"
                    required
                  />
                  <div className="d-flex justify-content-center">
                    <Form.Control
                      type="submit"
                      value="Send Message"
                      className=" d-flex border-dark  rounded-4  "
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                        borderWidth: "2px",
                        width: "200px",
                      }}
                    />
                  </div>
                </form>
                {status === "success" && (
                  <Alert variant="secondary" className="mt-3">
                    Message sent successfully!
                  </Alert>
                )}
                {status === "error" && (
                  <Alert variant="danger" className="mt-3">
                    Failed to send message. Please try again.
                  </Alert>
                )}
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
