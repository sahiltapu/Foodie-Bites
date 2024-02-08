import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              Enjoy the convenience of a swift 30-minute delivery, bringing the
              goodness directly to your doorstep with speed and efficiency
            </p>
            <Link to="tel:999-888-7777" className="btn_red px-4 py-2 rounded-0" style={{textDecoration:"none"}}>
              Call: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
