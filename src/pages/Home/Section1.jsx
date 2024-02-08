import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid fade-in-right" alt="Hero" />
              <div className="price_badge fade-in-right_price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">129/-</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion</h2>
              <p className="text-white pt-2 pb-4">
                A juicy symphony of perfectly grilled patties, melty cheese,
                crisp lettuce, and tangy sauce, nestled between two soft buns,
                creating a mouthwatering masterpiece
              </p>
              <Link to="/" className="order_now" role="button">
                Order now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
